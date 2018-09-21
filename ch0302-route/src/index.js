import React from 'react'
import ReactDOM from 'react-dom'

// $ npm install --save-dev react-router-dom
import { BrowserRouter } from 'react-router-dom'

// webpack css-loader enables this convenience
import './styles/styles.css';

import Profiles from './components/profiles.jsx';

// wrap our app <Profiles />  with container componen giving it routing
ReactDOM.render(
	<BrowserRouter>
		<Profiles />
	</BrowserRouter>,
  document.getElementById('app')
);


// creates a button element
