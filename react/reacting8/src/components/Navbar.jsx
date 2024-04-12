import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

function Navbar({songs}) {

  const total_fav = songs.filter((e)=>e.added).length

  return (
    <div className='w-full px-20 py-3 flex justify-between items-center text-zinc-100'>
        <h3 className={`text-xl font-semibold ${styles.a}`}>Orange</h3>
        <div className='py-2 px-4 flex bg-orange-500 rounded-md gap-2 text-sm' >
            <h3>Favorites</h3>
            <h4>{total_fav}</h4>
        </div>
    </div>
  )
}

Navbar.propTypes = {
    songs: PropTypes.array.isRequired
}

export default Navbar