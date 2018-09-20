import React from 'react'
import ReactDOM from 'react-dom'

// webpack css-loader enables this convenience
import './styles/styles.css';

import Profiles from './components/profiles.jsx';
ReactDOM.render(
	<Profiles />,
  document.getElementById('app')
);


// creates a button element
