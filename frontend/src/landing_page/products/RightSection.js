import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-4 p-5 mt-5 mr-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted' style={{fontSize:"1.1em"}}>{productDescription}</p>

                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className='col-1'></div>

                <div className='col-4'>
                    <img src={imageURL} />
                </div>

                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default RightSection;