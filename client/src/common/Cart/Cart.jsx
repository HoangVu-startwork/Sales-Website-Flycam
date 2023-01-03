import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, {useState ,useEffect, setValue} from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import toast,{ Toaster } from 'react-hot-toast';
import "./style.css"
import {useHistory } from 'react-router-dom'

const Cart = () => {
  // const totalPrice = cartItem.reduce((soluongmua, item) => soluongmua + item.soluongmua * item.soluongmua, 0)
  // 
  // const [ daTa, setCardItem] = useState([])


    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5090/xemgiohang/${id}`)
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };
        fetchData();
    }, [id])

    const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5090/xemgiohang/${id}`)
                setData(res.data);
            }catch (err){
                console.log(err);
            }
        };

    useEffect(() => {
      axios.get("http://localhost:5090/login").then((response) => {
        if (response.data.loggedIn === true) {
          setLoginStatus(response.data.user[0].id);
        }
      });
    }, []);

    //   
    var datetme = new Date().toLocaleString();

    axios.defaults.withCredentials = true;

    const [loginStatus, setLoginStatus] = useState("");
    
    useEffect(() => {
    axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].id);
      }
    });
  }, []);

  const [diachi, diachiset] = useState("");

  useEffect(() => {
      axios.get(`http://localhost:5090/diachikhachhang/${loginStatus}`)
      .then((rep) => {
        if(loginStatus){
          diachiset({ ...rep.data[0]})
        }else{
          diachiset("ok 12")
        }
      });
  }, [loginStatus]);
  

  
  const totalPrice = data.reduce((tonggia, item) => tonggia + item.soluongmua * item.tonggia, 0)
  //
  const [soluongmua, soluongmuaSet] = useState([]);


  const addToCart = (product) => {
    const productExit = data.find((item) => item.id_giohang === product.id_giohang)
    if (productExit){
      setData(data.map((item) => (item.id_giohang === product.id_giohang? { ...productExit, soluongmua: productExit.soluongmua =  productExit.soluongmua - 1 + 2 } : item)))
      axios.put(`http://localhost:5090/capnhap/${product.id_giohang}`, {
      soluongmua: productExit.soluongmua,
  }).then((response) => {
    if(response.data.message){
      setLogin(response.data.message);
    }else{
      setLogin(response.data[0].message);
    }
});
      
    }else{
      setData([ ...data, { ...product, soluongmua: 0}])
      
    }
  }
  const decreaseQty = (product) => {
    
    const productExit = data.find((item) => item.id_giohang === product.id_giohang)
    if(productExit.soluongmua === 1){
      setData(data.filter((item) => item.id_giohang !== product.id_giohang ? { ...productExit, soluongmua: productExit.soluongmua = 1} : item))
    }else if (productExit.soluongmua > 1){
      setData(data.map((item) => (item.id_giohang === product.id_giohang? {...productExit, soluongmua : productExit.soluongmua = productExit.soluongmua - 1}: item)));
      axios.put(`http://localhost:5090/capnhap/${product.id_giohang}`, {
      soluongmua: productExit.soluongmua,
  }).then((response) => {
    if(response.data.message){
      setLogin(response.data.message);
    }else{
      setLogin(response.data[0].message);
    }
});
    }
  }
  const [LoginStatus1, setLogin] = useState("");
//   const cannhap = async () => {
//     axios.put(`http://localhost:5090/capnhap/${53}`, {
//       soluongmua: soluongmua,
//   }).then((response) => {
//     if(response.data.message){
//       setLogin(response.data.message);
//     }else{
//       setLogin(response.data[0].message);
//     }
// });
// }
    useEffect(() => {
      fetchData();
    }, [])

    const history = useHistory();

    const ok = () => {
      history.push(`/cart/${id}`);
      window.location.reload(true);
    }

    const deleteContact = (id_giohang) => {
    if(window.confirm('Are you sure you want to delete')){
      axios.delete(`http://localhost:5090/giohang/${id_giohang}`);
      toast.success("Xoá thành công");
      setTimeout(() => ok(), 500);
    }
  }
  
  //  const od = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:5090/ok/${loginStatus}`).then((response) => {
  //       if (response.data) {
  //           setData1(response.data);
  //         }else{
  //           setData1(response.data);
  //         }
  //       });
  //     }catch (err){
  //               console.log(err);
  //           }
  //   }


  const [tien, settien] = useState([]);

  const [id_sanpham, setid_sanpham] = useState("");
  const hoadon = async() => {
    axios.post("http://localhost:5090/hoadon",{
      id: loginStatus,
      tien: totalPrice,
      diachigiaohang: diachi.tengoinho + ','+ diachi.sonha + ', ' + diachi.quan + ', ' + diachi.thanhpho,
    })
    setTimeout(() => ok(), 500);
  }

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          <div className='cart-details'>
            {data.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}
            {data.map((item) => {

              const productQty = item.gia * item.soluongmua
              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                  <img src={`../amin/modules/quanlysp/uploads/${item.hinhanh}`} alt=''/>
                  </div>
                  <div className='cart-details'>
                    <Link to={`/view/${item.id_sanpham}`}>
                      <h3>{item.tensp}</h3>
                    </Link>
                    <h4>
                
                    ${item.gia}.00 * {item.soluongmua}
                      <span>${productQty}.00 </span>
                      {/* <input type="text" className='diencart'  onChange={(e) => {soluongmuaSet(e.target.value)} }/> */}
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart' onClick={() => deleteContact(item.id_giohang)}>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)} >
                        <i className='fa-solid fa-plus'></i>
                      </button>
                  
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                
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
                <h3>Total Price :</h3>
                <h3>${totalPrice}.00</h3>
              </div>
            </div>

            <div className='diachi'>
              <h2>Địa chỉ giao hàng</h2>
              
              <div className=' d_flex'>
                  {/* {diachi.tengoinho + ' ' + diachi.thanhpho + ' ' + diachi.quan + ' ' + diachi.sonha} */}
                  <h4>{diachi.sonha === undefined && 'Không có địa chỉ'}</h4>
              </div>
              <div className=' d_flex'>
                  {/* {diachi.tengoinho + ' ' + diachi.thanhpho + ' ' + diachi.quan + ' ' + diachi.sonha} */}
                  <h4>{diachi.sonha !== undefined && diachi.tengoinho}</h4>
              </div>
              <div className=' d_flex'>
                  {/* {diachi.tengoinho + ' ' + diachi.thanhpho + ' ' + diachi.quan + ' ' + diachi.sonha} */}
                  <h4>{diachi.sonha !== undefined && diachi.sonha + ', ' + diachi.quan + ', ' + diachi.thanhpho}</h4>
              </div>          
            <Toaster
                        position="top-right"
                        reverseOrder={false}
                        />
            </div>
            <div className='themvao'>
              <div className='nutthem'>
                  {/* {diachi.tengoinho + ' ' + diachi.thanhpho + ' ' + diachi.quan + ' ' + diachi.sonha} */}
                  <button onClick={hoadon} class="nutthem">Đặt mua</button>
              </div>
              </div>
          </div>
      
        </div>
      </section>
    </>
  )
}

export default Cart