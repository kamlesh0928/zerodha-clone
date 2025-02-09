import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>

                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media\images\zerodhaFundhouse.png" alt='Zerodha Fundhouse' style={{ width: "40%" }} />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Our asset management venture <br />
                        that is creating simple and transparent index <br />
                        funds to help you save for your goals.

                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" alt='Sensibull' style={{ width: "40%" }} />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Options trading platform that lets you <br />
                        create strategies, analyze positions, and examine <br />
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/tijori.svg" alt='Tijori' style={{ width: "40%" }} />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Investment research platform <br />
                        that offers detailed insights on stocks, <br />
                        sectors, supply chains, and more.

                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" alt='Streak' style={{ width: "40%" }} />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.
                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaselogo.png" alt='Smallcase' />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Thematic investing platform <br />
                        that helps you invest in diversified <br />
                        baskets of stocks on ETFs.
                    </p>
                </div>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" alt='Ditto' style={{ width: "40%" }} />
                    <p className='text-muted text-small mt-3' style={{ fontSize: "0.8em" }}>
                        Personalized advice on life <br />
                        and health insurance. No spam <br />
                        and no mis-selling.
                    </p>
                </div>

                <Link to={"/signup"} className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{ width: "20%", margin: "0 auto", backgroundColor: "#387ED1" }}>
                    Sign up for free
                </Link>
            </div>
        </div>
    );
}

export default Universe;