import React from 'react'
import '../styles/profile-box.css'

class ProfileBox extends React.Component {
  render(){
    let classToApply = this.props.record.selected? "selected": "";

    // the event happens here, pass the key of the item clicked back up. you've done your part
    // if something needs to change, a rerender of you will be triggered by the parent componentn handling
    // that select() event and whatever state goes with it. you're agnostic to that state since you're dealing
    // with just the props
    return <div className={`profile-box ${classToApply}`} id={this.props.record.key}
       onClick={() => this.props.selectHandler(this.props.record.key)} >
			<img src={ this.props.record.img } />
			<div className="title">
				{this.props.record.name}
			</div>
		</div>

  }
}



export { ProfileBox }
