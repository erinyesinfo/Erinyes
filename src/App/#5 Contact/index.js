import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './index.css';

// icon
import { Github, Linkedin, Codepen, Medium, Shout } from './Icons';

const Theme = localStorage.getItem('theme') || null;

const Contact = () => {
    const [ mouseInAnimate, setMouseInAnimate ] = useState('');
    return (
        <Element name="contact" className="element">
            <div className='contact-helper'>
                <div className='contact'>
                    <div className='contact-title' onMouseEnter={() => setMouseInAnimate('getInTouch')} onMouseLeave={() => setMouseInAnimate('')}>
                        <div className={mouseInAnimate === 'getInTouch' ? 'animate_infinity_getInTouch_mouseIn':''}>
                            Get in Touch
                        </div>
                    </div>
                    <div className='contact-container'>
                        <div className='contact-page' onMouseEnter={() => setMouseInAnimate('contact')} onMouseLeave={() => setMouseInAnimate('')}>
                            <div className={mouseInAnimate === 'contact' ? 'animate_infinity_contact_mouseIn':''}>
                                Contact
                            </div>
                        </div>
                        <div className='contact-innerContainer'>
                            <div className='contact-info'>
                                <h1 className={mouseInAnimate === 'shout' ? 'contact-us-h1 animate_infinity_shout_mouseIn':'contact-us-h1'} onMouseEnter={() => setMouseInAnimate('shout')} onMouseLeave={() => setMouseInAnimate('')}>
                                    Give us a shout,
                                    <br />
                                    we'll make you a beliver.  
                                </h1>
                                <div className='contact-us-more'>
                                    <div className='contact-us-more-reach'>
                                        Want to get in touch? We'd love to hear from you.
                                        <br />
                                        here's how you can reach us...
                                    </div>
                                    <div className='contact-us-more-feedback' onMouseEnter={() => setMouseInAnimate('feedback')} onMouseLeave={() => setMouseInAnimate('')}>
                                        <div className={mouseInAnimate === 'feedback' ? 'animate_infinity_feedback_mouseIn':''}>
                                            Feedback
                                        </div>
                                    </div>
                                    <div className='contact-us-more-feedback-description'>
                                        We're keen to hear your feedback about erinyes,
                                        <br />
                                        so that we can keep improving the service.
                                    </div>
                                    <div className='contact-us-more-busniss' onMouseEnter={() => setMouseInAnimate('business')} onMouseLeave={() => setMouseInAnimate('')}>
                                        <div className={mouseInAnimate === 'business' ? 'animate_infinity_business_mouseIn':''}>
                                            new business
                                        </div>
                                    </div>
                                    <div className='contact-us-more-busniss-description'>
                                        Send us a brief description of your idea an RFP to:
                                    </div>
                                    <div className='contact-email'>
                                        <a className={Theme ? (mouseInAnimate === 'email' ? 'contact-us-more-email theme animate_infinity_email_mouseIn':'contact-us-more-email theme'):(mouseInAnimate === 'email' ? 'contact-us-more-email animate_infinity_email_mouseIn':'contact-us-more-email')}
                                        href='mailto:erinyesinfo@gmail.com?subject=Your subject&body=Your Message'
                                        onMouseEnter={() => setMouseInAnimate('email')}
                                        onMouseLeave={() => setMouseInAnimate('')}>
                                            erinyesinfo@gmail.com
                                        </a>
                                    </div>
                                    <br />
                                    <div className='contact-us-more-git'>
                                        <a rel="noopener noreferrer" href='https://github.com/erinyesinfo' target='_blank'>
                                            <Github />
                                        </a>
                                        <a rel="noopener noreferrer" href='https://www.linkedin.com/in/erin-yes' target='_blank'>
                                            <Linkedin />
                                        </a>
                                        <a rel="noopener noreferrer" href='https://codepen.io/jigsaw487' target='_blank'>
                                            <Codepen />
                                        </a>
                                        <a rel="noopener noreferrer" href='https://erinyesinfo.medium.com' target='_blank'>
                                            <Medium />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <Shout />
                        </div>
                        <div>
                            <h4>OR</h4>
                            <div className='netlify-contact'>Contact us here via netlify</div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
