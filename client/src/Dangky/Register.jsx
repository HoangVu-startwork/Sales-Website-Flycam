import React, {useState ,useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import "./Register.css"
import {Link} from "react-router-dom";
import Axios from 'axios';
const Register = () => {

    const [nameReg, setnameReg] = useState("");
    const [emailReg, setemailReg] = useState("");
    const [mobileReg, setmobileReg] = useState("");
    const [workReg, setwordReg] = useState("");

    const [loginStatus1, setLoginStatus1] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    Axios.defaults.withCredentials = true;
    const adddata = async () => {
      if(!nameReg){
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
      } else if (!emailReg){
        toast('Điền vào ô trống email', {
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
        });
      }else if (!emailReg.includes("@")) {
        toast(' Nhập email không hợp lệ', {
            icon: '✉️',
            iconTheme: {
                primary: '#0a0',
                secondary: '#fff',
              },
              style: {
                border: '1px solid #713200',
                padding: '5px 10px',
                background: '#F26B38',
                // minWidth: '300px'
              }
          });
    }else if (!workReg ) {
      toast(' Điền vào ô trống word', {
          icon: '📃',
          iconTheme: {
              primary: '#0a0',
              secondary: '#fff',
            },
            style: {
              border: '1px solid #713200',
              padding: '5px 10px',
              background: '#EDE574',
              // minWidth: '300px'
            }
        });
      }else if (!mobileReg ) {
        toast('Điền vào ô trống moblie', {
            icon: '📱',
            iconTheme: {
                primary: '#0a0',
                secondary: '#fff',
              },
              style: {
                border: '1px solid #713200',
                padding: '5px 10px',
                background: '#45ADA8',
                // minWidth: '300px'
              }
          });
    }else{
      Axios.post("http://localhost:5090/register1", {
          name: nameReg,
          email: emailReg,
          mobile: mobileReg,
          work: workReg
      }).then((response) => {
          if(response.data.message){
            setLoginStatus1(response.data.message);
          }else{
            setLoginStatus1(response.data[0].message);
          }
  });
}}
useEffect(() => {
    Axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].name);
      }
    });
  }, []);
    return (
        <div className='App'>
        <div className="dangky">
            <span>fly - together</span>
            <h3>Đăng Ký Tài Khoản</h3>
                <div className="roww">
                <h4>{loginStatus1}</h4>
                    <div className="name">
                    <img className="right" src="./images/Dangky/id-cardok.png" alt=''/>
                        <label for="exampleInputEmail1" class="form-label">Name</label><br/>
                        <input type="text" onChange={(e) => {setnameReg(e.target.value)}} class="form-control" aria-describedby="emailHelp" placeholder="Họ và Tên"/>
                    </div>
                    <div className="email">
                    <img className="right" src="./images/Dangky/at-sign.png" alt=''/>
                        <label for="exampleInputPassword1" class="form-label">Email</label><br/>
                        <input type="text" onChange={(e) => { setemailReg(e.target.value) }}  class="form-control" placeholder="Email mới fly-together"/>
                    </div>
                    <div className="sdt">
                    <img className="right" src="./images/Dangky/phone.png" alt=''/>
                        <label for="exampleInputPassword1" class="form-label">Mobile</label><br/>
                        <input type="text" onChange={(e) => { setmobileReg(e.target.value) }}  class="form-control" placeholder="Nhập số điện thoại"/>
                    </div>
                    <div className="password">
                    <img className="right" src="./images/Dangky/pin-code.png" alt=''/>
                        <label for="exampleInputPassword1" class="form-label">Password</label><br/>
                        <input type="text" onChange={(e) => { setwordReg(e.target.value) }}  class="form-control" placeholder="Tạo mật khẩu"/>
                    </div>
                   <div className='button1'>
                    <button onClick={adddata} class="btn1">Đăng Ký</button></div>

                    <Link to='/Dangnhap' className='button1'>
                    <button type="submit" class="btn1">Đăng Nhập</button></Link>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        />
                </div>
        </div>
        </div>
    )
}
export default Register;
