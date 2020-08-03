import React from 'react';
import { Link, Element } from 'react-scroll';
import jeremyBeadle from './jeremy-beadle-129624-unsplash.jpg';
import jeremyBeadle_lower from './jeremy-beadle-129624-unsplash-lower.jpg';
import './index.css';

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

const Portfolio = () => {
    const inlineStyling = { height: '100%', width: '100%' };
    return (
        <Element name="portfolio" className="element">
            <div className='portfolio'>
                <LazyLoad image={{
                    className: 'portfolio-img',
                    src: jeremyBeadle,
                    alt: 'jeremy-beadle-129624',
                    placeholder: jeremyBeadle_lower,
                    style: inlineStyling
                }}/>
                <div className='portfolio-container'>
                    <h1 className='portfolio-hi'>Hi!</h1>
                    <h1 className='portfolio-im'>I'm Hicham</h1>
                    <div className='portfolio-description'>
                        Developer who can build anything involve front-end
                    </div>
                    <Link activeClass="active" className="about-scroll"
                        to="about" spy={true} smooth={true}
                        duration={500}
                    >
                        <div className='portfolio-more'>
                            More about me
                        </div>
                    </Link>
                </div>
            </div>
        </Element>
    );
};

export default Portfolio;
