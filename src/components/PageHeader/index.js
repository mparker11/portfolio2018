import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PageHeader.css';

class PageHeader extends Component {
    render() {
        return (
            <div className="page-header-component">
                <h1>{ this.props.title }</h1>
            </div>
        );
    }
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageHeader;