import React from 'react'


// class components. more configurable  have a this.props array
class CatalogEntry extends React.Component {
  render(){
    return <dfn>
      <dt>{this.props.record.name} </dt>
      <dd>{this.props.record.job}</dd>
    </dfn>
  }
}


export { CatalogEntry }
