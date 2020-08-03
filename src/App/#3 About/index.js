import React from 'react';
import { Element } from 'react-scroll';
import Skills from './Helper';
import './index.css';

const About = () => {
    return (
        <Element name="about" className="element">
            <div className='about'>
                <div className='about-title'>About us</div>
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
                        I am funny. i am smart. i am a hard worker.
                        <br /><br />
                        I am a multi-lingual, multi-talented, able to juggle-ten-things-at-one-time, never-gets-tired, I won’t-back-down-from-a-challenge, outside of the box thinker who is ready to tackle the world.
                        <br /><br />
                        A lot of words means nothing because action speak louder than words
                        <br />
                        If you want, i can solve your problem
                    </div>
                </div>
                <div className='about-container-2'>
                    {/* 1 */}
                    <Skills number={1}
                        title={'Initiative'}
                        description={'I take responsibility for my own work and don’t wait to be told what to do. I look for ways to improve things, wherever i work.'}
                    />
                    {/* 2 */}
                    <Skills number={2}
                        title={'Planning'}
                        description={'I\'am good at deciding which tasks are a priority. My plans make sure work gets done, and am good at avoiding distractions.'}
                    />
                    {/* 3 */}
                    <Skills number={3}
                        title={'Teamwork'}
                        description={'I\'am great at co-operating with others. I understand how you can contribute to your team, and support other people.'}
                    />
                    {/* 4 */}
                    <Skills number={4}
                        title={'Communication'}
                        description={'I explain your ideas and opinions clearly. I\'am good at listening, presenting or being able to persuade others.'}
                    />
                    {/* 5 */}
                    <Skills number={5}
                        title={'Problem-solving'}
                        description={'I can assess a situation and understand what’s causing issues, then develop a solution.'}
                    />
                </div>
            </div>
        </Element>
    );
};

export default About;
