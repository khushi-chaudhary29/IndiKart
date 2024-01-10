import React from 'react'
import styles from '../page.module.css'
import Product from '@/components/dashboard/Product'

import Users from '@/components/dashboard/Users'
import { GiRamProfile } from "react-icons/gi";
import { LuShoppingCart } from "react-icons/lu";
import { IoBagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import DasOrder from '@/components/dashboard/DasOrder';
import Link from 'next/link';

const Admin = () => {
  return (
    <main className='main'>
      <div className={styles.AdminContainer}>
        <div className={styles.mainAdmin}>
          <div className={styles.AdminBag}>
            <p className={styles.AdminBaglogo}><GiRamProfile /></p>
            <h3 className={styles.AdminBagHead}>10</h3>
            <h2 className={styles.AdminBagContent}>Total Products</h2>
          </div>
          <div className={styles.AdminBag}>
            <p className={styles.AdminBaglogo}><GiRamProfile /></p>
            <h3 className={styles.AdminBagHead}>10</h3>
            <h2 className={styles.AdminBagContent}>Total Orders</h2>
          </div>
          <div className={styles.AdminBag}>
            <p className={styles.AdminBaglogo}><GiRamProfile /></p>
            <h3 className={styles.AdminBagHead}>20</h3>
            <h2 className={styles.AdminBagContent}>Total Users</h2>
          </div>
          <div className={styles.AdminBag}>
            <p className={styles.AdminBaglogo}><GiRamProfile /></p>
            <h3 className={styles.AdminBagHead}>20</h3>
            <h2 className={styles.AdminBagContent}>Total Products</h2>
          </div>


        </div>
        </div>
        <div className={styles.AdminButton}>
          <div className={styles.AdminProductB}>
            <button className={styles.AdminProductButton}><LuShoppingCart style={{ width: '1.5rem', height: '1.5rem' }} /> Products</button> 
          </div>
          <div className={styles.AdminProductO}>
            <button className={styles.AdminOrderButton}><IoBagSharp style={{ width: '1.5rem', height: '1.5rem' }} /> Order</button>
          </div>
          <div className={styles.AdminProductU}>
            <button className={styles.AdminUsersButton}><FaUser style={{ width: '1.5rem', height: '1.5rem' }} /> Users</button>
          </div>
        </div>
      

      <Product />
      <DasOrder />
      <Users />

    </main>
  )
}

export default Admin