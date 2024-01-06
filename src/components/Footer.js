import React from 'react'
import styles from '../app/page.module.css'
import '../app/globals.css'

const Footer = () => {
  return (
    <main className='main'>
      <footer class="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>CATEGORIES</h4>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">CART</a></li>
                <li><a href="#">ORDER</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CUSTOMER SERVICES</h4>
              <ul>
                <li><a href="#">SHIPPING</a></li>
                <li><a href="#">RETURN POLICY</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">CONTACT US</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>FOLLOW US</h4>
              <div className="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className="footer">
        <div className="container1">
          <h3>E-Indibus</h3>
        </div>
      </footer>


   
      
    
       </main >
  )
}

export default Footer