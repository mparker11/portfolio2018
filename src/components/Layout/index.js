import React, { Component } from 'react';
import { Curious } from '@curi/react';
import __isEqual from 'lodash/isEqual';

import './Layout.css';

import Footer from '../Footer';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            children: null,
            triggerWatchResize: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ children: this.props.children }), 0);
        setTimeout(() => this.setState({ loading: false }, () => {
            //after the loading is done, tweak style to prepare for next page transition
            document.querySelector('.loader').classList.remove('first-time');
        }), 3500);
    }
    
    componentWillReceiveProps(nextProps) {
        //when user goes to a new page
        //simulate a fade transition by using the loading div we have
        //but making it blank and transitioning faster
        if (!__isEqual(this.props.children, nextProps.children)) {
            this.setState({ loading: true }, () => {
                setTimeout(() => this.setState({ children: null }, () => {
                    setTimeout(() => this.setState({ 
                        loading: false, 
                        children: this.props.children 
                    }, () => {
                        document.querySelector(`html`).classList.remove('interactive-scene');
                    }), 300);
                }), 300);
            });
        }
    }

    render() {
        let childrenWithProps = React.Children.map(this.state.children, child =>
            React.cloneElement(child, { triggerWatchResize: this.state.triggerWatchResize })
        );
        
        return (
            <div className="app">
                <div className={`
                    loader 
                    ${ this.state.loading ? 'show' : 'hide' } 
                    ${ this.props.navigation.previous === null ? 'first-time' : '' }
                `}></div>
                { childrenWithProps } 
                {
                    this.props.response.name !== 'Home' &&
                    <Footer />
                }
                <div className="no-less-1280">
                    <div>
                        <h1>Oops, you caught me!</h1>
                        <p>
                            Most modern screens have a resolution wider than 1280 pixels, so I didn&rsquo;t think 
                            coding for responsiveness was necessary. 
                            <br /><br />
                            Please visit the site on a larger screen or drag the browser to be wider. 
                            <br /><br />
                            Thanks!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default props => (
    <Curious>
        {({ router, response, navigation }) => {
            return <Layout response={ response } navigation={ navigation } { ...props }/>
        }}
    </Curious>
);
