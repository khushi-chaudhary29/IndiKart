import React from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <main className='main'>
      <div className={styles.ProductCard}>
        <div className={styles.PCheading}>
          <h3 className={styles.PCmainheading}>Our Latest Collection</h3>
          <hr class={styles.PCmainheadinghr}></hr>
        </div>
        <div className={styles.PCCardContainer}>
          <div className={styles.PCCard}>
            <img src="./shoes.jpeg" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>Nike Shoes</p>
              <h4 className={styles.PCrate}>&#8377;5000</h4>
              <Link href='/productinfo'><button className={styles.PCbutton}>Add to Cart</button></Link>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./iphone.webp" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>iPhone7</p>
              <h4 className={styles.PCrate}>&#8377;50000</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./bag.jpg" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>Tourist Bag</p>
              <h4 className={styles.PCrate}>&#8377;1000</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./h&M.webp" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>Denim Jacket</p>
              <h4 className={styles.PCrate}>&#8377;2500</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductCard