import React from 'react'
import styles from '../page.module.css'
import { IoHeartCircleOutline } from "react-icons/io5";

const ProductInfo = () => {
  return (
    <main className='main'>
      <div className={styles.smallcontainer}>
        <div>
          <div className={styles.col_2}>
            <img src="./shoes.jpeg" alt="" className={styles.PIimage} />
          </div>
          <div className={styles.col_2}>
            <h3>BRAND NAME</h3>
            <h4>Product Details</h4>
            <p>Comfortable, durable and timeless—it's number 1 for a reason. The '80s construction pairs with classic colours for style that tracks whether you're on court or on the go.
            </p>
            <hr className={styles.PIhr}></hr>
            <div><button>Add to Cart</button></div>
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