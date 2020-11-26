import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './index.css';

const Talent = () => {
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
        <Carousel responsive={responsive} infinite={true} draggable={false}
        arrows={true} showDots={true} dotListClass="custom-dot-list-style">
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
        </Carousel>
    );
};

export default Talent;
