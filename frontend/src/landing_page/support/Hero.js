import React from 'react';

function Hero() {

    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>

                <a href='#'>Track tickets</a>
            </div>

            <div className='row'>

                <div className='col-1'></div>

                <div className='col-6 p-3 supportExPadding'>
                    <h3 className='fs-4'>
                        Search for an answer or browse help topics to create a ticket
                    </h3>

                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' /> <br/>

                    <a href='#'>Track account opening</a> &nbsp;&nbsp;&nbsp;
                    <a href='#'>Track segment activation</a> &nbsp;&nbsp;&nbsp;
                    <a href='#'>Intraday margins</a> &nbsp;&nbsp;&nbsp;
                    <a href='#'>Kite user manual</a> &nbsp;&nbsp;&nbsp;
                </div>

                <div className='col-5 p-5'>
                    <h3 className='fs-5'>Featured</h3>

                    <ol>
                        <li className='mb-2'><a href='#'>Scheduled maintenance downtime for Coin</a></li>
                        <li><a href='#'> BSE StAR mutual fund platform downtime</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;