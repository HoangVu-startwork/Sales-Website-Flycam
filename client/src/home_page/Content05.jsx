import React from 'react'
import { Link } from "react-router-dom";

const Content05 = () => {
  return (
    <>
        <div className='content05'>
            <p className='group'>From USD $3,299</p>
            <div className='buton'>
                <button><Link to='/cart' exact><p className='group1'>Buy Now</p></Link></button>
                <div className='group2'>Learn About the Zenmuse X7</div>
            </div>
        </div>
    </>
  )
}

export default Content05