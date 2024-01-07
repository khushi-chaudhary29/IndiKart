import React from 'react'
import styles from '@/app/page.module.css'
import { LuShoppingCart } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaEditSolid } from "react-icons/lia";

const Product = () => {
  return (
    <main className='main'>
      <h3 className={styles.ProductHeading}>Product Details</h3>
      <button className={styles.ProductButton}>Add Product <LuShoppingCart style={{ width: '1rem', height: '1rem' }} /></button>
      <div className={styles.ProductTable}>
        <table className={styles.ProductTableContent} cellpadding="08px">
          <tr className={styles.ProductTableHeading}>
            <th>S.NO</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>DATE</th>
            <th>ACTION</th>
          </tr>
          <tr className={styles.ProductTableData}>
            <td>1</td>
            <td><img src="./iPhone.webp" alt="iphone" className={styles.ProductTableImage} /></td>
            <td>phone</td>
            <td>80000</td>
            <td>test</td>
            <td>Jan07,2024</td>
            <td><RiDeleteBin6Line style={{ width: '1.4rem', height: '1.4rem' }} /> <LiaEditSolid style={{ width: '1.4rem', height: '1.4rem' }} /></td>
          </tr>
        </table>


      </div>
    </main>
  )
}

export default Product