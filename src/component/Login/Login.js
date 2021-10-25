import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from "../../hooks/useAuth";


const Login = () => {
  const { signInUsingGoogle, signInUsingGitHub } = useAuth();
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

    processLogin(email, password);
    setEmail('');
    setPassword('');
    e.preventDefault();


  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in 
        const user = result.user;
        setError('');
        console.log(user);

      })
      .catch((error) => {
        setError(error.message)
      });

  }

  return (
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" >
              <div className="card-body p-5 text-center">

                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <input onBlur={handleEmail} type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email" required />

                </div>

                <div className="form-outline mb-4">
                  <input onBlur={handlePassword} type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" required />

                </div>


                <button onClick={handleRegisterBtn} className="btn btn-primary btn-lg " type="submit">Login</button>

                <hr className="my-4" />

                <div className="d-flex">
                  <div> <button onClick={signInUsingGoogle} className="btn btn-sm btn-block btn-primary" type="submit"> Sign in with google</button></div>
                  <div className="ms-2"> <button onClick={signInUsingGitHub} className="btn btn-sm btn-block btn-primary mb-2" type="submit">Sign in with GitHub</button></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;