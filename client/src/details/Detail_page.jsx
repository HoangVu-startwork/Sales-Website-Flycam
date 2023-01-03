import React from 'react'
import Detailimage from './Detail_image'
import './Detail.css'
import Video from './Video_datail'
import Text from './Text_datail.jsx'
import New from './New_collection.jsx'

const Detail_page = () => {
  return (
    <div className='detail'>
        <Detailimage />
        <Video />
        <Text />
        {/* <New /> */}
    </div>
  )
}

export default Detail_page