import React, { Component } from 'react';
import { Link } from '@curi/react';
import PropTypes from 'prop-types';

import './InternalLink.css';

class InternalLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageTitle: props.page === 'Resume' ? 'Resumé' : 'My Work'
        }
    }

    render() {
        return (
            <Link to={ this.props.page }>
                <div className="internal-link-component">
                    <div className={ `inner-container ${ this.props.page.toLowerCase() }` }>
                        <img alt={ this.state.pageTitle } src={ this.props.imageSrc } />
                    </div>
                </div>
            </Link>
        );
    }
}

InternalLink.propTypes = {
    page: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
}

export default InternalLink;