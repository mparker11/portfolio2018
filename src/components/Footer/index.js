import React, { Component } from 'react';
import { Link } from '@curi/react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-component">
                <p><Link to="Home">Back to Welcome</Link></p>
                <p>&copy; { new Date().getFullYear() } Auratic Development, LLC</p>
            </div>
        );
    }
}

export default Footer;