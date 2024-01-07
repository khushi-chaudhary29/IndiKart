import React from 'react'
import styles from '../app/page.module.css'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";

const Track = () => {
  return (
    <main className='main'>
      <div className={styles.maintrack}>
        <div className={styles.TrackBag}>
          <p className={styles.TrackBaglogo}><LiaShoppingBagSolid /></p>
          <h3 className={styles.TrackBagHead}>Premium Tshirts</h3>
          <p className={styles.TrackBagContent}>Our T-Shirts are 100% made of cotton.</p>
        </div>
        <div className={styles.TrackBag}>
          <p className={styles.TrackBaglogo}><LiaShippingFastSolid /></p>
          <h3 className={styles.TrackBagHead}>Free Shipping</h3>
          <p className={styles.TrackBagContent}>We ship all over India for FREE.</p>
        </div>
        <div className={styles.TrackBag}>
          <p className={styles.TrackBaglogo}><HiOutlineCurrencyRupee /></p>
          <h3 className={styles.TrackBagHead}>Exciting Offers</h3>
          <p className={styles.TrackBagContent}>We provide amazing offers & discounts.</p>
        </div>


      </div>
    </main>
  )
}

export default Track