import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className='navBar'>
      <div className="bestSellers">
          <li>Best Sellers</li>
          </div>  
      <div className="mobile">
      <li>Mobiles</li>
          </div>  
      <div className="customer">
      <li>Customer Service</li>
          </div>  
      <div className="today">
      <li>Today's Deals</li>
          </div>  
      <div className="fashion">
      <li>Fashion</li>
          </div>  
      <div className="electronics">
          <li>Electronics</li>
          </div>  
      <div className="kitchen">
      <li>Home & Kitchen</li>
          </div>  
      <div className="newRelease">
      <li>New Releases</li>
          </div>  
      <div className="onlinePay">
      <li>Online Pay</li>
          </div>  
      <div className="computer">
      <li>Computers</li>
          </div>  

    </div>
  )
}

export default Navbar;