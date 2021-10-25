import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
  const { serviceName, id, img } = props.service;

  return (
    <div className="col course-card">
      <div class="card">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{serviceName}</h5>

          <Link to={`/services/${id}`}>
            <button type="button" class="btn btn-warning"> Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;