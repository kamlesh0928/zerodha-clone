import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePLay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-1'></div>

                <div className='col-4'>
                    <img src={imageURL} />
                </div>

                <div className='col-2'></div>

                <div className='col-4 p-5 mt-5 mr-5'>
                    <h1>{productName}</h1>
                    <p className='text-muted' style={{fontSize:"1.1em"}}>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className='mt-3'>
                        <a href={googlePLay}><img src='media\images\googlePlayBadge.svg' /></a>
                        <a href={appStore} style={{ marginLeft: "25px" }}><img src='media\images\appstoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;