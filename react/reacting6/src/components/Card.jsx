import React from 'react'
import PropTypes from 'prop-types'

function Card({cta,color, emoji}) {
  return (
    <button className={`px-4 py2 ${color} rounded-md text-zinc-200`}>{cta} {emoji}</button>
  )
}

// not required but good practice to define prop types
Card.propTypes = {
    cta: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,  // prop type for string emoji like '��‍���' for man with red hair.
  }

export default Card