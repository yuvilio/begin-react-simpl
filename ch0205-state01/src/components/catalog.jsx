import React from 'react';
import catalogEntriesJson from '../../data/catalog.json' // data we'll output

import { CatalogEntry } from './catalog-entry.jsx'

class Catalog extends React.Component {

	constructor(){
		super()

		// catalog is a "stateful component". that is. one whose state (content it has, what it renders) might change (doesn't just have
		// immutable props)
		// we'll use the react compontent .state property to manage those changes and propagate to children components  (unlike the  .props property
		// which are immutable)

		//starting state
		// when this compontent initially renders it will be an empty catalog
		// we've desided that the catalog entries should be part of the changeable state, and not just immutable properties
		// notice we chose to put the state higher in the component hierarchy (in the Catalog and not the CatalogEntry)
		// notice we minimized as much as we could what counts as state. the h2 title is not in the state. but hardcoded (or could be a prop)
		this.state = { entries: [] }

		// if the update button is clicked, fetch the latest data from the catalog.json and update "the state" of the compontent with the new data
		// the setState() will trigger the component to re-render itself (with the new data)
		// notice we're not changing the DOM directly. we're letting the component re-render itself, because it was notified its state was changed
		const updateButton = document.querySelector(".update-data")
		updateButton.onclick = () => {
		  console.log('data from the json: ')

			// fetch the data and update compontent's state
			// for more on fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
			// notice we don't call render() explicitly. we're triggering it via setState()
			fetch("/data/catalog.json")
				.then( response => response.json() ) // you get a response you can pass it as json
			  .then( json => { this.setState({entries: json.records}) } ) // refresh the comopontent (<Catalog />)'s state with the new data you fetched
				.catch( error => console.log(error));
		}
	}

	render() {

		// this time we're using recods from our components' state. when the stat changes, itll trigger a re-render
		let listItems = []
		console.log('this.state.entries ', this.state.entries)
		for (let [i, record]  of this.state.entries.entries()){
			listItems.push( <CatalogEntry record={record} key={i} /> )
		}


		// some conditional logic about what the component renders
		return <div>
			{/* this is a comment */}
			<h2 className="catalog-title">
				Catalog to look up in Beleuxs' records (class component):
			</h2>

			{listItems}

		</div>
	}
}

export default Catalog;
