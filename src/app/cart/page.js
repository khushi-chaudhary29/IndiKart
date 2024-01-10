'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from '@/components/Modal';

const Cart = () => {
  const [showModal,setShowModal] = useState(false);
  const closeModal=()=>{
    return setShowModal(false)
  }
  return (
    <main className='main'>
      <div className={styles.cartContainer}>
        <h1 className={styles.Cartheading}>Cart Item</h1>
        <div className={styles.cart}>
          <div className={styles.cart}>
            <div className={styles.cartLeft}>


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
            <div className={styles.cartcontainer1}>
              <div className={styles.cartpara}>
                <p>subtotal</p>
                <p>₹100</p>
              </div>
              <div className={styles.cartpara1}>
                <p>shpping</p>
                <p>₹20</p>
              </div>
              <div>
                <hr className={styles.cartunderline}></hr>
              </div>
              <div className={styles.cartpara2}>
                <p>total</p>
                <p>₹200</p>
              </div>

              <div className={styles.cartbutton}>
                <button className={styles.Cartbutton} onClick={()=>setShowModal(true)}>Buy Now</button>
              </div>

            </div>
          </div>
        </div>
        {showModal && <Modal closeModal ={closeModal}/>}
      </div>

    </main>
  )
}

export default Cart