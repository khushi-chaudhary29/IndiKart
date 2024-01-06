import React from 'react'
import styles from '../page.module.css'

const Login = () => {
  return (
    <main className='main'>
      <div className="Login">
        <div className="formbox">
          <h1>Login</h1>
          <form>
            <div className="input-login1">
              <div className="field2">
                <input type="text" placeholder="Email" name="email" required><br><br>
                  <input type="password" placeholder="Password">
                  </div>
                  <div className="btn2">
                    <button type="button">Login</button>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </main>
          )
}

          export default Login