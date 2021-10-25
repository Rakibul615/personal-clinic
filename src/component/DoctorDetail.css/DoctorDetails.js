import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData3.json'
import './DoctorDetails.css'
const DoctorDetails = () => {
  const [doctorDetail, setDoctorDetail] = useState(fakeData);
  useEffect(() => {
    setDoctorDetail(fakeData);
  }, [])
  const { key } = useParams();
  // const result = fakeData.find(doctor=>doctor.id===key) find function is not working
  const doctor = {
    id:    doctorDetail[key - 1].id,
    title: doctorDetail[key - 1].title,
    name:  doctorDetail[key - 1].name,
    img:   doctorDetail[key - 1].docImg,
    time:  doctorDetail[key - 1].time,
    fee:   doctorDetail[key - 1].fee,
  }
  const { img, name, title, time, fee } = doctor;

  //console.log(doctor)    
  return (
    <div class="card m-5 p-3 doctorCard"  >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={img}
            alt="..."
            class="img-fluid"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Title: {title}</li>
              <li class="list-group-item">Fee: {fee}</li>
              <li class="list-group-item">Time: {time}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;