import React, { Component } from 'react';
import { Curious } from '@curi/react';
import __find from 'lodash/find';

import './MyWork.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';
import PageHeader from '../../components/PageHeader';
import projects from './projects';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';

class MyWork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProject: '',
            showVideo: false,
            showModal: false,
            modalVideoUrl: null
        };

        this.isVideoPlaying = false;
        this.scroll = null;
        this.browser = props.response.data.browser;
    }

    componentDidMount() {
        import('react-scroll').then((Scroll) => {
            this.scroll = Scroll.animateScroll;
        });

        setTimeout(() => {
            document.querySelector('.work-container').classList.add('loaded');
        }, 350);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedProject !== this.state.selectedProject) {
            if (this.browser.name !== 'safari' && this.browser.name !== 'edge' && this.browser.name !== 'ie') {
                if (this.state.selectedProject === '') {
                    this.unsetVideoSceneForGreatBrowsers(prevState.selectedProject);
                } else {
                    this.setVideoSceneForGreatBrowsers(this.state.selectedProject);
                }
            } else {
                this.toggleVideoModalForTerribleBrowsers(this.state.selectedProject);
            }
        }
    }

    componentWillUnmount() {
        delete this.scroll;
        delete this.isVideoPlaying;
        delete this.scroll;
        delete this.browser;
    }

    selectProject(slug) {
        //only allowing one video to be selected at a time so it's
        //safe to make selected explicit
        if (this.state.selectedProject === '') {
            this.setState({ selectedProject: slug });
        } else {
            this.setState({ selectedProject: '' });
        }
    }

    setVideoSceneForGreatBrowsers(selectedProject) {
        const video = document.querySelector(`#${ selectedProject }`);
        const offset = 125;
        const view = video.offsetTop - offset;
        
        this.scroll.scrollTo(view, {
            duration: 300,
            smooth: 'easeInOutQuad'
        });

        document.querySelector(`html`).classList.add('interactive-scene');
        document.querySelector(`.page-description`).classList.add('interactive-scene');
        document.querySelector(`#${ selectedProject } .project-image`).classList.add('watch-video');

        let otherProjects = document.querySelectorAll('.project-wrapper');
        for (let i = 0; i < otherProjects.length; i++) {
            if (otherProjects[i].id !== selectedProject) {
                otherProjects[i].classList.add('no-show');
            }
        }

        video.classList.add('interactive-scene');

        if (!this.state.showVideo) {
            //add the video
            setTimeout(() => {
                this.setState({ showVideo: true });
            }, 300);
        }
    }

    unsetVideoSceneForGreatBrowsers(selectedProject) {
        const video = document.querySelector(`#${ selectedProject }`);

        document.querySelector('html').classList.remove('interactive-scene');
        document.querySelector('.page-description').classList.remove('interactive-scene');
        document.querySelector(`#${ selectedProject } .project-image`).classList.remove('watch-video');
        video.classList.remove('interactive-scene');

        let otherProjects = document.querySelectorAll('.project-wrapper');
        for (let i = 0; i < otherProjects.length; i++) {
            if (otherProjects[i].id !== selectedProject) {
                otherProjects[i].classList.remove('no-show');
            }
        }

        if (this.state.showVideo) {
            //remove the video
            this.setState({ showVideo: false });
        }
    }

    toggleVideoModalForTerribleBrowsers(project) {
        this.setState({ 
            showModal: project !== '',
            modalVideoUrl: project !== '' ? (__find(projects, { slug: project })).video : null
        });
    }

    render() {
        return (
            <div className="my-work-page page">
                <EmailHeader />
                <InternalLink page="Resume" imageSrc="https://firebasestorage.googleapis.com/v0/b/portfolio-v7.appspot.com/o/images%2FGradient-Resume%20Icon.svg?alt=media&token=72d3d88e-a5ba-47cb-87aa-58b3b6a66b33" />
                <PageHeader title="My Work Showcase" />
                <p className="page-description">
                    From a featured client app for the 
                    &nbsp;<a className="link-in-text" href="https://www.ces.tech/" target="_blank" rel="noopener noreferrer">Consumer Electronics Show (CES)</a>&nbsp;
                    to websites for small business owners, the work below has been proudly created with love to achieve the best 
                    quality, rather than for a quick buck.
                </p>
                <div className="work-container">
                {
                    projects.map((project, i) => {
                        return (
                            <div key={ i } 
                                id={ project.slug }
                                className={ `project-wrapper ${ i % 2 === 0 ? 'left-side' : 'right-side' }`} 
                            >
                                <div className={ `project-image ${ this.browser.name !== 'safari' ? 'not-safari' : '' }` } 
                                    style={{ backgroundImage: `url(${ project.image })` }}
                                    onClick={ () => this.selectProject(project.slug) }
                                >
                                    <div className="project-info">
                                        <div className="top">
                                            <h2 className="project-title">{ project.title }</h2>
                                            <p className="project-year">{ project.year }</p>
                                        </div>
                                        <p className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                        <p className="click-instructions">Click to watch demo &rarr;</p>
                                    </div>
                                    <div className="video-close">&times;</div>
                                </div>
                                {
                                    this.state.showVideo &&
                                    <div className="video-wrapper">
                                        <ReactPlayer 
                                            playing
                                            controls
                                            url={ project.video } 
                                            width={ 1024 }
                                            height={ 576 }
                                            playbackRate={ 1.25 }
                                            onPlay={ () => { this.isVideoPlaying = true; } }
                                            onPause={ () => { this.isVideoPlaying = false; } }
                                            onEnded={ () => { this.isVideoPlaying = false; } }
                                        />
                                    </div>
                                }
                            </div>
                        )
                    })
                }
                </div>
                <Modal 
                    isOpen={ this.state.showModal } 
                    closeTimeoutMS={ 300 }
                    style={{
                        content: {
                            backgroundColor: 'rgba(10, 10, 10, 0.75)'
                        }
                    }}
                >
                    <div className="modal-spinner"></div>
                    <div className="video-wrapper">
                        <ReactPlayer 
                            playing
                            controls
                            url={ this.state.modalVideoUrl }
                            width={ 1024 }
                            height={ 576 }
                            playbackRate={ 1.25 }
                            onPlay={ () => { this.isVideoPlaying = true; } }
                            onPause={ () => { this.isVideoPlaying = false; } }
                            onEnded={ () => { this.isVideoPlaying = false; } }
                        />
                    </div>
                    <div className="video-close" onClick={ () => this.setState({ selectedProject: '' }) }>&times;</div>
                </Modal>
            </div>
        );
    }
}

export default props => (
    <Curious>
        {({ router, response, navigation }) => {
            return <MyWork response={ response } { ...props }/>
        }}
    </Curious>
);
