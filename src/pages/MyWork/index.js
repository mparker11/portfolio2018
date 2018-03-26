import React, { Component } from 'react';

import './MyWork.css';

import EmailHeader from '../../components/EmailHeader';
import PageHeader from '../../components/PageHeader';
import InternalLink from '../../components/InternalLink';

class MyWork extends Component {
    render() {
        return (
            <div className="my-work-page page">
                <EmailHeader />
                <InternalLink page="Resume" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                <PageHeader title="My Work Showcase" />
                <p className="description">
                    From creating a featured client app for the 
                    &nbsp;<a href="https://www.ces.tech/" target="_blank">Consumer Electronics Show (CES)</a>&nbsp;
                    to building websites for small business owners, the work you see below has been proudly created with love. 
                    I strive to achieve the best quality, rather than working for a quick buck, and 
                    look forward to working with those who are a stickler for the same. If you would like to chat 
                    with me about an opportunity, please feel free to reach me using the contact info above.
                </p>
            </div>
        );
    }
}

export default MyWork;
