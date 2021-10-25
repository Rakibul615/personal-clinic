import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData3.json';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctor, setDoctor] = useState(fakeData);
    useEffect(() => {
        setDoctor(fakeData);
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-4">
                {
                    doctor.map(doctor => <Doctor
                        const key={doctor.id}
                        doctor={doctor}

                    ></Doctor>)
                }

            </div>

        </div>
    );
};

export default Doctors;