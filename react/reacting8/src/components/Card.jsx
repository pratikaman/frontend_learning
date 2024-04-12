import React from 'react'
import PropTypes from 'prop-types'

function Card({songName, artist, image, added, index, handleCLick}) {
  return (
    <div className='min-w-80 bg-white rounded-md p-4 pb-10 flex gap-4 relative'>
    <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
        <img src={image} className='w-full h-full'></img>
    </div>
    <div>
        <h3 className='text-xl font-semibold leading-none'>{songName}</h3>
        <h6 className='text-sm '>{artist}</h6>
    </div>
    <button onClick={()=>handleCLick(index)} className={`px-4 py-3  ${added ? "bg-green-600":"bg-orange-600"} text-zinc-100 absolute rounded-full text-xs bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added ? "Added" : "Add favorite"}</button>

    </div>
  )
}

Card.propTypes = {
    songName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    added: PropTypes.bool.isRequired,
    handleCLick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Card 