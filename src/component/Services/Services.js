import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData2.json';
const Services = () => {
    const [serviceDetail, setServiceDetail] = useState(fakeData);
    useEffect(() => {
        setServiceDetail(fakeData);
    }, [])
    const { id } = useParams();
    // const result = fakeData.find(doctor=>doctor.id===key) find function is not working
    const doctor = {
        title: serviceDetail[id - 1].title,
        location: serviceDetail[id - 1].location,
        Appointments: serviceDetail[id - 1].Appointments,
        img: serviceDetail[id - 1].img,
        general: serviceDetail[id - 1].general,

    }
    const { img, title, location, Appointments, general } = doctor;

    console.log(doctor);

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
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"> {location}</li>
                            <li class="list-group-item"> {title}</li>
                            <li class="list-group-item">Appointments: {Appointments}</li>
                            <li class="list-group-item">General: {general}</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;