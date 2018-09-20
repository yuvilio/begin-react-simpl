import React from 'react'



// class components. more configurable  have a this.props array
class CatalogEntry extends React.Component {
  render(){
    console.log(this.props.record.name)
    //dom events are available as component properties 'click' - onClick . pass functions to handle events
    return <a href={"#" + this.props.record.key }
      onMouseOver={(e) => {e.preventDefault();  console.log(this.props.record.name); } }
      >
      {this.props.record.name}
    </a>
  }
}


export { CatalogEntry }
