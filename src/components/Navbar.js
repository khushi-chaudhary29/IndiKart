import React from 'react'
import styles from '../app/page.module.css'
import '../app/globals.css'
import Link from 'next/link'
import { LuShoppingCart } from "react-icons/lu";


const Navbar = () => {
    return (
        <main className='main'>
            <div className='navContainer'>
                <header className="header1">
                    <div className="navbar1">
                        <h1 className="logo1">Get free delivery on orders over &#8377;300</h1>
                    </div>
                </header>
                <header className="header2">
                    <nav className="navbar">
                        <div className="logo2">
                            <p>E-IndiBus</p>
                        </div>
                        <ul className="nav-links">
                            <li><Link href="/allproduct"> All Products </Link></li>
                            <li><Link href="/order">Order </Link></li>
                            <li><Link href="/admin">Admin</Link></li>
                            <li><Link href="/login">Login</Link></li>
                            <li>
                                <a href="#"><img src="./Flag_of_india.png" alt="Flag of India" /> INDIA</a>
                            </li>
                            <li>
                               <div className='navProfile'>
                                <img src='./gaming.png'/>
                               </div>
                            </li>
                          
                            <li>
                            <LuShoppingCart style={{ width: '1.8rem', height: '1.8rem' }} />
                            </li>
                            <li>
                            <span className='AddcartCount'>0</span>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>


        </main>
    )
}

export default Navbar