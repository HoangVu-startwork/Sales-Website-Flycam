import 'react-responsive-carousel/lib/styles/carousel.min.css'
import toast, { Toaster } from 'react-hot-toast';
import {Carousel} from 'react-responsive-carousel';
import React, {useState ,useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Iframe from 'react-iframe'

const Video_datail = () => {

  const {id_sanpham} = useParams();
    // let loadData = async () => {
    //     const response = await Axios.get(`http://localhost:5090/sanpham`);
    //     console.log(response.data);
    // }
    const [user, setUser] = useState("");
    
    useEffect(() => {
      axios.get(`http://localhost:5090/sanpham/${id_sanpham}`)
      .then((rep) => setUser({ ...rep.data[0] }));
  }, [id_sanpham]);


    const history = useHistory();
  return (
    <>
        <div className='video'>
        <Iframe className='video_text' width="80%" height="450px" src="https://www.youtube.com/embed/LVoPGlNvHhw" title="DJI - Introducing DJI FPV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
        <div className='tex_chitiet' dangerouslySetInnerHTML= {{ __html:(user.chitiet) }} />
        <div className='tex_chitiet' dangerouslySetInnerHTML= {{ __html:(user.tomtac) }} />
    </>
  )
}

export default Video_datail