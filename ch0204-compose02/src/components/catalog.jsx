import React from 'react';
import catalogEntriesJson from '../../data/catalog.json' // data we'll output
// one way to compose components. we'll import the <CatalogEntry /> component
// and use it in the <Catalog /> one
import { CatalogEntry, CatalogEntryFunc } from './catalog-entry.jsx'

class Catalog extends React.Component {


	render() {

		// we'll pass these as properties of the component. each <CatalogEntry>  picke them up from
		// it's build in this.props
		let listItems = []
		for (let [i, record]  of catalogEntriesJson.records.entries()){
			listItems.push( <CatalogEntry record={record} key={i} /> )
		}

		// similarly, we'll pass these as properties of the component. each <CatalogEntryFunc>  picke them up from
		// it's build in props object (passed in as a parameter)
		let listItemsFunc = []
		for (let [i, record]  of catalogEntriesJson.records.entries()){
			listItemsFunc.push( <CatalogEntryFunc record={record} key={i} /> )
		}


		// some conditional logic about what the component renders
		return <div>
			{/* this is a comment */}
			<h2 className="catalog-title">
				Catalog to look up in Beleuxs' records (class component):
			</h2>

			{listItems}


			<h2 className="catalog-title">
				Catalog to look up in Beleuxs' records (function component):
			</h2>

			{listItemsFunc}


		</div>
	}
}

export default Catalog;
