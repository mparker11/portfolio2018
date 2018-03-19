import React, { Component } from 'react';

import './Home.css';

import Layout from '../../components/Layout';

class Home extends Component {
    render() {
        return (
            <Layout>
                <div className="home-page">
                    <div className="intro">
                        <h1 className="title">Martavis Parker</h1>
                        <h2 className="subtitle">&ldquo;The Only Developer You Need&rdquo;</h2>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FContactCard%20icon.svg?alt=media&token=2adba449-b435-480d-b759-9c9c476d675c" />
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Home;
