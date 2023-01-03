import React from 'react'
import './Bigtitle.css'
import Inspireright from '.././collections/inspire/Inspire-right'

const Inspire = () => {
  return (
    <>
        <div className='inspire'>
            <div className='left'>
                <div className='left1'>
                    <img src='./images/inspire/DJI-Inspire-2-X7-4b6c3.png' alt='' />
                </div>
                <div className='left2'>
                  <p className='inspire-text'>INSPIRE 2</p>
                  <p className='inspir-text'> Thiết kế mạnh mẽ, bền bỉ, Inspire 2 gây ấn tượng với hiệu năng bên trong, thời gian hoạt động lâu cùng nhiều chế độ bay độc đáo</p>
                </div>
            </div>
            <div className='right'> <Inspireright /></div>
          </div>
    </>
  )
}

export default Inspire