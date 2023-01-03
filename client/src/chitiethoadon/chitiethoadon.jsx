import React, {useState ,useEffect} from 'react'
import Axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {useParams, Link } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';
import {useHistory } from 'react-router-dom'
import "./chitiethoadon.css"

const Chitiethoadon = () => {
    const {id_hoadon} = useParams();

    const [Hoadon, setHoadon] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await Axios.get(`http://localhost:5090/chitiethoadon/${id_hoadon}`);
              setHoadon(res.data);
          }catch (err){
              console.log(err);
          }
      };
      fetchData();
  }, [id_hoadon])

  const [Hoadondia, setHoadonis] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5090/hoadon1/${id_hoadon}`)
    .then((rep) => {
      if(setHoadonis){
        setHoadonis({ ...rep.data[0]})
      }else{
        setHoadonis("ok 12")
      }
    });
}, [id_hoadon]);

  return (
    <div>

            <section className='cart-items'>
            <h3 className='chitiethoadob'>Chi tiết hoá đơn</h3>
            <div className='container d_flex'>
            <div className='cart-details'>
            {Hoadon.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
            {Hoadon.map((item) => {

              const productQty = item.gia * item.soluongmua
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                  <img src={`../amin/modules/quanlysp/uploads/${item.hinhanh}`} alt=''/>
                  </div>

                  <div className='cart-details'>
                    <Link to={`/view/${item.id_sanpham}`}>
                      <h3>{item.tensanpham}</h3>
                    </Link>
                    <h4>
                     <p>Giá của 1 chiết : ${item.tiensp}</p>
                        <br/>
                        <p>Số lượng mua: {item.soluong}</p>

                        <br/>
                      <span>tống tiền : ${item.tongtien}.00 </span>
                      {/* <input type="text" className='diencart'  onChange={(e) => {soluongmuaSet(e.target.value)} }/> */}
                    </h4>
                  </div>
                  <div className='cart-item-price'></div>
                </div>
              )
            })}
            
          </div>
          <div className='cart-total product'>

<div className='gia'>
  <h2>Cart Summary</h2>
  <div className=' d_flex'>
    <h3>Tổng tiền hoá đơn :</h3>
    {Hoadondia.tien}
  </div>
</div>

<div className='diachi'>
  <h2>Địa chỉ giao hàng</h2>
  
  <div className=' d_flex'>
  {Hoadondia.diachigiaohang}
      {/* {diachi.tengoinho + ' ' + diachi.thanhpho + ' ' + diachi.quan + ' ' + diachi.sonha} */}
  </div>        
      <Toaster
            position="top-right"
            reverseOrder={false}
            />
       </div>
       <div className='gia'>
  <h2>Ngày mua</h2>
  <div className=' d_flex'>
    <h3>Thời gian mua :</h3>
    {Hoadondia.ngay}
  </div>
</div>
</div>
          </div>
          </section>
    </div>
  )
}

export default Chitiethoadon