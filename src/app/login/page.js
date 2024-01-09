import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
import useRouter from 'next/link'

const Login = () => {
  return (
    <main className='main'>
     <div className={styles.signupcontainer}>
        <div className={styles.form_box}>
          <h1>Login</h1>
          <form>
            <div className={styles.input_login}>
              <div className={styles.field}>
                <input type="text" placeholder="Email" name="email" required className={styles.input} /><br></br>
                <input type="password" placeholder="Password" className={styles.input} />

                <div className={styles.btn}>
                  <button typeName="button">Login</button>
                </div>
                <p>
                  Don't have an account  <Link href="/signup" className={styles.SignupLink} >Signup</Link>
                </p>
              

              </div>
            </div>

          </form>
        </div>
      </div>
    </main>
  )
}

export default Login