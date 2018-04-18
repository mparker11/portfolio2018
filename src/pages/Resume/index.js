import React, { Component } from 'react';
import __isEmpty from 'lodash/isEmpty';

import './Resume.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';
import PageHeader from '../../components/PageHeader';
import experiences from './experiences';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedExp: ''
        }
    }

    selectExperience(name) {
        this.setState({ selectedExp: name });

        //center the scroll at the experiences div
        let offset = document.querySelector('.experiences-container').offsetTop;
        window.scroll({
            top: offset,
            behavior: 'smooth'
        });

        document.querySelector(`html`).classList.add('interactive-scene');
    }
    
    deselectExperience() {
        this.setState({ selectedExp: '' });
        document.querySelector('html').classList.remove('interactive-scene');
    }

    render() {
        let { selectedExp } = this.state;

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
                {
                    experiences.map((experience, i) => {
                        return (
                            <div key={ i }>
                                <div data-name={ experience.name } 
                                    className={ `experience ${ selectedExp === experience.name ? 'selected' : !__isEmpty(selectedExp) ? 'not-selected' : '' }` }
                                    onClick={ () => this.selectExperience(experience.name) }
                                >
                                    <div className="details">
                                        <img alt={ experience.fullname } src={ experience.logoSrc } />
                                    </div>
                                </div>
                                <div className="experience-close" onClick={ () => this.deselectExperience() }>&times;</div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

export default Resume;
