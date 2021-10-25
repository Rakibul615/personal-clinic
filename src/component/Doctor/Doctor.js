import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
  const { id, name, title, docImg } = props.doctor;

  return (
    <div className="card" >
      <img src={docImg} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
        <Link to={`/doctorDetail/${id}`}>
          <button type="button" class="btn btn-warning"> Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;