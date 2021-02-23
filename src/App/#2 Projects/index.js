import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Slider from "react-slick";
import './index.css';

/*
 * react with redux project images
*/
import Mikta from './Images/Mikta.jpg';// social app
import Bubblyfast from './Images/Bubbly.png';// game app
/*
 * react project images
*/
import Hoomer from './Images/Hoomer.png';// editor app
import Taski from './Images/Taski.png';// todo app
import BG_preview from './Images/BG';// BG

// icons
import { LeftCurved, RightCurved, Globe, Github, Android } from './Icons';

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches1100: window.matchMedia("(max-width: 1100px)").matches,
            matches992: window.matchMedia("(max-width: 992px)").matches,
            mouseInAnimate: ''
        };
    };
    UNSAFE_componentWillMount() {
        window.addEventListener('resize', this.handler992);
        window.addEventListener('load', this.handler992);
        window.addEventListener('scroll', this.handler992);
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.handler992);
        window.removeEventListener('load', this.handler992);
        window.removeEventListener('scroll', this.handler992);
    };
    handler992 = () => this.setState({ matches1100: window.innerWidth <= 1100, matches992: window.innerWidth <= 992 });
    handleMouseIn = name => this.setState({ mouseInAnimate: name })
    render() {
        const { mouseInAnimate, matches1100, matches992 } = this.state;
        let miktaInlineStyle = { height: '460px', width: '450px' };
        let bubblyfastInlineStyle = { height: matches1100 ? 'unset':'300px', width: matches1100? '100%':'unset' };
        let hoomerInlineStyle = { height: matches1100 ? 'unset':'300px', width: matches1100 ? '100%':'unset' };
        let taskiInlineStyle = { height: 'unset', width: '400px' };
        let inlineStyling = {};
        if (matches992) { inlineStyling = { height: 'unset', width: '100%' }; }
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true, // help remove other slider height
            nextArrow: <RightCurved />,
            prevArrow: <LeftCurved />
        };
        return (
            <Element name="projects" className="element">
                <div className='projects-helper'>
                    <div className='projects'>
                        <div className='projects-title' onMouseEnter={() => this.handleMouseIn('completed')} onMouseLeave={() => this.handleMouseIn('')}>
                            <div className={mouseInAnimate === 'completed' ? 'animate_infinity_completed_mouseIn':''}>
                                Completed
                            </div>
                        </div>
                        <div className='projects-container'>
                            <div className='projects-title-2' onMouseEnter={() => this.handleMouseIn('projects')} onMouseLeave={() => this.handleMouseIn('')}>
                                <div className={mouseInAnimate === 'projects' ? 'animate_infinity_projects_mouseIn':''}>
                                    Projects
                                </div>
                            </div>
                            <div className='projects-innerContainer'>
                                {/* title */}
                                <div className='projects-title-3'>Recent Completed Projects</div>
                                {/* border projects */}
                                <Slider {...settings}>
                                    {/* 1 */}
                                    <div>
                                        <div className='projects-completed'>
                                            <div className='projects-image'>
                                                <a className="projects-image-slides" rel="noopener noreferrer"
                                                href="https://mikta.netlify.app" target='_blank'>
                                                    <LazyLoad image={{
                                                        className: 'mikta',
                                                        src: Mikta,
                                                        alt: 'Mikta',
                                                        placeholder: BG_preview,
                                                        style: matches992 ? inlineStyling:miktaInlineStyle
                                                    }}/>
                                                </a>
                                                <div className='socialMedia'>
                                                    <a className='a-web' rel="noopener noreferrer" href="https://github.com/erinyesinfo/Mikta" target='_blank'>
                                                        <Github />
                                                    </a>
                                                    <a rel="noopener noreferrer" href="https://mikta.netlify.app" target='_blank'>
                                                        <Globe />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='projects-info'>
                                                <div className='title' onMouseEnter={() => this.handleMouseIn('mikta')} onMouseLeave={() => this.handleMouseIn('')}>
                                                    <div className={mouseInAnimate === 'mikta' ? 'animate_infinity_mikta_mouseIn':''}>
                                                        Mikta
                                                    </div>
                                                </div>
                                                <div className='definition'>
                                                    Mikta is a social app with more than <strong className="line-of-code">20k ReactJS line of code</strong> that let you create a user that has the ability to let you read the news, and search images, and post your story and your images, plus you can like photos, share posts, collect images, download images.
                                                </div>
                                                <div className='created'>
                                                    <div className='created-title'>Created</div>
                                                    <div>16 December 2019</div>
                                                </div>
                                                <div className='update'>
                                                    <div className='update-title'>Last Update</div>
                                                    <div>8 February 2021</div>
                                                </div>
                                                <div className='technologies'>
                                                    <div className='technologies-title'>Technologies</div>
                                                    <div className='technology'>react</div>
                                                    <div className='technology'>react-scroll</div>
                                                    <div className='technology'>react-image</div>
                                                    <div className='technology'>react-images-uploading</div>
                                                    <div className='technology'>react-redux</div>
                                                    <div className='technology'>redux</div>
                                                    <div className='technology'>redux-form</div>
                                                    <div className='technology'>redux-thunk</div>
                                                    <div className='technology'>axios</div>
                                                    <div className='technology'>uuid</div>
                                                    <div className='technology'>zxcvbn</div>
                                                    <div className='technology'>universal-cookie</div>
                                                    <div className='technology'>node</div>
                                                    <div className='technology'>nodemon</div>
                                                    <div className='technology'>cors</div>
                                                    <div className='technology'>helmet</div>
                                                    <div className='technology'>express</div>
                                                    <div className='technology'>express-session</div>
                                                    <div className='technology'>ejs</div>
                                                    <div className='technology'>dotenv</div>
                                                    <div className='technology'>bcryptjs</div>
                                                    <div className='technology'>sanitize-html</div>
                                                    <div className='technology'>validator</div>
                                                    <div className='technology'>connect-mongo</div>
                                                    <div className='technology'>mongodb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 2 */}
                                    <div>
                                        <div className={matches1100 ? 'projects-completed project-responsive':'projects-completed'}>
                                            <div className='projects-image'>
                                                <a className="projects-image-slides" rel="noopener noreferrer"
                                                href="https://bubblyfast.netlify.app" target='_blank'>
                                                    <LazyLoad image={{
                                                        className: 'Bubblyfast',
                                                        src: Bubblyfast,
                                                        alt: 'Bubblyfast',
                                                        placeholder: BG_preview,
                                                        style: matches992 ? inlineStyling:bubblyfastInlineStyle
                                                    }}/>
                                                </a>
                                                <div className='socialMedia'>
                                                    <a className='a-web' rel="noopener noreferrer" href="https://github.com/erinyesinfo/Bubblyfast" target='_blank'>
                                                        <Github />
                                                    </a>
                                                    <a rel="noopener noreferrer" href="https://bubblyfast.netlify.app" target='_blank'>
                                                        <Globe />
                                                    </a>
                                                    <a className='a-android' rel="noopener noreferrer" href="https://expo.io/@erinyes/bubblyfast" target='_blank'>
                                                        <Android />
                                                    </a>
                                                </div>                              
                                            </div>
                                            <div className='projects-info'>
                                                <div className='title' onMouseEnter={() => this.handleMouseIn('bubblyfast')} onMouseLeave={() => this.handleMouseIn('')}>
                                                    <div className={mouseInAnimate === 'bubblyfast' ? 'animate_infinity_bubblyfast_mouseIn':''}>
                                                        bubblyfast
                                                    </div>
                                                </div>
                                                <div className='definition'>
                                                    bubblyfast is a fun and colorful arcade puzzle game, Don't miss out on this fun relaxing game!
                                                </div>
                                                <div className='created'>
                                                    <div className='created-title'>Created</div>
                                                    <div>23 September 2019</div>
                                                </div>
                                                <div className='update'>
                                                    <div className='update-title'>Last Update</div>
                                                    <div>15 February 2021</div>
                                                </div>
                                                <div className='technologies hoomer'>
                                                    <div className='technologies-title'>Technologies</div>
                                                    <div className='technology'>react</div>
                                                    <div className='technology'>react-lazy-load-image-component</div>
                                                    <div className='technology'>react-redux</div>
                                                    <div className='technology'>redux</div>
                                                    <div className='technology'>redux-thunk</div>
                                                    <div className='technology'>axios</div>
                                                    <div className='technology'>uuid</div>
                                                    <div className='technology'>universal-cookie</div>
                                                    <div className='technology'>node</div>
                                                    <div className='technology'>nodemon</div>
                                                    <div className='technology'>cors</div>
                                                    <div className='technology'>helmet</div>
                                                    <div className='technology'>express</div>
                                                    <div className='technology'>express-session</div>
                                                    <div className='technology'>ejs</div>
                                                    <div className='technology'>dotenv</div>
                                                    <div className='technology'>bcryptjs</div>
                                                    <div className='technology'>sanitize-html</div>
                                                    <div className='technology'>validator</div>
                                                    <div className='technology'>connect-mongo</div>
                                                    <div className='technology'>mongodb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3 */}
                                    <div>
                                        <div className={matches1100 ? 'projects-completed project-responsive':'projects-completed'}>
                                            <div className='projects-image'>
                                                <a className="projects-image-slides" rel="noopener noreferrer"
                                                href="https://hoomer.netlify.app" target='_blank'>
                                                    <LazyLoad image={{
                                                        className: 'hoomer',
                                                        src: Hoomer,
                                                        alt: 'Hoomer',
                                                        placeholder: BG_preview,
                                                        style: matches992 ? inlineStyling:hoomerInlineStyle
                                                    }}/>
                                                </a>
                                                <div className='socialMedia'>
                                                    <a className='a-web' rel="noopener noreferrer" href="https://github.com/erinyesinfo/Hoomer" target='_blank'>
                                                        <Github />
                                                    </a>
                                                    <a rel="noopener noreferrer" href="https://hoomer.netlify.app" target='_blank'>
                                                        <Globe />
                                                    </a>
                                                </div>                              
                                            </div>
                                            <div className='projects-info'>
                                                <div className='title' onMouseEnter={() => this.handleMouseIn('hoomer')} onMouseLeave={() => this.handleMouseIn('')}>
                                                    <div className={mouseInAnimate === 'hoomer' ? 'animate_infinity_hoomer_mouseIn':''}>
                                                        Hoomer
                                                    </div>
                                                </div>
                                                <div className='definition'>
                                                    Hoomer is a place to read articles on the Internet. Hoomer is a blogging platform, like Wordpress or Blogger. Hoomer is chaotically, arrhythmically produced by a combination of top-notch editors.
                                                </div>
                                                <div className='created'>
                                                    <div className='created-title'>Created</div>
                                                    <div>5 April 2020</div>
                                                </div>
                                                <div className='update'>
                                                    <div className='update-title'>Last Update</div>
                                                    <div>28 July 2020</div>
                                                </div>
                                                <div className='technologies hoomer'>
                                                    <div className='technologies-title'>Technologies</div>
                                                    <div className='technology'>uuid</div>
                                                    <div className='technology'>react</div>
                                                    <div className='technology'>react-scroll</div>
                                                    <div className='technology'>react-html-parser</div>
                                                    <div className='technology'>react-ckeditor-component</div>
                                                    <div className='technology'>react-images-uploading</div>
                                                    <div className='technology'>html-word-count</div>
                                                    <div className='technology'>sanitize-html</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 4 */}
                                    <div>
                                        <div className='projects-completed'>
                                            <div className='projects-image'>
                                                <a className="projects-image-slides" rel="noopener noreferrer"
                                                href="https://taski.netlify.app" target='_blank'>
                                                    <LazyLoad image={{
                                                        className: 'taski',
                                                        src: Taski,
                                                        alt: 'Taski',
                                                        placeholder: BG_preview,
                                                        style: matches992 ? inlineStyling:taskiInlineStyle
                                                    }}/>
                                                </a>
                                                <div className='socialMedia'>
                                                    <a className='a-web' rel="noopener noreferrer" href="https://github.com/erinyesinfo/Taski" target='_blank'>
                                                        <Github />
                                                    </a>
                                                    <a rel="noopener noreferrer" href="https://taski.netlify.app" target='_blank'>
                                                        <Globe />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='projects-info'>
                                                <div className='title' onMouseEnter={() => this.handleMouseIn('taski')} onMouseLeave={() => this.handleMouseIn('')}>
                                                    <div className={mouseInAnimate === 'taski' ? 'animate_infinity_taski_mouseIn':''}>
                                                        Taski
                                                    </div>
                                                </div>
                                                <div className='definition'>
                                                    Taski is todo app with the ability to add, update, read, toggle(complete), delete, plus restore deleted todos. And bonus the ability to change the background color.
                                                </div>
                                                <div className='created'>
                                                    <div className='created-title'>Created</div>
                                                    <div>23 March 2019</div>
                                                </div>
                                                <div className='update'>
                                                    <div className='update-title'>Last Update</div>
                                                    <div>18 February 2020</div>
                                                </div>
                                                <div className='technologies'>
                                                    <div className='technologies-title'>Technologies</div>
                                                    <div className='technology'>react</div>
                                                    <div className='technology'>react-transition-group</div>
                                                    <div className='technology'>semantic-ui-css</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    };
};

export default Projects;
