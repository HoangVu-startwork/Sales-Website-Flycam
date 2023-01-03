import React, {useEffect, useState} from 'react';
import {useHistory } from 'react-router-dom'
import logo from '.././assets/logo2.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const Search = () => {
    
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100);
    })


    Axios.defaults.withCredentials = true;

    const [loginStatus, setLoginStatus] = useState("");
    const [loginName, setLoginName] = useState("");
    
    useEffect(() => {
    Axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].id);
      }else{
        setLoginStatus("Dang nhap");
      }
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginName(response.data.user[0].name);
      }else{
        setLoginName("Dang nhap");
      }
    });
  }, []);


  const id = useParams();
 
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:5090/ok/${loginStatus}`).then((response) => {
        if (response.data) {
            setData(response.data);
          }else{
            setData(response.data);
          }
        });
  }, [loginStatus]);

    
 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await Axios.get(`http://localhost:5090/${id}`);
    //             setData(res.data);
    //         }catch (err){
    //             console.log(err);
    //         }
    //     };
    //     fetchData();
    // }, [id])
    
    return (
        <>
            <section className='search'>
                <div className='container c_flex'>
                    <div className='logo width'>
                        <img src={logo} alt=""/>
                    </div>
                    <Navbar />
                    <div className='icon f_flex width'>

                    {/* Dang Nhap */}
                        <div className='cart'>
                            <Link to='/Dangnhap' exact>
                                {/* <i className=' fa-shopping-bag icon-circle'></i> */}
                                <i className='fa icon-circle1'>
                                    <p>{loginName} </p>
                                </i>
                            </Link>
                        </div>
                        <div className='cart'>
                            <Link to={`/cart/${loginStatus}`} exact>
                                <i className='fa fa-shopping-bag icon-circle'></i>    
                                <span>{data.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search