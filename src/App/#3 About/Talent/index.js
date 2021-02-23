import React from 'react';
import Slider from "react-slick";
import './index.css';

import { Left, Right } from './Icon';

const Talent = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Left />,
        prevArrow: <Right />
    };
    return (
        <Slider {...settings}>
            {/* 1 */}
            <div>
                <div className="talent">
                    <div className="talent-background-img">
                        <div className="talent-box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="talent-content">
                                <h2>Initiative</h2>
                                <p>I take responsibility for my own work and don’t wait to be told what to do. I look for ways to improve things, wherever i work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div>
                <div className="talent">
                    <div className="talent-background-img">
                        <div className="talent-box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="talent-content">
                                <h2>Planning</h2>
                                <p>I'am good at deciding which tasks are a priority. My plans make sure work gets done, and am good at avoiding distractions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div>
                <div className="talent">
                    <div className="talent-background-img">
                        <div className="talent-box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="talent-content">
                                <h2>Teamwork</h2>
                                <p>I'am great at co-operating with others. I understand how you can contribute to your team, and support other people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4 */}
            <div>
                <div className="talent">
                    <div className="talent-background-img">
                        <div className="talent-box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="talent-content">
                                <h2>Communication</h2>
                                <p>I explain your ideas and opinions clearly. I\'am good at listening, presenting or being able to persuade others.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5 */}
            <div>
                <div className="talent">
                    <div className="talent-background-img">
                        <div className="talent-box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="talent-content">
                                <h2>Problem-solving</h2>
                                <p>I can assess a situation and understand what’s causing issues, then develop a solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Talent;
