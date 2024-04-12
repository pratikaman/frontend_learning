import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types'

function Cards({quotes, handleRemove}) {
  return (
    <div className='w-full h-[50vh] bg-purple-600 overflow-y-auto rounded-md flex p-4 gap-4 flex-wrap'>
    {quotes.map((e, index)=>{
      return <Card handleRemove={handleRemove} key={index} id={index} quote={e} />
    })}
    </div>
  )
}


Cards.propTypes = {
  quotes: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default Cards