import React from 'react';
import { Element } from 'react-scroll';
import './index.css';

// icon
import { Github, Shout } from './Icons';

const Contact = () => {
    return (
        <Element name="contact" className="element">
            <div className='contact-helper'>
                <div className='contact'>
                    <div className='contact-title'>Get in Touch</div>
                    <div className='contact-container'>
                        <div className='contact-page'>Contact</div>
                        <div className='contact-innerContainer'>
                            <div className='contact-info'>
                                <h1 className='contact-us-h1'>
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
                                    <div className='contact-us-more-feedback'>
                                        Feedback
                                    </div>
                                    <div className='contact-us-more-feedback-description'>
                                        We're keen to hear your feedback about erinyes,
                                        <br />
                                        so that we can keep improving the service.
                                    </div>
                                    <div className='contact-us-more-busniss'>
                                        new business
                                    </div>
                                    <div className='contact-us-more-busniss-description'>
                                        Send us a brief description of your idea an RFP to:
                                    </div>
                                    <div className='contact-email'>
                                        <a className='contact-us-more-email'
                                        href='mailto:erinyesinfo@gmail.com?subject=Your subject&body=Your Message'>
                                            erinyesinfo@gmail.com
                                        </a>
                                    </div>
                                    <br />
                                    <div className='contact-us-more-git'>
                                        <a href='https://github.com/erinyesinfo' target='blanc'>
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='contact-image'>
                                <Shout />
                            </div>
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
