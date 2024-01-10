'use client'
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Signup = () => {
  const router = useRouter()
  const handleForm = (e) => {
    e.preventDefault();
    router.push('/')
  }
  return (
    <main className='main'>
      <div className={styles.signupcontainer}>
        <div className={styles.form_box}>
          <h1>SignUp</h1>
          <form onSubmit={handleForm}>
            <div className={styles.input_login}>
              <div className={styles.field}>
                <input type="text" placeholder="Email" name="email" required className={styles.input} /><br></br>
                <input type="password" placeholder="Password" className={styles.input} />

                <div className={styles.btn}>
                  <button type='submit' onClick={handleForm}>Sign Up</button>
                </div>
                <p>
                 Have an account  <Link href="/login" className={styles.SignupLink} >Signup</Link>
                </p>

              </div>
            </div>

          </form>
        </div>
      </div>
    </main >




  )
}

export default Signup