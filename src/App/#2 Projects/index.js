import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from './Slider';
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
import { Globe, Github } from './Icons';

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches992: window.matchMedia("(max-width: 992px)").matches
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
    handler992 = () => this.setState({ matches992: window.innerWidth <= 992 });
    render() {
        const { matches992 } = this.state;
        let miktaInlineStyle = { height: '460px', width: '450px' };
        let bubblyfastInlineStyle = { height: '300px', width: 'unset' };
        let hoomerInlineStyle = { height: '300px', width: 'unset' };
        let taskiInlineStyle = { height: 'unset', width: '400px' };
        let inlineStyling = {};
        if (matches992) { inlineStyling = { height: 'unset', width: '100%' }; }
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };
        return (
            <Element name="projects" className="element">
                <div className='projects-helper'>
                    <div className='projects'>
                        <div className='projects-title'>Completed</div>
                        <div className='projects-container'>
                            <div className='projects-title-2'>Projects</div>
                            <div className='projects-innerContainer'>
                                {/* title */}
                                <div className='projects-title-3'>
                                    Recent Completed Projects
                                </div>
                                {/* border projects */}
                                <Carousel responsive={responsive} infinite={true}
                                arrows={false} renderButtonGroupOutside={true} draggable={false}
                                customButtonGroup={<ButtonGroup />}>
                                    <div className='projects-completed'>
                                        <div className='projects-image'>
                                            <a className="projects-image-slides" rel="noopener noreferrer"
                                            href="https://mikta-v0.netlify.app" target='_blank'>
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
                                                <a rel="noopener noreferrer" href="https://mikta-v0.netlify.app" target='_blank'>
                                                    <Globe />
                                                </a>
                                            </div>                              
                                        </div>
                                        <div className='projects-info'>
                                            <div className='title'>Mikta</div>
                                            <div className='definition'>
                                                Mikta is social app with the ability to let you read news and search images and post your story and your images, plus you can like photos, share posts, and collect images.
                                            </div>
                                            <div className='problems'>
                                                <div className='problems-title'>Problems i faced</div>
                                                <ul>
                                                    <li>connect to hackernews api</li>
                                                    <li>comment to each post</li>
                                                    <li>ability to collect photos</li>
                                                </ul>
                                            </div>
                                            <div className='howISolvedThoseProblems'>
                                                <div className='howISolvedThoseProblems-title'>How I Solved Those Problems</div>
                                                <ul>
                                                    <li>i did some research and found tricky ways to make it work</li>
                                                    <li>it toke me sometime to find out that i needed to make a condition if statement with the correct id</li>
                                                    <li>well it is long and complicated, i got it with a nasty long conditions if, else statement</li>
                                                </ul>
                                            </div>
                                            <div className='thirdPartyLibrary'>
                                                <div className='thirdPartyLibrary-title'>Third Party Library</div>
                                                <ul>
                                                    <li>uuid</li>
                                                    <li>axios</li>
                                                    <li>LazyImage(react-image)</li>
                                                    <li>react-images-uploading</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='projects-completed'>
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
                                            </div>                              
                                        </div>
                                        <div className='projects-info'>
                                            <div className='title'>bubblyfast</div>
                                            <div className='definition'>
                                                bubblyfast is a fun and colorful arcade puzzle game, Don't miss out on this fun relaxing game!
                                            </div>
                                            <div className='thirdPartyLibrary hoomer'>
                                                <div className='thirdPartyLibrary-title'>Third Party Library</div>
                                                <ul>
                                                    <li>uuid</li>
                                                    <li>axios</li>
                                                    <li>sanitize-html</li>
                                                    <li>universal-cookie</li>
                                                    <li>redux</li>
                                                    <li>react-redux</li>
                                                    <li>redux-form, redux-thunk</li>
                                                    <li>delay</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='projects-completed'>
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
                                            <div className='title'>Hoomer</div>
                                            <div className='definition'>
                                                Hoomer is a place to read articles on the Internet. Hoomer is a blogging platform, like Wordpress or Blogger. Hoomer is chaotically, arrhythmically produced by a combination of top-notch editors.
                                            </div>
                                            <div className='thirdPartyLibrary hoomer'>
                                                <div className='thirdPartyLibrary-title'>Third Party Library</div>
                                                <ul>
                                                    <li>uuid</li>
                                                    <li>react-router-dom</li>
                                                    <li>react-ckeditor-component</li>
                                                    <li>sanitize-html</li>
                                                    <li>react-html-parser</li>
                                                    <li>html-word-count, react-scroll</li>
                                                    <li>react-images-uploading</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
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
                                            <div className='title'>Taski</div>
                                            <div className='definition'>
                                                Taski is todo app with the ability to add, update, read, toggle(complete), delete, plus restore deleted todos. And bonus the ability to change the background color.
                                            </div>
                                            <div className='problems'>
                                                <div className='problems-title'>Problems i faced</div>
                                                <ul>
                                                    <li>update todo</li>
                                                    <li>add pop up message</li>
                                                    <li>move every completed todo to last array index</li>
                                                    <li>restore todo, todos, plus handle duplicate, completed todos</li>
                                                </ul>
                                            </div>
                                            <div className='howISolvedThoseProblems'>
                                                <div className='howISolvedThoseProblems-title'>How I Solved Those Problems</div>
                                                <ul>
                                                    <li>i use todo-id to get todo and the new todo to replace old todo based on id</li>
                                                    <li>using setTimeout</li>
                                                    <li>i got the answer from stackoverflow</li>
                                                    <li>i have learned a lot about arrays</li>
                                                </ul>
                                            </div>
                                            <div className='thirdPartyLibrary'>
                                                <div className='thirdPartyLibrary-title'>Third Party Library</div>
                                                <ul>
                                                    <li>uuid</li>
                                                    <li>Css transition(react-transition-group)</li>
                                                </ul>
                                            </div>
                                    </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    };
};

export default Projects;
