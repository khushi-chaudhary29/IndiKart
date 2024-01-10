import React from 'react'
import styles from '../page.module.css'
import Modal from '@/components/Modal'
import { RiDeleteBin6Line } from "react-icons/ri";

const Order = () => {
  return (
    <main className='main'>
      <div className={styles.OderLeft}>
        <div className={styles.leftcontainer}>
          <img src="./h&M.webp"></img>
          <div className={styles.cartcantainerdetails}>
            <h3 className={styles.title}>H&M Denim Jacket</h3>
            <p className={styles.desc}>Relaxed-fit jacket in rigid denim with a collar, metal buttons down the front, flap chest pockets with a button and welt side pockets. Long sleeves, buttoned cuffs and an adjustable tab and buttons at the sides.</p>
            <br></br>
            <p className={styles.price}>₹2500</p>
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