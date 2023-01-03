import {useHistory } from 'react-router-dom'
import React, {useState ,useEffect} from 'react'
import Axios from 'axios';
import { Toaster } from 'react-hot-toast';
import {useParams, Link } from 'react-router-dom';
import './Dangnhap.css'

const Appok = () => {

  const [email, setUsername] = useState('');
  const [work, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;
  const login = async () => {
    Axios.post("http://localhost:5090/login", {
      email: email,
      work: work,
      
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        history.push("/home")
        window.location.reload(true);
        // setLoginStatus(response.data[0].email);
      }
    })
  }
  useEffect(() => {
    Axios.get("http://localhost:5090/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, []);
  return (
    // eslint-disable-next-line no-restricted-globals
    <div>
       <Toaster
              position="top-center"
                reverseOrder={false}
                        />
      <div className='dangnhap'>
            <div className='chu'>Đăng Nhập</div>
            <h3>{loginStatus}</h3>
            <input className='taikhoan' type="text" onChange={(e) => {
              setUsername(e.target.value)
            }} placeholder='Nhập email'/><br />
            <input className='taikhoan' type="text" onChange={(e) => {
              setPassword(e.target.value)
            }} placeholder='Nhập password'/><br />
            <button className='nut' onClick={login} to="/home">Đăng nhập</button>
            <Link to={`/register`}>
            <button className='nut' to="/register">Đăng ký</button></Link>
          </div>

    </div>
  )
}

export default Appok