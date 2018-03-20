import React, { Component } from 'react';
import * as PIXI from 'pixi.js';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: null
        };

        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        this.renderBackground();
        this.getShader();
    }

    renderBackground() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer = new PIXI.autoDetectRenderer(width, height);
        document.body.appendChild(this.renderer.view);
        
        this.stage = new PIXI.Container();
        // Load an image and create an object
        this.logo = PIXI.Sprite.fromImage("http://www.goodboydigital.com/pixijs/pixi_v3_github-pad.png");
        // Set it at the center of the screen
        this.logo.x = width / 2;
        this.logo.y = height / 2;
        // Make sure the center point of the image is at its center, instead of the default top left
        this.logo.anchor.set(0.5);
        // Add it to the screen
        this.stage.addChild(this.logo);

        this.animate();
    }
    
    animate() {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.stage);
    }

    getShader() {
        import('./shader').then(({ default: code }) => {
            const simpleShader = new PIXI.Filter('', code);
            this.logo.filters = [simpleShader]
        });
    }

    render() {
        return (
            <div className="home-page">
                <div className="resume-link home-link">
                    <div className="inner-link">
                        <img alt="" className="default" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FResume%20Icon.svg?alt=media&token=b1c37ff2-249d-4dd0-9de0-59081ea8dfbd" />
                        <img alt="" className="gradient" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                        <p>Resumé</p>
                    </div>
                </div>
                <div className="freelance-link home-link">
                    <div className="inner-link">
                        <img alt="" className="default" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FDeveloper%20Icon.svg?alt=media&token=949477c0-6cfe-4a5a-8c19-4f3d34faa313" />
                        <img alt="" className="gradient" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Development%20Icon.svg?alt=media&token=324d3fd2-ab1b-45ea-a10a-336cce9660d7" />
                        <p>Freelance</p>
                    </div>
                </div>
                <div className="intro">
                    <h1 className="title">Martavis Parker</h1>
                    <h2 className="subtitle">&ldquo;The Only Developer You Need&rdquo;</h2>
                </div>
                <div className="personal-info">
                    <div className="inner-info">
                        <div className="contact">
                            <a href="mailto:martavis@auraticdevelopment.com">martavis@auraticdevelopment.com</a>
                            <br />
                            <a href="tel:6572260521">657.226.0521</a>
                        </div>
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FContactCard%20icon.svg?alt=media&token=2adba449-b435-480d-b759-9c9c476d675c" />
                    </div>
                </div>
                { this.state.view !== null &&
                    <this.state.view /> }
            </div>
        );
    }
}

export default Home;
