import React from 'react'
import styles from '../app/page.module.css'
import '../app/globals.css'
import Link from 'next/link'


const Navbar = () => {
    return (
        <main className='main'>
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
                            <a href="#"><img src="./profile.png" alt="Profile" /></a>
                        </li>
                       {/*  <li>
                            <a href="#"><img src="./sun.png" alt="Sun" /></a>
                        </li> */}
                        <li>
                            <a href="#"><img src="./cart.png" alt="Cart" /><span className="cart-badge">0</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

        </main>
    )
}

export default Navbar