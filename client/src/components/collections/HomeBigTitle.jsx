import React from 'react'
import './Bigtitle.css'
import Cartitem from './Cartitem.jsx'
import Inspire from './Inspire'
import Rectangle from './Rectangle.jsx'
import Expand from './Expand.jsx'

const BigTitle = () => {
  return (
    <>
        <div className='collection'>
            <div className='bigtitle'>
                <p className='Collections'>Collections</p>
                <div className='rectangle'></div>
            </div>
            <Cartitem />
            <div className='bigtitle1'>
                <p className='Collections1'>Inspire</p>
                <div className='rectangle'></div>
            </div>
            <Inspire />
            <Rectangle />
            <Expand />
        </div>
    </>
  )
}

export default BigTitle