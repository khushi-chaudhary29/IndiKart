import React, { useContext } from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'
/* import myContext from '@/app/context/data/myContext' */

const ProductCard = () => {
  /* const context = useContext(myContext)
  const {product} = context */
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
              <h4 className={styles.PCrate}>&#8377;5,000</h4>
              <Link href='/productinfo'><button className={styles.PCbutton}>Add to Cart</button></Link>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./iphone.webp" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>iPhone 7</p>
              <h4 className={styles.PCrate}>&#8377;31,500</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./bag.jpg" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>Tourist Bag</p>
              <h4 className={styles.PCrate}>&#8377;1,000</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
          <div className={styles.PCCard}>
            <img src="./h&M.webp" alt="" className={styles.PCimage} />
            <div className={styles.PCcardcontent}>
              <h4 className={styles.PClogo}>IndiKart</h4>
              <p className={styles.PCtitle}>Denim Jacket</p>
              <h4 className={styles.PCrate}>&#8377;2,500</h4>
              <button className={styles.PCbutton}>Add to Cart</button>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductCard