import React, { Component } from 'react';

import './MyWork.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';

class MyWork extends Component {
    render() {
        return (
            <div className="my-work-page page">
                <EmailHeader />
                <InternalLink page="Resume" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                My Works page
            </div>
        );
    }
}

export default MyWork;
