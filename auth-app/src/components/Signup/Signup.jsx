import React, { useState } from 'react'
import styles from './Signup.module.css'
import InputControl from '../InputControl/InputControl'
import { Link,useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

function Signup() {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    };
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
        console.log(user);
        // console.log(res);
      }).catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
        // console.log("Error-", err)
      })
  };
  // const handleNameChange=(e)=>{
  //    setValues({...values,name:e.target.value})
  // }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sigup</h1>
        <InputControl
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        />
        <InputControl
          label="Email"
          placeholder="Enter Your Email"
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />
        <InputControl
          label="Password"
          placeholder="Enter your Password"
          onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
          >Signup</button>
          <p>
            Already have an account?{""}
            <span>
              <Link to="/Login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup