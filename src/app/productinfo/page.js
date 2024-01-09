import React from 'react'
import styles from '../page.module.css'

const ProductInfo = () => {
  return (
    <main className='main'>
       <div className={styles.smallcontainer}>
        <div>
            <div className={styles.col_2}>
                <img src="logo.jpg" className="pic"/>
            </div>
            <div className={styles.col_2}>
               <h3>Brand Name</h3>
               <h4>Product Details</h4>
               <p>Lightweight & Breathable : Exclusive design and durable materials every step feels light and breezy.
                Breathable,free-moving fabrics which adjust according to your foot and
                creates an astoundingly easy-going experience.
                Non Slip & Shockproof: Great engineering strikes a balance in style,
                made in the potent design and latest fashion trends</p>
                <hr/>
                <button>Add to Cart</button> 
          </div>
            <div className={styles.ratings}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-light fa-star"></i>
            </div>
         </div>
    </div>
   
    </main>
  )
}

export default ProductInfo