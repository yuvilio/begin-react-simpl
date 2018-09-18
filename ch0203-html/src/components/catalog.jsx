import React from 'react';
import catalogEntriesJson from '../../data/catalog.json' // data we'll output
import { CatalogEntry } from './catalog-entry.jsx'

class Catalog extends React.Component {


	render() {

		let listItems = catalogEntriesJson.records.map( (record, i) =>
      <CatalogEntry record={record} key={i} />
    )

		return <div>
			<h2 className="catalog-title">
				Catalog to look up in Beleuxs' records:
			</h2>

			{listItems}

		</div>
	}
}

export default Catalog;
