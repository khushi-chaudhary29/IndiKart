import React from 'react'
import styles from '@/app/page.module.css'

const Users = () => {
  return (
    <main className='main'>
      <h3 className={styles.UserHeading}>User Details</h3>
      <div className={styles.UserTable}>
        <table className={styles.UserTableContent} cellpadding="08px">
          <tr className={styles.UserTableHeading}>
            <th>S.NO</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PINCODE</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th>DATE</th>
          </tr>
          <tr className={styles.UserTableData}>
            <td>1</td>
            <td>Name</td>
            <td>Address</td>
            <td>181919</td>
            <td>1991818818</td>
            <td>done@gmail.com</td>
            <td>12 Aug 2019</td>
          </tr>
        </table>


      </div>
    </main>
  )
}

export default Users