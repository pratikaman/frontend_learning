import React from 'react'
import PropTypes from 'prop-types'

function Card({cta,color}) {
  return (
    <button className={`px-4 py2 ${color} rounded-md text-zinc-200`}>{cta}</button>
  )
}

// not required but good practice to define prop types
Card.propTypes = {
    cta: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }

export default Card