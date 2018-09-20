import React from 'react';
import catalogEntriesJson from '../../data/catalog.json' // data we'll output
// one way to compose components. we'll import the <CatalogEntry /> component
// and use it in the <Catalog /> one
import { CatalogEntry } from './catalog-entry.jsx'

class Catalog extends React.Component {


	render() {

		// jsx extends javascript (obvs, js-extend)
		let listItems = catalogEntriesJson.records.map( (record, i) =>
      <CatalogEntry record={record} key={i} />
    )

		// some conditional logic about what the component renders
		let title  = ''
		if (catalogEntriesJson.records > 1){
			title = <h2 className="catalog-title">
				Catalog to look up in Beleuxs' records:
			</h2>
		} else {
			title = <h2 className="catalog-title">
				Catalog to look up in Beleuxs' record:
			</h2>
		}

		return <div>
			{/* this is a comment */}
			{title}

			{listItems}

		</div>
	}
}

export default Catalog;
