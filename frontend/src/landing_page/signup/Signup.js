import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {

    return (
        <>
            <div className='container'>
                <div className='row extra-margin'>
                    <div className='col-8 text-center'>
                        <img src='media\images\landing.46a77378.png' alt='SignupPageImg' style={{ width: "70%" }} />
                    </div>

                    <div className='col-4'>
                        <h1 className='text-muted fs-3'>Signup now</h1>
                        <p className='signup-page-style'>Or track your existing application.</p>
                        <Link to={"/usersignup"} className='px-3 py-2 btn btn-primary' style={{ backgroundColor: "#6098DA", border: "none" }}>
                            Continue
                        </Link>
                    </div>
                </div>

                <div className='row mt-2 text-center text-muted' style={{ fontSize: "0.8rem", marginBottom: "8rem" }}>
                    <div className='col-2'></div>
                    <div className='col-8'>
                        <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>

                        <p>By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.
                        </p>

                        <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </>
    );
}

export default Signup;