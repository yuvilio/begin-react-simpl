import React from 'react'
import ReactDOM from 'react-dom'

// webpack css-loader enables this convenience
import './styles/styles.css';

import Catalog from './components/catalog.jsx';
ReactDOM.render(
	<Catalog />,
  document.getElementById('app')
);
