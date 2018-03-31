import React, { Component } from 'react';

import './Resume.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';
import PageHeader from '../../components/PageHeader';

class Resume extends Component {
    componentDidMount() {
        this.inhanceExp = document.querySelector('.experience[data-name="inhance"]');
        this.accuagencyExp = document.querySelector('.experience[data-name="accuagency"]');
        this.ciaExp = document.querySelector('.experience[data-name="cia"]');
        this.codesparkExp = document.querySelector('.experience[data-name="codespark"]');
        this.freelancingExp = document.querySelector('.experience[data-name="freelancing"]');
        this.harrisExp = document.querySelector('.experience[data-name="harris"]');
        this.roadtripExp = document.querySelector('.experience[data-name="roadtrip"]');
        
        this.watchResize = new window.WatchElementResize([
            this.inhanceExp,
            this.accuagencyExp,
            this.ciaExp,
            this.codesparkExp,
            this.freelancingExp,
            this.harrisExp,
            this.roadtripExp
        ]);

        this.watchResize.on('resize', (e) => {
            this.onExperienceResize(e.element);
        });
    }
    
    componentWillUnmount() {
        delete this.watchResize;
    }

    onExperienceResize(element) {
        console.log('resizing: ' + element.target.dataset.name);
    }

    render() {
        return (
            <div className="resume-page page">
                <EmailHeader />
                <InternalLink page="MyWork" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Development%20Icon.svg?alt=media&token=324d3fd2-ab1b-45ea-a10a-336cce9660d7" />
                <PageHeader title="My Current Skills" />
                <div className="skills-container">
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fhtml-icon.svg?alt=media&token=b775555f-a0c3-457e-bca1-880816466275" />
                        <p>HTML 5</p>
                    </div>
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fcss-icon.svg?alt=media&token=66cdc57d-6129-4aba-88cc-abfee389ffbc" />
                        <p>CSS 3</p>
                    </div>
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fjavascript-icon.svg?alt=media&token=b4afe91f-4850-4f05-9f67-ecb2ef7103e0" />
                        <p>Javascript</p>
                    </div>
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Freact-icon.svg?alt=media&token=41c5340b-0e24-4094-9d03-5ab4b854bb3b" />
                        <p>React</p>
                    </div>
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Ffirebase-icon.svg?alt=media&token=94d97bec-e7f2-486b-bf44-401380ba1c60" />
                        <p>Firebase</p>
                    </div>
                    <div className="skill">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fgit-icon.svg?alt=media&token=884cb895-f118-48d0-bd98-9ace20bb91a3" />
                        <p>Git</p>
                    </div>
                </div>
                <div className="divider"></div>
                <PageHeader title="My Work Experiences" />
                <div className="experiences-container">
                    <div className="experience" data-name="inhance">
                        <div className="front">
                            <img alt="Inhance Digital Corporation" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Finhance_logo.svg?alt=media&token=e814d308-36f6-46be-8d96-1da828881e67" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="accuagency">
                        <div className="front">
                            <img alt="Assurance Systems Incorporated" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Faccuagency_logo.svg?alt=media&token=dcb7b10a-01f9-4fe3-9855-9293802ba7c3" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="cia">
                        <div className="front">
                            <img alt="Central Intelligence Agency" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Fcia_logo.svg?alt=media&token=6739fcc7-ba89-4065-afe7-78e9d21aef56" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="codespark">
                        <div className="front">
                            <img alt="codeSpark Academy" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Fcodespark_logo.svg?alt=media&token=cdafe743-9f8d-416d-8852-912cf6d4ba86" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="freelancing">
                        <div className="front">
                            <img alt="Freelancing" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Ffreelancing_logo.svg?alt=media&token=6aee1c18-da5c-4fbd-8158-2547e71ae9b1" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="harris">
                        <div className="front">
                            <img alt="Harris Corporation" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Fharris_logo.png?alt=media&token=43a4f254-dc97-4a57-9859-59bb44b0edaf" />
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="experience" data-name="roadtrip">
                        <div className="front">
                            <img alt="Roadtrip Nation" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Frtn_logo.png?alt=media&token=cdf302cd-cb99-49aa-8dff-5ad35120d244" />
                        </div>
                        <div className="back"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
