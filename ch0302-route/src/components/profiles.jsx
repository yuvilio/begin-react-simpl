import React from 'react';

import { About } from './about.jsx'
import { Resources } from './resources.jsx'

// our routing tools ,  Route, switching between Routes,  and linking to them
import { Switch, Route, Link } from 'react-router-dom'



class Profiles extends React.Component {

	constructor(){
		super()

	}


	render() {

		// let classToApply = this.props.item.selected ? "selected" : ""

		// some conditional logic about what the component renders
		return <div className="sq6-profiles">
			{/*

			*/}



			<nav className="bt bb tc mw7 center mt4">
				<Link to='/about' className='f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"'>About</Link>
				<Link to='/resources' className='f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l'>Resources</Link>
		  </nav>


			<Switch>
				<Route exact path='/about' component={About} />
				<Route exact path='/resources' component={Resources} />
			</Switch>

		</div>
	}
}

export default Profiles;
