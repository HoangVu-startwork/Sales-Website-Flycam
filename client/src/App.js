import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom"
import Login from './Danhnhap/Login.jsx'
import Register from './Dangky/Register.jsx'
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Cart from "./common/Cart/Cart";
import Data from "./components/flashDeals/Data";
import Home from "./home_page/Home-page.jsx";
import Detailpage  from './details/Detail_page.jsx'
import Sanpham from './sanpam/sanpham.js'
import User from './thongtin/thongtin.jsx'
import Bathu from './banthu/banthu.jsx'
import Fron from './frood/fron.jsx'
import Thaydoidiachi from './thaydoidiachi/thaydoidiachi.jsx'
import Chitiethoadon  from './chitiethoadon/chitiethoadon.jsx';
function App() {

  const {productItems} = Data


  return (
    <div className="">
      <Router>
      <Header/>
        <Switch>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/Collections' exact>
            <Pages productItems={productItems} />
          </Route>
          <Route path='/cart/:id' exact>
            <Cart />
          </Route>
          <Route path='/contact' exact>
            <Bathu />
          </Route>
          <Route path='/user/:id' exact>
            <Thaydoidiachi />
          </Route>
          <Route path='/chitiethoadon/:id_hoadon' exact>
            <Chitiethoadon />
          </Route>
          <Route path='/view/:id_sanpham' exact>
            <Detailpage  />
          </Route>
            <Route path="/Dangnhap" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path='/cart1/:id' exact>
            <Sanpham />
          </Route>
            {/* <Route path="/view/:id_sanpham" exact component={Detailpage} artItem={cartItem} addToCart={addToCart}/> */}
      </Switch>
      <Fron/>
    </Router>
    </div>
    
  );
}

export default App;
