import React, {useState ,useEffect} from 'react'
import Axios from 'axios';
import {Link, useParams} from "react-router-dom";
import './Bigtitle.css'

const Cartitem = () => {


    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await Axios.get(`http://localhost:5090/sanpham`);
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [])

  return (
    <div>
            <ul className='cartitem'> 
                {data.map((post) => (
                    <Link to={`/view/${post.id_sanpham}`}>
                    <li className='car'>
                        {/* <img src={`./images/sanpham/${post.hinhanh}`} alt=''/> */}
                        <img src={`./amin/modules/quanlysp/uploads/${post.hinhanh}`} alt=''/>
                        <div className='car_item'>
                            <h3>{post.tensanpham}</h3>
                            <p className='pode_text'>From USD ${post.gia}</p>
                        </div>
                    </li>
                    </Link>
                ))}
            </ul> 

    </div>
  )
}

export default Cartitem