import React from 'react'
import styles from '../app/page.module.css'
import '../app/globals.css'
import Link from 'next/link'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <main className='main'>
      <footer class="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>CATEGORIES</h4>
              <ul>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/cart">CART</Link></li>
                <li><Link href="/order">ORDER</Link></li>
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
            

          </div>

        </div>


        <div className='footerContainer'>
          <div className="footercontainer1">
            <h3>E-Indibus</h3>
          </div>
          <div className="social-links">
            <CiFacebook style={{ width: '2rem', height: '2rem' }} />
            <CiInstagram style={{ width: '2rem', height: '2rem' }} />
            <CiTwitter style={{ width: '2rem', height: '2rem' }} />
            <CiLinkedin style={{ width: '2rem', height: '2rem' }} />

          </div>
        </div>

      </footer>

    </main >
  )
}

export default Footer