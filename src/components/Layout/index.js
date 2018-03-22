import React, { Component } from 'react';
import { Curious } from '@curi/react';
import __isEqual from 'lodash/isEqual';

import './Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            children: null
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ children: this.props.children }), 0);
        setTimeout(() => this.setState({ loading: false }), 3500);
    }
    
    componentWillReceiveProps(nextProps) {
        //when user goes to a new page
        //simulate a fade transition by using the loading div we have
        //but making it blank and transitioning faster
        if (!__isEqual(this.props.children, nextProps.children)) {
            this.setState({ 
                loading: true, 
                children: null 
            }, () => {
                setTimeout(() => this.setState({ 
                    loading: false, 
                    children: this.props.children 
                }), 500);
            });
        }
    }

    render() {
        return (
            <Curious>
                {({ router, response, navigation }) => {
                    return (
                        <div className="app">
                            <div className={`
                                loader 
                                ${ this.state.loading ? 'show' : 'hide' } 
                                ${ navigation.previous === null ? 'first-time' : '' }
                            `}></div>
                            { this.state.children } 
                        </div>
                    )
                }}
            </Curious>
        );
    }
}

export default Layout;
