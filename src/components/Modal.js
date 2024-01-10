import React from 'react'
import styles from '../app/page.module.css'

const Modal = () => {
  return (
    <div className={styles.ModalContainer}>
      <p className={styles.ModalName}>Enter Full Name</p>
      <input className={styles.ModalProductAbout} type="text" name="txt_name" placeholder='Full Name'></input>
      <br></br>
      <p className={styles.ModalName}>Enter Full Address</p>
      <input className={styles.ModalProductAbout} type="text" name="txt_name" placeholder='Full Address'></input>
      <br></br>
      <p className={styles.ModalName}>Enter Pincode</p>
      <input className={styles.ModalProductAbout} type="text" name="txt_name" placeholder='Pincode'></input>
      <br></br>
      <p className={styles.ModalName}>Enter Mobile Number</p>
      <input className={styles.ModalProductAbout} type="text" name="txt_name" placeholder='Mobile Number'></input>
      <br></br>

      <br></br>
      <button className={styles.ModalButton}>Order Now</button>

    </div>
  )
}

export default Modal