import './Detail.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import toast, { Toaster } from 'react-hot-toast';
import {Carousel} from 'react-responsive-carousel';
import React, {useState ,useEffect} from 'react'
import {useHistory } from 'react-router-dom'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// 
import { Input, InputGroup} from 'rsuite';

const Detail_image = () => {

    const [user, setUser] = useState("");

    const history = useHistory();

    const {id_sanpham} = useParams();
    // let loadData = async () => {
    //     const response = await Axios.get(`http://localhost:5090/sanpham`);
    //     console.log(response.data);
    // }

    
    useEffect(() => {
      axios.get(`http://localhost:5090/sanpham/${id_sanpham}`)
      .then((rep) => setUser({ ...rep.data[0] }));
  }, [id_sanpham]);

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

    //   thêm
    const [idsanpham, idsanphamReg] = useState("");
    const [tensanpham, tensanphamReg] = useState("");
    const [gia, giaReg] = useState("");
    // const [soluong, setValue] = useState("");
    const [id, idReg] = useState("");
    const [loginStatus1, setLoginStatus1] = useState("");
    // axios.defaults.withCredentials = true;
    const themgiohang = async () => {
        if(!idsanphamReg){
            toast('Điền vào ô trống name', {
          icon: '⌨️',
          iconTheme: {
              primary: '#0a0',
              secondary: '#fff',
            },
            style: {
              border: '1px solid #713200',
              padding: '5px 10px',
              background: '#edbf61',
              // minWidth: '300px'
            }
        });
      }else{
          axios.post("http://localhost:5090/giohang1", {
          id_sanpham: user.id_sanpham,
          tensp: user.tensanpham,
          tonggia: productQty,
          gia: user.gia,
          soluongmua: soluong,
          id: loginStatus,
      }).then((response) => {
          if(response.data.message){
            toast(response.data.message, {
                icon: '✉️',
                iconTheme: {
                primary: '#0a0',
                secondary: '#fff',
              },
                style: {
                  border: '1px solid #713200',
                  padding: '5px 10px',
                  background: '#A8E6CE',
              // minWidth: '300px'
                }
              })
              // history.push(`/view/${loginStatus}`);
              // window.location.reload(true);
          }else {
            history.push(`/view/${user.id_sanpham}`);
            window.location.reload(true);
          }
        });
      }}
  return (
    <>
    <h4>{loginStatus1}</h4>
        <div className='image_detail'>
        {/* <input className='id' value={loginStatus} onChange={(e) => {idReg(e.target.value)}} /> */}
            <div className='flet'>
                <Carousel infiniteLoop autoPlay>
                <div className='image'>
                    {/* <img src={`../images/sanpham/${user.hinhanh}`} alt=''/> */}
                  <img src={`../amin/modules/quanlysp/uploads/${user.hinhanh}`} alt=''/>
                </div>
                <div className='image'>
                  <img src={`../amin/modules/quanlysp/uploads/${user.hinhanh1}`} alt=''/>
                </div>
                <div className='image'>
                  <img src={`../amin/modules/quanlysp/uploads/${user.hinhanh2}`} alt=''/>
                </div>
                <div className='image'>
                  <img src={`../amin/modules/quanlysp/uploads/${user.hinhanh3}`} alt=''/>
                </div>
                <div className='image'>
                  <img src={`../amin/modules/quanlysp/uploads/${user.hinhanh4}`} alt=''/>
                </div>
            </Carousel>
            </div>
            <div className='right'>
                <div className='right_text'>
                    {/* <h2 className='content_text'>{user.tensanpham}</h2> */}
                    {/* <input className='id' onChange={(e) => {idsanphamReg(e.target.value)}} /> */}
                   <input className='content_text' value={user.tensanpham} onChange={(e) => {tensanphamReg(e.target.user.tensanpham)}} disabled/>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    {/* <p className='content_text1'>{user.khuyenmai}</p> */}
                    <p className='content_text1' dangerouslySetInnerHTML= {{ __html:(user.khuyenmai) }} />
                    <div className='content_text02'>
                        <p className='content_text3'>Bảo hành:</p> <p className='content_text4'>12 tháng chính hãng VJO Việt Nam</p>
                    </div>
                    <InputGroup inside className='content_text5'>
                        <InputGroup.Addon>$</InputGroup.Addon>
                        <input className='content_text6' value={productQty} onChange={(e) => {giaReg(e.target.value)}} disabled/>
                        <InputGroup.Addon>.đ</InputGroup.Addon>
                    </InputGroup>
                    <div className='giohang'>
                    <InputGroup className='input'>
                        <InputGroup.Button className='nut1' onClick={handleMinus}><p>-</p></InputGroup.Button>
                        <input type="text" className='dien' value={soluong} onChange={e => setValue(e.target.value)} disabled/>
                        <InputGroup.Button className='nut2' onClick={handlePlus}><p>+</p></InputGroup.Button>
                    </InputGroup>            

                    <div className='content_btton'>
                    <button onClick={themgiohang} class="btn1">Thêm vào giỏ hàng</button></div>
                    </div>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Detail_image