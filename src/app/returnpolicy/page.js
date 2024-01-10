import React from 'react'
import styles from '../page.module.css'
const ReturnPolicy = () => {
  return (
    <main className='main'>
      <div className={styles.MainAboutContainer}>
        <hr className={styles.AboutUshr}></hr>
        <h1 className={styles.MainAboutheading}>Return Policy</h1>
        <hr className={styles.AboutUshr}></hr>
        <p className={styles.MainAboutpara}>Thank you for shopping with E-Indibus. We appreciate the trust you have placed in us.
          Please read our return policy carefully to ensure a smooth and hassle-free shopping experience.</p>
        <h2 className={styles.MainAboutheading}>1. Returns</h2>
        <p className={styles.MainAboutpara}>We accept returns within 5 days from the date of delivery.
          To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.
          E-Indibus reserves the right to refuse any returns that do not meet these criteria</p>


      </div>
    </main>
  )
}

export default ReturnPolicy