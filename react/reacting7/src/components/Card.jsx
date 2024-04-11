import React from 'react'
import PropTypes from 'prop-types'

function Card({name, profession, img, isfollow, func}) {

  return (
    <div className='w-52 h-fit bg-zinc-200 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
            <img src={img} alt={name} className='w-full h-full object-cover'/>
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-sm '>{profession}</h5>
            <button onClick={
                () => func(name)
            } className={`px-2 py-1 ${isfollow ? "bg-emerald-400" : "bg-red-400"} rounded-md text-sm mt-2`}>{isfollow ? "following" : "follow"}</button>
        </div> 
    </div>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    isfollow: PropTypes.bool.isRequired,
}

export default Card