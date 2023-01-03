import React from 'react'
import FlashCard from './Ditails_data';
import './data_css.css'
const Detail_Card = () => {
  return (
    <>
        <div className='flash01 '>
            <div className='container_detail'>
                <div className='heading f_flex'>
                    <i className='fa fa-bolt'></i>
                    <h1>SẢN PHẨM TƯƠNG TỰ</h1>
                </div>
                <FlashCard />
            </div>
        </div>
    </>
  )
}

export default Detail_Card