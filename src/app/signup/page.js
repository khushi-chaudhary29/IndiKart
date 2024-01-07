import React from 'react'
import styles from '../page.module.css'

const Signup = () => {
  return (
    <main className='main'>
      <div className="signupcontainer">
        <div className="form-box">
          <h1>SignUp</h1>
          <form>
            <div className="input-login">
              <div className="field">
                <input type="text" placeholder="Email" name="email" required className='input' /><br></br>
                <input type="password" placeholder="Password" className='input' />

                <div className="btn">
                  <button typeName="button">Sign Up</button>
                </div>

              </div>
            </div>

          </form>
        </div>
      </div>
    </main >




  )
}

export default Signup