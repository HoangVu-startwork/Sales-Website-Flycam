import './sanpham.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel';
import React, {useState ,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const Detail_image = ({ cartItem, addToCart, decreaseQty }) => {
   
    const [user, setUser] = useState("");


    const {id} = useParams();
    // let loadData = async () => {
    //     const response = await Axios.get(`http://localhost:5090/sanpham`);
    //     console.log(response.data);
    // }

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5090/xemgiohang/${id}`);
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [id])

    // useEffect(() => {
    //     axios.get(`http://localhost:5090/xemgiohang/${id}`)
    //     .then((rep) => setUser({ ...rep.data[0] }));
    // }, [id]);

    const [soluong, setValue] = useState(1);
    
    const handleMinus = () => {
        if(soluong >= 2) {
        setValue(parseInt(soluong, 10) - 1);
        } else {
            setValue(parseInt(soluong, 10) + 0);
        }
      };
      const handlePlus = () => {
        setValue(parseInt(soluong, 10) + 1);
      };

      const productQty = user.gia * soluong;

    //   
    axios.defaults.withCredentials = true;

    const [loginStatus, setLoginStatus] = useState("");
    
    useEffect(() => {
    axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].id);
      }
    });
  }, []);
  return (
    
    <>
       <h1>{loginStatus}</h1>
       <ul className='cartitem'> 
                {data.map((post) => (
                    <li className='car'>
                        <h1>{post.tensp}</h1>
                    </li>
        
                ))}
            </ul> 
    </>
  )
}

export default Detail_image