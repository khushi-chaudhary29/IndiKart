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
        <h1 className={styles.Cartmainheading}>CART ITEM</h1>
        <div className={styles.cart}>
          <div className={styles.cart}>
            <div className={styles.cartLeft}>


              <div className={styles.leftcontainer}>

                <img className={styles.cartimage} src="./iPhone.webp"></img>
                <div className={styles.cartcantainerdetails}>
                  <h3 className={styles.title}>iPhone 7</h3>
                  <p className={styles.desc}>Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience. With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive.</p>
                  <p className={styles.price}>₹31,500</p>
                </div>
              </div>
              <div className={styles.cartDeleteContainer}>
                <RiDeleteBin6Line className={styles.cartDelete} />
              </div>
            </div>
            <div className={styles.cartcontainer1}>
              <div className={styles.cartpara}>
                <p>Subtotal</p>
                <p>₹100</p>
              </div>
              <div className={styles.cartpara1}>
                <p>Shipping</p>
                <p>₹20</p>
              </div>
              <div>
                <hr className={styles.cartunderline}></hr>
              </div>
              <div className={styles.cartpara2}>
                <p>Total</p>
                <p>₹120</p>
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