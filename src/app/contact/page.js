import React from 'react'
import styles from '../page.module.css'

const Contact = () => {
  return (
    <div className={styles.containerform}>
      <h3 className={styles.Cartheading}>Contact Us</h3>
      <h6 className={styles.Contactpara}>You'll hear from us at the earliest!</h6>
      <form action="#" method="post">
        <input type="text" className={styles.ContactInfo} placeholder="Full Name" />
        <input type="email" className={styles.ContactInfo} placeholder="Email" />
        <input  className={styles.ContactInfo} placeholder="Phone" />
        <textarea className={styles.ContactQuery} name="txt_qry" rows="7" cols="35" placeholder='Any comment on your query'></textarea>

      </form>
      <button className={styles.Contactbutton}>Send</button>
      <p className={styles.contactus}>You can also contact us at 181-1711-322</p>

    </div>
  )
}

export default Contact