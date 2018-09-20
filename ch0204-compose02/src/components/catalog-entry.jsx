import React from 'react'

// every react componetn has a ``props` property. has data that has been passed into the component`
// for more on prose: https://reactjs.org/docs/components-and-props.html
// props are immutable, not to be changed inthe functions. allows us to not consider those side effects when they run
// data passes in a unidirectional data flow . parent component -> child component. hierarchical

// class components. more configurable  have a this.props array
class CatalogEntry extends React.Component {
  render(){
    return <p>{this.props.record.name} &mdash; {this.props.record.job}</p>
  }
}

// function components . when just rendering is needed
// alternate approach. we'll have a react component that's just a plai function (t'll be used as <CatalogEntryFunc /?)
// react will see it's just a function and pass it the component properties as an argument (props)
// as it's being used a s aomponent: it'll be expected to ruturn a jsx expression
// we'll render the data differently to distinguish from the similar component above
function CatalogEntryFunc(props) {
  return <dfn>
    <dt>{props.record.name}</dt>
    <dd>{props.record.job}</dd>
  </dfn>
}

export { CatalogEntry, CatalogEntryFunc }
