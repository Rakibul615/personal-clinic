import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header position-relative">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 p-2" >Mayo Clinic</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link active fs-4 p-2" aria-current="page" >Home</Link>
              </li>


              <li className="nav-item">
                <Link to="/blog" className="nav-link active fs-4 p-2" >Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active fs-4 p-2 ">Contact </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link active fs-4 p-2 ">Register </Link>
              </li>
              <h3>{user.displayName}</h3>

              {
                user.displayName ? <button className="btn btn-primary btn-warning" onClick={logOut}>Log out</button> : <li className="nav-item">
                  <Link to="/login" className="nav-link active fs-4 p-2 ">Login </Link>
                </li>
              }



            </ul>
          </div>
        </div>
      </nav>
      <div className=" text-dark shadow-lg p-3 mb-5 bg-body rounded opacity-75 position-absolute top-50 start-50 translate-middle">
        <h1>Welcome to Mayo Clinic</h1>
        <h3>Specialties, Services & Treatments</h3>

        <h4>We provide a full range of family care and more than 40 specialty and subspecialty health care services for patients in our service area. </h4>

      </div>
    </div>
  );
};

export default Header;