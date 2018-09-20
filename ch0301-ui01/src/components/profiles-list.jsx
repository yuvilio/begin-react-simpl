import React from 'react'
import { ProfileBox } from './profile-box.jsx'

class ProfilesList extends React.Component {
  render(){
    let profiles = [];

    for (let profile of this.props.records) {
      // since the click event we want to handle happens in the <ProfileBox /> component, pass the ahndler to it there
      profiles.push(<ProfileBox record={profile} selectHandler={this.props.selectHandler} key={profile.key}/>);
    }

    return <div>{profiles}</div>
  }
}



export { ProfilesList }
