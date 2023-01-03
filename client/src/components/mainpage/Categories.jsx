import React from "react";
import { Link } from "react-router-dom";
import {useState ,useEffect} from 'react'
import axios from 'axios';
// 
const Categories = () => {
    const [data, setData] = useState([]);
    const [Phantom, setPhantom] = useState([]);
    const [DJIFPV, setDJIFPV] = useState([]);
    const [OSMO, setOSMO] = useState([]);
    const [RONIN, setRONIN] = useState([]);
    const [INSPIRE, setINSPIRE] = useState([]);
    const [Agriculture, setAgriculture] = useState([]);
    const [Industry, setIndustry] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5090/Mavic`);
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [])
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:5090/Phantom`);
              setPhantom(res.data);
          }catch (err){
              console.log(err);
          }
      };
      fetchData();
  }, [])
    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5090/PJIFPV`);
            setDJIFPV(res.data);
        }catch (err){
            console.log(err);
        }
    };
    fetchData();
  }, [])
    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5090/OSMO`);
            setOSMO(res.data);
        }catch (err){
            console.log(err);
        }
    };
    fetchData();
  }, [])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5090/RONIN`);
            setRONIN(res.data);
        }catch (err){
            console.log(err);
        }
    };
    fetchData();
  }, [])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5090/INSPIRE`);
            setINSPIRE(res.data);
        }catch (err){
            console.log(err);
        }
    };
    fetchData();
  }, [])
  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5090/Agriculture`);
            setAgriculture(res.data);
        }catch (err){
            console.log(err);
        }
    };
    fetchData();
}, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
          const res = await axios.get(`http://localhost:5090/Industty`);
          setIndustry(res.data);
      }catch (err){
          console.log(err);
      }
    };
    fetchData();
}, [])
    return (
        <>
            <div className='category'>
                {/* {data.map((value, index) => {
                    return (
                        <div className="box f_flex" key={index}>
                            <img src={value.cateImg} alt= ''/>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })} */}
                <div className="danhmuc">
                  <div className="wrapper">
                    <div className="navtv">
                      <ul>
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/3.png" alt=''/>
                            <span className="layao">Mavic</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu">
                          <li>
                              <ul class="sub-menu-tap">
                                {data.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/icons8-quadcopter-64.png" alt=''/>
                            <span className="layao">Phantom 4</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu1">
                          <li>
                              <ul class="sub-menu-tap1">
                                {Phantom.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/3d.png" alt=''/>
                            <span className="layao">DJI FPV</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu2">
                          <li>
                              <ul class="sub-menu-tap2">
                                {DJIFPV.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/chupanh.png" alt=''/>
                            <span className="layao">OSMO</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu3">
                          <li>
                              <ul class="sub-menu-tap3">
                                {OSMO.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/gaido.png" alt=''/>
                            <span className="layao">RONIN</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu4">
                          <li>
                              <ul class="sub-menu-tap4">
                                {RONIN.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/DIV.png" alt=''/>
                            <span className="layao">INSPIRE</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu5">
                          <li>
                              <ul class="sub-menu-tap5">
                                {INSPIRE.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/icons8-quadcopter.png" alt=''/>
                            <span className="layao">Agriculture</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu6">
                          <li>
                              <ul class="sub-menu-tap6">
                                {Agriculture.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                        <li>
                          <Link to='/cart' exact>
                            <img className="left" src="./images/category/icons8-quadcopter-96.png" alt=''/>
                            <span className="layao">Industry</span>
                            <img className="right" src="./images/category/right-arrow.png" alt=''/>
                          </Link>
                          <ul className="sub-menu7">
                          <li>
                              <ul class="sub-menu-tap6">
                                {Industry.map((post) => (
                                  <li className="productr">
                                      <Link to={`/view/${post.id_sanpham}`} exact>
                                        <p>{post.tensanpham}</p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                          </ul>
                        </li>
                        {/*  */}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Categories