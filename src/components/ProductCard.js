import React from 'react'
import styles from '../app/page.module.css'

const ProductCard = () => {
  return (
    <main className='main'>
      <div className={styles.ProductCard}>
        <div className={styles.PCheading}>
          <h3 className={styles.PCmainheading}>Our Latest Collection</h3>
          <hr class={styles.PCmainheadinghr}></hr>
        </div>
        <div className={styles.PCCard}>
        <img src="./herosection image.jpg" alt="" className={styles.PCimage} />
        <div className={styles.PCcardcontent}>
        <h4 className={styles.PClogo}>IndiKart</h4>
        <p className={styles.PCtitle}>This is title</p>
        <h4 className={styles.PCrate}>&#8377;500</h4>
        <button className={styles.PCbutton}>Add to Cart</button>
        </div>
        </div>
      </div>
    </main>
  )
}

export default ProductCard