import React from 'react'
import { Link } from "react-router-dom";
import "./fron.css"

const fron = () => {
  return (
    <div>
      <footer className='footer'>
      <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to='/cart'>about us</Link></li>
  	 				<li><Link to='/cart'>our services</Link></li>
  	 				<li><Link to='/cart'>privacy policy</Link></li>
  	 				<li><Link to='/cart'>affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to='/cart'>FAQ</Link></li>
  	 				<li><Link to='/cart'>shipping</Link></li>
  	 				<li><Link to='/cart'>returns</Link></li>
  	 				<li><Link to='/cart'>order status</Link></li>
  	 				<li><Link to='/cart'>payment options</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><Link to='/cart'>watch</Link></li>
  	 				<li><Link to='/cart'>bag</Link></li>
  	 				<li><Link to='/cart'>shoes</Link></li>
  	 				<li><Link to='/cart'>dress</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<Link to='/cart'><i className="fab fa-facebook-f"></i></Link>
  	 				<Link to='/cart'><i className="fab fa-twitter"></i></Link>
  	 				<Link to='/cart'><i className="fab fa-instagram"></i></Link>
  	 				<Link to='/cart'><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
      </footer>
    </div>
  )
}

export default fron