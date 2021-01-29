import React from 'react';
import { Element } from 'react-scroll';
import Skills from './Talent';
import './index.css';

const About = () => {
    return (
        <Element name="about" className="element">
            <div className='about'>
                <div className='about-title'>About me</div>
                <div className='about-container'>
                    <div className='about-whoAmI'>Who Am I?</div>
                    <div className='about-me'>
                        Hi I'm Hicham design lover based in Algeria. <span>I'm available for freelance work and projects</span>. I specialise in front-end design.
                        <br />
                        <div className='about-contact-btn'>
                            <a rel="noopener noreferrer" href='https://drive.google.com/file/d/1BDH08FPcNDXUkOQmMflAP2q0HxaQCunU/view?usp=sharing' target='_blank'>View CV</a>
                        </div>
                    </div>
                    <div className='about-me-more'>
                        <span> I am funny. I am smart. I am a hard worker.</span>
                        <br /><br />
                        Creative and self-taught with over 5 years of front-end experience and passion for responsive website design and a firm believer in the mobile-first approach. And I love working with React and Redux.
                        <br /><br />
                        Writer, and teacher, and publisher that has been curated by <a rel="noopener noreferrer" href="https://erinyesinfo.medium.com" target='_blank'>Medium</a> many times.
                        <br /><br />
                        The more you learn, the stronger you will be.
                    </div>
                </div>
                <Skills />
            </div>
        </Element>
    );
};

export default About;
