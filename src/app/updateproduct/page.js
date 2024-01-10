import React from 'react'
import styles from '../page.module.css'
const UpdateProduct = () => {
  return (
    <main className='main'>
      <div className={styles.AddProductContainer}>
        <h3 className={styles.AddProductHeading}>Update Product</h3>
        <input className={styles.AddProductAbout} type="text" name="txt_name" placeholder='Product title'></input>
        <br></br>
        <input className={styles.AddProductAbout} type="text" name="txt_name" placeholder='Product price'></input>
        <br></br>
        <input className={styles.AddProductAbout} type="text" name="txt_name" placeholder='Product imageUrl'></input>
        <br></br>
        <input className={styles.AddProductAbout} type="text" name="txt_name" placeholder='Product category'></input>
        <br></br>
        <textarea className={styles.AddProductTextArea} name="txt_qry" rows="10" cols="35" placeholder='Product title'></textarea>
        <br></br>
        <button className={styles.AddProductButton}>Update Product</button>
      </div>
    </main>
  )
}

export default UpdateProduct