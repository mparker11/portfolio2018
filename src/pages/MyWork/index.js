import React, { Component } from 'react';

import './MyWork.css';

import EmailHeader from '../../components/EmailHeader';
import PageHeader from '../../components/PageHeader';
import InternalLink from '../../components/InternalLink';
import projects from './projects';

class MyWork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProject: ''
        };
    }

    componentDidMount() {
        import('react-scroll').then((Scroll) => {
            this.scroll = Scroll.animateScroll;
        });
    }

    componentWillUpdate() {
        this.unsetVideoScene();
    }

    componentDidUpdate() {
        this.setVideoScene();
    }

    setVideoScene() {
        if (this.state.selectedProject !== '') {
            const video = document.querySelector(`#${ this.state.selectedProject }`);
            const offset = 125;
            const view = video.offsetTop - offset;
            
            this.scroll.scrollTo(view, {
                duration: 300,
                smooth: 'easeInOutQuad'
            });

            document.querySelector(`html`).classList.add('video-scene');
            document.querySelector(`.page-description`).classList.add('video-scene');
            video.classList.add('video-scene');
        }
    }

    unsetVideoScene() {
        if (this.state.selectedProject !== '') {
            const video = document.querySelector(`#${ this.state.selectedProject }`);
    
            document.querySelector(`html`).classList.remove('video-scene');
            document.querySelector(`.page-description`).classList.remove('video-scene');
            video.classList.remove('video-scene');
        }        
    }

    render() {
        return (
            <div className="my-work-page page">
                <EmailHeader />
                <InternalLink page="Resume" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                <PageHeader title="My Work Showcase" />
                <p className="page-description">
                    From creating a featured client app for the 
                    &nbsp;<a className="link-in-text" href="https://www.ces.tech/" target="_blank" rel="noopener noreferrer">Consumer Electronics Show (CES)</a>&nbsp;
                    to building websites for small business owners, the work you see below has been proudly created with love. 
                    I strive to achieve the best quality, rather than working for a quick buck, and 
                    look forward to working with those who are a stickler for the same. If you would like to chat 
                    with me about an opportunity, please feel free to reach me using the contact info above.
                </p>
                <div className="work-container">
                {
                    projects.map((project, i) => {
                        return (
                            <div key={ i } 
                                id={ project.slug }
                                className={ `project-wrapper ${ i % 2 === 0 ? 'left-side' : 'right-side' } ${ this.state.selectedProject !== '' && this.state.selectedProject !== project.slug ? 'no-show' : '' }`} 
                                onClick={ () => this.setState({ selectedProject: project.slug }) }
                            >
                                <div className={ `project-image ${ this.state.selectedProject === project.slug ? 'watch-video' : '' }`} 
                                    style={{ backgroundImage: `url(${ project.image })` }}
                                >
                                    <div className="project-info">
                                        <h2 className="project-title">{ project.title }</h2>
                                        <p className="project-year">{ project.year }</p>
                                        <p className="project-description">{ project.description }</p>
                                        <p className="click-instructions">Click to watch demo &rarr;</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                    <div className="video-close" onClick={ () => this.setState({ selectedProject: '' }) }>&times;</div>
                </div>
            </div>
        );
    }
}

export default MyWork;
