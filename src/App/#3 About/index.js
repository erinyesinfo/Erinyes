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
                            <a href='https://drive.google.com/open?id=1-Zql9aChAmV5OG4SxVqrA_n4BOubjjVa' target='blank'>View CV</a>
                        </div>
                    </div>
                    <div className='about-me-more'>
                        I am a self-taught developer with 5 years of experience as a developer and love working with React and Redux.
                        <span> I am funny. I am smart. I am a hard worker.</span>
                        <br /><br />
                        I am a multi-lingual, multi-talented, able to juggle-ten-things-at-one-time, never-gets-tired, I won’t-back-down-from-a-challenge, outside of the box thinker who is ready to tackle the world.
                        <br /><br />
                        A lot of words means nothing because action speak louder than words
                    </div>
                </div>
                <Skills />
            </div>
        </Element>
    );
};

export default About;
