import React from 'react'
import '../Bigtitle.css'
import Tdata from './data-inspire'
import Slider from 'react-slick'

const Inspire_right = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
      
  return (
    <>
        <Slider {...settings}>
        {Tdata.map((value, index) => {
        return(
            <div className='right' key={index}>
              <img src={value.cover} alt=''/>
            </div>
          )
      })}
    </Slider>
    </>
  )
}

export default Inspire_right