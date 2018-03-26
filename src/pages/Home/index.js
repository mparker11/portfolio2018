import React, { Component } from 'react';
import { Link } from '@curi/react';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        // import * as PIXI from 'pixi.js';
        import('pixi.js').then((PIXI) => {
            this.PIXI = PIXI;
            this.width = window.outerWidth;
            this.height = window.outerHeight;
            this.animationCount = 0;
            this.cbc = { var: -1.5 };
            this.cbd = { var: 2 };
            this.sr = 0.75;
            this.sb = 0.0;
            this.sg = 0.0;
    
            this.renderBackground();
        })
    }

    componentWillUnmount() {
        document.body.removeChild(this.renderer.view);
    }

    renderBackground() {
        this.renderer = new this.PIXI.autoDetectRenderer(this.width, this.height);
        document.body.appendChild(this.renderer.view);
        
        this.stage = new this.PIXI.Container();
        this.getShader();
    }
    
    getShader() {
        import('./shader').then(({ default: shaderCode }) => {
            this.smokeShader = new this.PIXI.Filter('', shaderCode);
            
            this.smokeShader.uniforms.resolution[0] = this.width;
            this.smokeShader.uniforms.resolution[1] = this.height;
            this.smokeShader.uniforms.time = 0.0;
            this.smokeShader.uniforms.cd = this.cbd.var;
            this.smokeShader.uniforms.cb = this.cbc.var;
            this.smokeShader.uniforms.sr = this.sr;
            this.smokeShader.uniforms.sg = this.sg;
            this.smokeShader.uniforms.sb = this.sb;
            this.smokeShader.uniforms.sb = this.sb;

            let bg = this.PIXI.Sprite.fromImage('https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fbackground.jpg?alt=media&token=c197c26d-9ade-42b2-a263-37866f31ebab');
            bg.width = this.width;
            bg.height = this.height;
            bg.filters = [this.smokeShader];
            this.stage.addChildAt(bg, 0);
            
            this.animate();
        });
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.renderer.render(this.stage);

        this.animationCount += 0.08;
        this.smokeShader.uniforms.time = this.animationCount;
        this.smokeShader.uniforms.cb = this.cbc.var;
        this.smokeShader.uniforms.cd = this.cbd.var;
        this.smokeShader.uniforms.sr = this.sr;
        this.smokeShader.uniforms.sb = this.sb;
        this.smokeShader.uniforms.sg = this.sg;
    }

    render() {
        return (
            <div className="home-page page solid-bg">
                <Link className="resume-link home-link" to="Resume">
                    <div className="inner-link">
                        <img alt="" className="default" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FResume%20Icon.svg?alt=media&token=b1c37ff2-249d-4dd0-9de0-59081ea8dfbd" />
                        <img alt="" className="gradient" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                        <p>Resumé</p>
                    </div>
                </Link>
                <Link className="my-work-link home-link" to="MyWork">
                    <div className="inner-link">
                        <img alt="" className="default" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FDeveloper%20Icon.svg?alt=media&token=949477c0-6cfe-4a5a-8c19-4f3d34faa313" />
                        <img alt="" className="gradient" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Development%20Icon.svg?alt=media&token=324d3fd2-ab1b-45ea-a10a-336cce9660d7" />
                        <p>My Work</p>
                    </div>
                </Link>
                <div className="intro">
                    <h1 className="title">Martavis Parker</h1>
                    <h2 className="subtitle">&ldquo;The Only Developer You Need&rdquo;</h2>
                </div>
                <div className="personal-info">
                    <div className="inner-info">
                        <div className="contact">
                            <a className="contact-link" href="mailto:martavis@auraticdevelopment.com">martavis@auraticdevelopment.com</a>
                            <br />
                            <a className="contact-link" href="tel:6572260521">657.226.0521</a>
                        </div>
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FContactCard%20icon.svg?alt=media&token=2adba449-b435-480d-b759-9c9c476d675c" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
