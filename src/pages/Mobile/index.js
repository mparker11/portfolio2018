import React, { Component } from 'react';
import { Curious } from '@curi/react';

import './Mobile.css';

class Mobile extends Component {
    render() {
        return (
            <div className="mobile-page page">
                <div className="intro">
                    <h1 className="title">Martavis Parker</h1>
                    <h2 className="subtitle">&ldquo;The Only Developer You Need&rdquo;</h2>
                </div>
                <div className="about-me">
                    <p>
                        Thank you for visiting my website. If you would like to see a version that highlights my 
                        skills more, please visit the website on a laptop or desktop device. If you would like to reach me 
                        for an opportunity, without further ado:
                    </p>
                        {/* Phone: <a href="tel:6572260521">(657) 226-0521</a>
                        <br />
                        Email: <a href="mailto:martavis@auraticdevelopment.com">martavis@auraticdevelopment.com</a> */}
                    <div className="contact-block">
                        <a className="mobile-button" href="tel:6572260521">Call Me</a>
                        <a className="mobile-button opposite" href="mailto:martavis@auraticdevelopment.com">Email Me</a>
                    </div>
                    <p>
                        Otherwise, feel free to view my resume as a PDF by clicking the button below and I hope you&rsquo;re 
                        having a blessed day!
                    </p>
                </div>
                <a className="mobile-button" target="_blank" href="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/files%2FMartavisResume2018.pdf?alt=media&token=69d5280b-9992-406e-875d-ff3edc2a1966">View Resume</a>
            </div>
        );
    }
}

export default props => (
    <Curious>
        {({ router, response, navigation }) => {
            return <Mobile response={ response } { ...props }/>
        }}
    </Curious>
);
