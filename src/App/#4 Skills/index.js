import React from 'react';
import { Element } from 'react-scroll';
import './index.css';

// icons
import { Html5, Css3, Bootstrap, JavaScript, JQuery, Reactjs, Reduxjs, Photoshope, Illustration, AfterEffects, Nodejs, MySQL, MongoDB, Git, Agile, Nextjs, Sass, CLanguage, Python, PHP } from './Icons';

const Skills = () => {
    const Theme = localStorage.getItem('theme') || null;
    return (
        <Element name="skills" className="element">
            <div className='skills'>
                <div className='skills-title'>My Specialty</div>
                <div className='skills-container'>
                    <div className='skills-whoAmI'>My Skills</div>
                    <div className={Theme ? 'skills-me-white':'skills-me'}>
                        More than 30 certificates in Udemy moreover my skills rely on front-end tasks like React.js and Redux.js, and more as you can see :)
                    </div>
                    <div className='skills-me-more'>
                        <div className='skills-strongest'>
                            <div className='title'>Strongest</div>
                            <div className='skills-language'>
                                <Html5 /> Html5
                                <hr className='skills-hr hr-html5' />
                            </div>
                            <div className='skills-language'>
                                <Css3 /> Css3
                                <hr className='skills-hr hr-css3' />
                            </div>
                            <div className='skills-language'>
                                <Bootstrap /> Bootstrap
                                <hr className='skills-hr hr-bootstrap' />
                            </div>
                            <div className='skills-language'>
                                <JavaScript /> Javascript
                                <hr className='skills-hr hr-javascript' />
                            </div>
                            <div className='skills-language'>
                                <JQuery /> jQuery
                                <hr className='skills-hr hr-jquery' />
                            </div>
                            <div className='skills-language'>
                                <Reactjs />  React
                                <hr className='skills-hr hr-react' />
                            </div>
                            <div className='skills-language'>
                                <Reduxjs /> Redux
                                <hr className='skills-hr hr-redux' />
                            </div>
                            <div className='skills-language'>
                                <Photoshope /> Adobe Photoshop
                                <hr className='skills-hr hr-photoshop' />
                            </div>
                            <div className='skills-language'>
                                <Illustration /> Adobe Illustration
                                <hr className='skills-hr hr-illustration' />
                            </div>
                            <div className='skills-language'>
                                <AfterEffects /> Adobe After Effects
                                <hr className='skills-hr hr-afterEffects' />
                            </div>
                        </div>
                        {/* good but lack of experiance */}
                        <div className='skills-good'>
                            <div className='title'>Good but lack of experiance</div>
                            <div className='skills-language'>
                                <Nodejs /> Node, Express
                                <hr className='skills-hr hr-node' />
                            </div>
                            <div className='skills-language'>
                                <MongoDB /> MongoDB
                                <hr className='skills-hr hr-mysql' />
                            </div>
                            <div className='skills-language'>
                                <MySQL /> MySQL
                                <hr className='skills-hr hr-mysql' />
                            </div>
                            <div className='skills-language'>
                                <Git /> Git
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className='skills-language'>
                                <Agile /> Agile
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className='skills-language'>
                                <Nextjs /> Nextjs
                                <hr className='skills-hr hr-git' />
                            </div>
                            <div className='skills-language'>
                                <Sass /> Sass
                                <hr className='skills-hr hr-git' />
                            </div>
                        </div>
                        {/* basics */}
                        <div className='skills-basics'>
                            <div className='title'>Only basics</div>
                            <div className='skills-language'>
                                <CLanguage /> C language
                                <hr className='skills-hr hr-c' />
                            </div>
                            <div className='skills-language'>
                                <PHP /> PHP
                                <hr className='skills-hr hr-php' />
                            </div>
                            <div className='skills-language'>
                                <Python /> Python
                                <hr className='skills-hr hr-python' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Skills;
