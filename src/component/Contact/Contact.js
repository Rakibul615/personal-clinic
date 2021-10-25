import React from 'react';
import './Contact.css';



const Contact = () => {
    return (
        <div className="ms-5">
            <h1>Contact Us</h1>
            <div className="d-flex p-5 ms-5">
                <div className="border border-secondary m-2 p-3">
                <p>  3045 10 Sunrize Avenue,Mohakhali,Dhaka</p>
                <h3>  +88018178636</h3>
                 <h3> educare@gmail.com</h3>

                </div>
                <div>
                    <div className="container p-5 ms-5 ">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-75">
                                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-75">
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div className="row">

                            </div>
                            <div className="row">
                                <div className="col-75">
                                    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;