import React from 'react'

// visual components can be shorthand represented as functions (rather than classes).
// the function IS the render
let CatalogEntry = (record) => {

  return (
    <p>{record.record.name}</p>
  )
}

export { CatalogEntry }
