import React, { Component } from 'react';

import './EmailHeader.css';

class EmailHeader extends Component {
    render() {
        return (
            <div className="email-header-component">
                <a className="contact-link" href="mailto:martavis@auraticdevelopment.com">martavis@auraticdevelopment.com</a>
                &nbsp;|&nbsp;
                <a className="contact-link" href="tel:6572260521">657.226.0521</a>
            </div>
        );
    }
}

export default EmailHeader;