import React from 'react'
import styles from '../page.module.css'

const Order = () => {
  return (
    <main className='main'>
      <h3 className={styles.OrderHeading}>Order Details</h3>
      <div className={styles.OrderTable}>
        <table className={styles.OrderTableContent} cellpadding="08px">
          <tr className={styles.OrderTableHeading}>
            <th>PAYMENT ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PINCODE</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th>DATE</th>
          </tr>
          <tr className={styles.OrderTableData}>
            <td>3393939</td>
            <td><img src="./iPhone.webp" alt="iphone" className={styles.OrderTableImage} /></td>
            <td>title</td>
            <td>100</td>
            <td>pots</td>
            <td>name</td>
            <td>India</td>
            <td>82828</td>
            <td>929929929929</td>
            <td>don@gmail.com</td>
            <td>12 Aug 2019</td>
          </tr>
        </table>


      </div>
    </main>
  )
}

export default Order