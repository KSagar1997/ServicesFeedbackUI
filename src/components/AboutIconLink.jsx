import React from 'react'
import {FaInfo} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* <Link to={{
            pathname: '/about',
            search: '?sort=name',
            hash:  '#hello'
        }}> */}
        <Link to ='/about'>
         <FaInfo color='#black' size={30}/>
        </Link>
    </div>
  )
}

export default AboutIconLink