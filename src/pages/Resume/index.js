import React, { Component } from 'react';
import __isEmpty from 'lodash/isEmpty';
import __find from 'lodash/find';

import './Resume.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';
import PageHeader from '../../components/PageHeader';
import masterExperienceList from './experiences';
import Modal from 'react-modal';

const { detect } = require('detect-browser');
const browser = detect();

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedExp: '',
            showModal: false,
            modalExpDetails: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedExp !== this.state.selectedExp) {
            if (browser.name !== 'safari' && browser.name !== 'edge' && browser.name !== 'ie') {
                if (!__isEmpty(this.state.selectedExp)) {
                    this.selectExperienceForGreatBrowsers();
                } else {
                    this.deselectExperienceForGreatBrowsers();
                }
            } else {
                this.toggleExperienceForTerribleBrowsers(this.state.selectedExp);
            }
        }
    }

    selectExperienceForGreatBrowsers() {
        //center the scroll at the experiences div
        let offset = document.querySelector('.experiences-container').offsetTop;
        window.scroll({
            top: offset - 30,
            behavior: 'smooth'
        });

        document.querySelector('html').classList.add('interactive-scene');
        document.querySelector('.center-gravity').classList.add('interactive-scene');

        let allExperiences = document.querySelectorAll('.experience');
        for (let i = 0; i < allExperiences.length; i++) {
            if (allExperiences[i].dataset.name === this.state.selectedExp) {
                allExperiences[i].classList.add('selected');
            } else {
                allExperiences[i].classList.add('not-selected');
            }
        }
        
        let nonInteractives = document.querySelectorAll('.no-interactive');
        for (let i = 0; i < nonInteractives.length; i++) {
            nonInteractives[i].classList.add('interactive-scene');
        }
    }
    
    deselectExperienceForGreatBrowsers() {
        document.querySelector('html').classList.remove('interactive-scene');
        document.querySelector('.center-gravity').classList.remove('interactive-scene');
        
        let allExperiences = document.querySelectorAll('.experience');
        for (let i = 0; i < allExperiences.length; i++) {
            allExperiences[i].classList.remove('selected');
            allExperiences[i].classList.remove('not-selected');
        }

        let nonInteractives = document.querySelectorAll('.no-interactive');
        for (let i = 0; i < nonInteractives.length; i++) {
            nonInteractives[i].classList.remove('interactive-scene');
        }
    }

    toggleExperienceForTerribleBrowsers(experience) {
        this.setState({ 
            showModal: experience !== '',
            modalExpDetails: experience !== '' ? (__find(masterExperienceList, { name: experience })) : null
        });
    }
    
    render() {
        let { modalExpDetails } = this.state;

        return (
            <div className="resume-page page">
                <EmailHeader />
                <InternalLink page="MyWork" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Development%20Icon.svg?alt=media&token=324d3fd2-ab1b-45ea-a10a-336cce9660d7" />
                <PageHeader title="My Current Skills" />
                <div className="skills-container no-interactive">
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
                <div className="divider no-interactive"></div>
                <PageHeader title="My Work Experiences" />
                <div className="experiences-container">
                    <div className="center-gravity">
                        {
                            masterExperienceList.map((experience, i) => {
                                return (
                                    <div key={ i }>
                                        <div data-name={ experience.name } 
                                            className="experience"
                                            onClick={ () => this.setState({ selectedExp: experience.name }) }
                                        >
                                            <div className="details-container">
                                                <img alt={ experience.fullname } src={ experience.logoSrc } />
                                                <div className="detailed-content" dangerouslySetInnerHTML={{ __html: experience.details }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="experience-close" onClick={ () => this.setState({ selectedExp: '' }) }>&times;</div>
                    </div>
                </div>
                <div className="divider no-interactive"></div>
                <PageHeader title="My Education" />
                <div className="education">
                    <div className="ed-block">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Fscstate_logo.svg?alt=media&token=5859b20f-77e4-45b5-a9e8-60e791a871b1" />
                        <p>South Carolina<br />State University</p>
                    </div>
                    <div className="ed-block rotated">
                        <img alt="" src="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2Fexperiences%2Fcum_laude.svg?alt=media&token=4a81218b-8d6f-487a-aaa9-29c49b535074" />
                        <p>Bachelor of Science<br />Computer Science<br />Cum Laude, 2010</p>
                    </div>
                </div>
                <Modal 
                    isOpen={ this.state.showModal } 
                    closeTimeoutMS={ 300 }
                    style={{
                        content: {
                            backgroundColor: 'rgba(240, 240, 240, 0.95)'
                        }
                    }}
                >
                    {
                        !__isEmpty(modalExpDetails) &&
                        <div className="details-container">
                            <img alt={ modalExpDetails.fullname } src={ modalExpDetails.logoSrc } />
                            <div className="detailed-content" dangerouslySetInnerHTML={{ __html: modalExpDetails.details }}></div>
                        </div>
                    }
                    <div className="video-close" onClick={ () => this.setState({ selectedExp: '' }) }>&times;</div>
                </Modal>
            </div>
        );
    }
}

export default Resume;
