import React from 'react'
import styles from '../page.module.css'
import Modal from '@/components/Modal'
import { RiDeleteBin6Line } from "react-icons/ri";

const Order = () => {
  return (
    <main className='main'>
      <div className={styles.OderLeft}>
        <div className={styles.leftcontainer}>
          <img src="./Gaming.png"></img>
          <div className={styles.cartcantainerdetails}>
            <h3 className={styles.title}>This is title</h3>
            <p className={styles.desc}>desc</p>
            <p className={styles.price}>₹100</p>
          </div>
        </div>
        <div className={styles.cartDeleteContainer}>
          <RiDeleteBin6Line className={styles.cartDelete} />
        </div>
      </div>
    
    </main>
  )
}

export default Order