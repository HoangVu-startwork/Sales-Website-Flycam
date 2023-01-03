import React, {useState ,useEffect} from 'react'
import Axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {useParams, Link } from 'react-router-dom';
import "./baithu.css"
import toast,{ Toaster } from 'react-hot-toast';
import {useHistory } from 'react-router-dom'

const Banthu = () => {
    const [loginStatus, setLoginStatus] = useState("");
    const [id, setid] = useState("");
    const [user, setUser] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:5090/login").then((response) => {
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].name);
          }
        });
      }, []);

    useEffect(() => {
        Axios.get("http://localhost:5090/login").then((response) => {
          if (response.data.loggedIn === true) {
            setid(response.data.user[0].id);
          }
        });
      }, []);
      // let loadData = async () => {
      //     const response = await Axios.get(`http://localhost:5090/sanpham`);
      //     console.log(response.data);
      // }
  
      
      useEffect(() => {
        Axios.get(`http://localhost:5090/login/${id}`)
        .then((rep) => setUser({ ...rep.data[0] }));
    }, [id]);

    const [diachi, diachiset] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:5090/diachikhachhang/${id}`)
        .then((rep) => {
          if(id){
            diachiset({ ...rep.data[0]})
          }else{
            diachiset("ok 12")
          }
        });
    }, [id]);
    // hoadon
    const [Hoadon, setHoadon] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await Axios.get(`http://localhost:5090/hoadon/${id}`);
              setHoadon(res.data);
          }catch (err){
              console.log(err);
          }
      };
      fetchData();
  }, [id])
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:5090/hoadon/${id}`).then((response) => {
        if (response.data) {
            setData(response.data);
          }else{
            setData(response.data);
          }
        });
  }, [id]);

  const history = useHistory();
  const ok = () => {
    history.push(`/contact`);
    window.location.reload(true);
  }
  const chitiethoadon = () => {
    history.push(`/chitiethoadon`);
    window.location.reload(true);
  }

  const deleteContact = (id_hoadon) => {
  if(window.confirm('Are you sure you want to delete')){
    Axios.delete(`http://localhost:5090/xoahoadon/${id_hoadon}`);
    toast.success("Xoá thành công");
    setTimeout(() => ok(), 500);
  }
}
const chitiet = (id_hoadon) => {
  if(window.confirm('Are you sure you want to delete')){
    Axios.delete(`http://localhost:5090/chitiethoadon/${id_hoadon}`);
    setTimeout(() => chitiet(), 500);
  }
}

const [datachuaduyet, setdatachuaduyet] = useState([])

useEffect(() => {
  Axios.get(`http://localhost:5090/hoadonchuaduyet/${id}`).then((response) => {
      if (response.data) {
        setdatachuaduyet(response.data);
        }else{
          setdatachuaduyet(response.data);
        }
      });
}, [id]);
  return (
    <div>
        <div className='col-wrap'>
            <div className='col'>
            <div className='circle'>
                <img  src={"./images/uploads/ship.png"} alt=''/></div>
                <h2 className='chu'>Xin Chào</h2>
                <h2>{loginStatus}</h2>
                <div className='thongtincanhan'>
                    <p>Họ và tên: {user.name}</p>
                    <p>Giới tính: <select >
                        <option >Nam</option>
                        <option >Nữ</option>
                    </select></p>
                    <p>Số điện thoại: {user.mobile}</p>
                    <p>Sinh nhật: </p>
                    <p>Ngày tham gia: </p>
                    <p>Số đơn hàng: {data.length}</p>
                    <p>Tổng tiền tính luỹ:</p>
                    <Link to={`/user`}>
                    <p>Địa chỉ: 
                    {diachi.sonha === undefined && 'Thêm địa chỉ'}
                    {diachi.sonha !== undefined && diachi.sonha + ', ' + diachi.quan + ', ' + diachi.thanhpho}</p></Link>
                </div>
                <div className='nutthaydoi'>
                    <Link to={`/user/:${id}`}>
                        <button className='nutthaydoi01'>Thay đổi đỉa chỉ</button>
                    </Link>
                </div>
            </div>
            <div className='col'>
                <div className='circle'>
                <img src={"./images/uploads/Shipper.png"} alt=''/>
                </div>
                <h2 className='chu'>Đơn hàng thành công</h2>
                <div>
                <Toaster
                        position="top-right"
                        reverseOrder={false}
                        />
                <ul className='cartitem'> 
                {Hoadon.map((post) => (
                  
                    <li className='car'>
                    <Link to={`/chitiethoadon/${post.id_hoadon}`}>
                        <div className='car_item'>
                            <h3>Hoá đơn mua vào: {post.ngay}</h3>
                            <p className= 'pode_text'>From USD ${post.tien}</p>
                        </div>
                        </Link>
                        <div className='removeCart'>                 
                          <button className='removeCart' onClick={() => deleteContact(post.id_hoadon)}>
                            <i className='fa-solid fa-xmark'></i>
                          </button>
                          <Link to={`/chitiethoadon/${post.id_hoadon}`}>
                          <button className='removeCart'>
                          <i class="fa-solid fa-pencil"></i>
                          </button>
                          </Link>
                        </div>   
                    </li>
                     

                ))}
            </ul> 
            
                </div>
            </div>
            <div className='col'>
                <div className='circle'>
                  <img src={"./images/uploads/Shipper.png"} alt=''/>
                </div>
                <h2 className='chu'>Đơn hàng đang duyệt</h2>
                <div>
                <Toaster
                        position="top-right"
                        reverseOrder={false}
                        />
                <ul className='cartitem'> 
                {datachuaduyet.map((post) => (
                  
                    <li className='car'>
                    <Link to={`/chitiethoadon/${post.id_hoadon}`}>
                        <div className='car_item'>
                            <h3>Hoá đơn mua vào: {post.ngay}</h3>
                            <p className= 'pode_text'>From USD ${post.tien}</p>
                        </div>
                        </Link>
                        <div className='removeCart'>                 
                          <button className='removeCart' onClick={() => deleteContact(post.id_hoadon)}>
                            <i className='fa-solid fa-xmark'></i>
                          </button>
                          <Link to={`/chitiethoadon/${post.id_hoadon}`}>
                          <button className='removeCart'>
                          <i class="fa-solid fa-pencil"></i>
                          </button>
                          </Link>
                        </div>   
                    </li>
                     

                ))}
            </ul> 
            
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Banthu
