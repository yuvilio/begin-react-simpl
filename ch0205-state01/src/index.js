import React from 'react'
import ReactDOM from 'react-dom'

// webpack css-loader enables this convenience
import './styles/styles.css';

import Catalog from './components/catalog.jsx';
ReactDOM.render(
	<Catalog />,
  document.getElementById('app')
);


// creates a button element

//
const logButton = document.querySelector(".log-data")
logButton.onclick = () => {
  console.log('data from the json: ')

	// debug  . use the es5 fetch() ajax. console.log
	fetch("/data/catalog.json")
		.then( response => response.json() ) // you get a response you can pass to a function
	  .then( json => { console.log(json) } )
		.catch( error => console.log(error));

}
