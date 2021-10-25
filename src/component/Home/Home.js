import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Doctor from '../Doctor/Doctor';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState(fakeData);
    useEffect(() => {
        setServices(fakeData);
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row row-cols-4">
                    {
                        services.map(doctor => <Doctor
                            const key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </div>

            </div>
            <div className=" services-container border border-2 m-2 shadow-lg p-3 mb-5 bg-body rounded">

                <div class=" service-container row  m-3 p-3 row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => <Service
                            const key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;