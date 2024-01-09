import React from 'react'
import styles from '../app/page.module.css'

const Modal = () => {
  return (
    <div>
      <div className={styles.container_form}>
        <form>
          <p className="abc">Enter Full Name</p>
          <input type="text" className={styles.fullname}/>
            <p>Enter Full Address</p>
            <input type="text" className={styles.address}/>
              <p>Enter Pincode</p>
              <input type="number" className={styles.pinnumber}/>
                <p>Enter Mobile number</p>
                <input type="number" className={styles.mobile_no}/>
                </form>
                <button class={styles.button}>Buy Now</button>
              </div>
            </div>
            )
}

            export default Modal