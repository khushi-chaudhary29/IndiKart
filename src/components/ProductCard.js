import React from 'react'
import styles from '../app/page.module.css'

const ProductCard = () => {
  return (
    <main className='main'>
      <div className={styles.ProductCard}>
        <div className={styles.PCheading}>
          <h3 className={styles.PCmainheading}><u className={styles.PCuheading}>Our Latest Collection</u></h3>
        </div>
        <div className={styles.PCCard}>
        <img src="public/herosection image.jpg" alt="" className={styles.PCimage} />
        <h6 className={styles.PClogo}>IndiKart</h6>
        <h4 classNmae={styles.PCtitle}>This is title</h4>
        <h4 className={styles.PCrate}>&#8377;500</h4>
        <button className={styles.PCbutton}>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}

export default ProductCard