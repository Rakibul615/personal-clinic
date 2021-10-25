import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import '../Contact/Contact.css';
import initializeAuthentication from '../../Firebase/firebase.init';
import { Link } from 'react-router-dom';

initializeAuthentication();
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleRegisterBtn = (e) => {

    registerNewUser(email, password);
    setEmail('');
    setPassword('');
    e.preventDefault();

  }

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(email, password);
        const user = result.user;
        setError('');
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);

      })

  }

  return (
    <section className="vh-100 bg-image" >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" >
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form >

                    <div className="form-outline mb-4">
                      <input onBlur={handleEmail} type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder="Your Email" required />

                    </div>

                    <div className="form-outline mb-4">
                      <input onBlur={handlePassword} type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder="Password" required />

                    </div>

                    <div className="form-outline mb-4">
                      <input onBlur={handlePassword} type="password" id="form3Example4cdg" className="form-control form-control-lg" placeholder="Repeat your password" />

                    </div>

                    <div className="d-flex justify-content-center">
                      <button onClick={handleRegisterBtn} type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-1 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;