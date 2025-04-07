import React from 'react'
import styles from './Login.module.css'
import InputControl from '../InputControl/InputControl'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>login</h1>
        <InputControl label="Email" placeholder="Enter Your Email" />
        <InputControl label="Password" placeholder="Enter your Password" />
        <div className={styles.footer}>
          <button>Login</button>
          <p>
            Already have an account?{""}
            <span>
              <Link to="/Signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
