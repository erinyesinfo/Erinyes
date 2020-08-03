import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Logo from './logo.png';/* Logo */
import Logo_lower from './logo-lower.jpg';/* Logo */
import './index.css';

import { Menu } from './Icons';// menu icon

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        matches576: window.matchMedia("(max-width: 576px)").matches,
        showMenu: false
      };
    };
    UNSAFE_componentWillMount() {
      window.addEventListener('resize', this.handler576);
      window.addEventListener('load', this.handler576);
      window.addEventListener('scroll', this.handler576);
    };
    componentWillUnmount() {
      window.removeEventListener('resize', this.handler576);
      window.removeEventListener('load', this.handler576);
      window.removeEventListener('scroll', this.handler576);
    };
    handler576 = () => this.setState({ matches576: window.innerWidth <= 576 });
    handleShowMenu = () => this.setState(st => ({ showMenu: !st.showMenu }));
    render() {
        return (
            <div className={this.state.matches576 ? 'headerWrapper' : 'headerHelper'}>
                <div className='header-container'>
                    <div className='logo-menu'>
                        <Link activeClass="active" className="portfolio-scroll"
                        to="portfolio" spy={true} smooth={true}
                        duration={500}>
                            <div className='header-logo'>
                                <LazyLoad image={{
                                    src: Logo,
                                    alt: 'erinyes',
                                    placeholder: Logo_lower,
                                    draggable: 'false'
                                }}/>
                            </div>
                        </Link>
                        {this.state.matches576 ?
                            <button onClick={this.handleShowMenu}
                                type='button' className='nav-menu'
                            >
                                <Menu />
                            </button>
                        :null}
                    </div>
                    {!this.state.matches576 || this.state.showMenu ? (
                        <div className='header-navs'>
                            <div className='header-navs-portfolio'>
                                <Link activeClass="active" className="portfolio-scroll"
                                    to="portfolio" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Portfolio
                                </Link>
                            </div>
                            <div className='header-navs-projects'>
                                <Link activeClass="active" className="projects-scroll"
                                    to="projects" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                            </div>
                            <div className='header-navs-about'>
                                <Link activeClass="active" className="about-scroll"
                                    to="about" spy={true} smooth={true}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </div>
                            <div className='header-navs-skills'>
                                <Link activeClass="active" className="skills-scroll"
                                    to="skills" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                            </div>
                            
                            <div className='header-navs-contact'>
                                <Link activeClass="active" className="contact-scroll"
                                    to="contact" spy={true} smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    ):null}
                </div>
            </div>
        );
    };
};

export default Header;
