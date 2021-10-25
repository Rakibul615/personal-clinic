import React from 'react';

import img from '../../Images/robot.png'

const NotFound = () => {
    return (
        <div className="d-flex m-5 p-3 not-found">
            <div>
                <h2>404. That's an error</h2>
                <p>The requested URL was not found on this server</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>


        </div>
    );
};

export default NotFound;