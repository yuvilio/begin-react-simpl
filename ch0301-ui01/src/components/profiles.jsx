import React from 'react';
import catalogEntriesJson from '../../data/catalog.json' // data we'll output

import { CatalogEntry } from './catalog-entry.jsx'
import { ProfilesList } from './profiles-list.jsx'
import { ProfileBox } from './profile-box.jsx'

// we can use older es5 libraries that don't support es6 modules by adding
//    "plugins": ["transform-es2015-modules-commonjs"] to the .babelrc
// npm install --save-dev babel-plugin-transform-es2015-modules-commonjs
// npm install slugify
const slugify = require('slugify')

class Profiles extends React.Component {

	constructor(){
		super()

		this.state = { records: [] }

		fetch("/data/catalog.json")
			.then( response => response.json() ) // you get a response you can pass it as json
			.then( json => {
				let records =  json.records.map((record) => { record.key = slugify(record.name, {lower: true}); record.selected = false; return record;})
				records[0].selected = true;
				this.setState({records: records});

		} ) // refresh the comopontent (<Catalog />)'s state with the new data you fetched
			.catch( error => console.log(error));


	}

	// changing state belongs in the component with the state, we'll pass a reference to this select state changes for child components to bind events to
	// we'll toggle the 'selected' class but not by changing the dom directly
	// rather by changing the state of records that were just clicked (see the provfilebox)
	select(key){
		console.log( `profile ${key} was clicked`)
		let records = this.state.records.map(function(record) {
			if (record.key === key) {
				record.selected = (!record.selected);
			}
			return record;
			});
		this.setState({records: records});
	}

	render() {

		// let classToApply = this.props.item.selected ? "selected" : ""

		// some conditional logic about what the component renders
		return <div className="sq6-profiles">
			<h2 className="catalog-title">
				Catalog to look up in Beleuxs' records (class component):
			</h2>

			{/* we'll pass the handler that will update the state. since the state ois for the <Profiles /> componetn, we'll need to pass
			the <Profiles /> component's object as the this. in other words to bind it  */}
			<ProfilesList records={this.state.records}  selectHandler={this.select.bind(this)} />


		</div>
	}
}

export default Profiles;
