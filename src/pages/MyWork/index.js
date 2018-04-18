import React, { Component } from 'react';

import './MyWork.css';

import EmailHeader from '../../components/EmailHeader';
import InternalLink from '../../components/InternalLink';
import PageHeader from '../../components/PageHeader';
import projects from './projects';
import ReactPlayer from 'react-player';

class MyWork extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProject: '',
            showVideo: false
        };

        this.isVideoPlaying = false;
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

            document.querySelector(`html`).classList.add('interactive-scene');
            document.querySelector(`.page-description`).classList.add('interactive-scene');
            video.classList.add('interactive-scene');

            if (!this.state.showVideo) {
                //add the video
                setTimeout(() => {
                    this.setState({ showVideo: true });
                }, 300);
            }
        }
    }

    unsetVideoScene() {
        if (this.state.selectedProject !== '') {
            const video = document.querySelector(`#${ this.state.selectedProject }`);
    
            document.querySelector('html').classList.remove('interactive-scene');
            document.querySelector('.page-description').classList.remove('interactive-scene');
            video.classList.remove('interactive-scene');

            if (this.state.showVideo) {
                //remove the video
                this.setState({ showVideo: false });
            }
        }        
    }

    selectProject(slug) {
        //only allowing one video to be selected at a time so it's
        //safe to make selected explicit
        if (this.state.selectedProject === '') {
            this.setState({ selectedProject: slug })
        } else {
            this.setState({ selectedProject: '' })
        }
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
                                className={ `project-wrapper ${ i % 2 === 0 ? 'left-side' : 'right-side' } ${ this.state.selectedProject !== '' && this.state.selectedProject !== project.slug ? 'no-show' : '' }`} 
                            >
                                <div className={ `project-image ${ this.state.selectedProject === project.slug ? 'watch-video' : '' }`} 
                                    style={{ backgroundImage: `url(${ project.image })` }}
                                    onClick={ () => this.selectProject(project.slug) }
                                >
                                    <div className="project-info">
                                        <h2 className="project-title">{ project.title }</h2>
                                        <p className="project-year">{ project.year }</p>
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
                                            width={ 1056 }
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
            </div>
        );
    }
}

export default MyWork;
