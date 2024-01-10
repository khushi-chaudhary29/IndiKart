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
            <h3>NIKE SHOES</h3>
            <h4>Product Details</h4>
            <p>Comfortable, durable and timeless—it's number 1 for a reason. The '80s construction pairs with classic colours for style that tracks whether you're on court or on the go.
            </p>
            <p className={styles.price}>₹5000</p>
            <p>Select Size</p>
            <select className={styles.search_number}>
            <option value="100">UK4</option>
            <option value="200">UK5</option>
            <option value="300">UK6</option>
            <option value="400">UK7</option>
            <option value="500">UK8</option>
            <option value="600">UK9</option>
          </select>
            <hr className={styles.PIhr}></hr>
            <div><button>Add to Cart</button></div> <IoHeartCircleOutline className={styles.like}/>
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