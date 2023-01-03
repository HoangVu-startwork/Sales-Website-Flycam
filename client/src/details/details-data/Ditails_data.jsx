import React from 'react'
import Data from './data'
import Slider from 'react-slick';
import './data_css.css'

const ditails_data = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  
return (
<>
    <Slider {...settings}>
    {Data.map((value, index) => {
    return(
        <div className='detail_new01' key={index}>
          <div className='tong_new'>
            <div className='left_new'>
              <img src={value.cover} alt=''/>
            </div>
            <div className='right_new'>
              <h2 className='name_new'>{value.name}</h2>
              <p className='discount_new'>{value.discount}</p>
              <p className='price_new'>{value.price}.000 đ</p>
            </div>
          </div>
        </div>
      )
  })}
</Slider>
</>
)
}

export default ditails_data
