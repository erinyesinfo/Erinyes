import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import jeremyBeadle from './jeremy-beadle-129624-unsplash.jpg';
import jeremyBeadle_lower from './jeremy-beadle-129624-unsplash-lower.jpg';
import './index.css';

/* helper */
import LazyLoad from '../ThirdParty-Library/LazyLoad';

const Portfolio = () => {
    const [ mouseInAnimate, setMouseInAnimate ] = useState('');
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
                    <h1 className='portfolio-hi'>
                        <div className={mouseInAnimate === 'H' ? 'animate_header_H':''} onMouseEnter={() => setMouseInAnimate('H')} onMouseLeave={() => setMouseInAnimate('')}>H</div>
                        <div className={mouseInAnimate === 'I' ? 'animate_header_I':''} onMouseEnter={() => setMouseInAnimate('I')} onMouseLeave={() => setMouseInAnimate('')}>i</div>
                        <div className={mouseInAnimate === '!' ? 'animate_header_i':''} onMouseEnter={() => setMouseInAnimate('!')} onMouseLeave={() => setMouseInAnimate('')}>!</div>&nbsp;
                    </h1>
                    <h1 className='portfolio-im'>
                        <div className={mouseInAnimate === 'i' ? 'animate_header_name_I':''} onMouseEnter={() => setMouseInAnimate('i')} onMouseLeave={() => setMouseInAnimate('')}>I</div>
                        <div className={mouseInAnimate === '$' ? 'animate_header_name_i':''} onMouseEnter={() => setMouseInAnimate('$')} onMouseLeave={() => setMouseInAnimate('')}>'</div>
                        <div className={mouseInAnimate === 'm' ? 'animate_header_name_M':''} onMouseEnter={() => setMouseInAnimate('m')} onMouseLeave={() => setMouseInAnimate('')}>m</div>&nbsp;
                        <div className={mouseInAnimate === 'h' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('h')} onMouseLeave={() => setMouseInAnimate('')}>H</div>
                        <div className={mouseInAnimate === 'i2' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('i2')} onMouseLeave={() => setMouseInAnimate('')}>i</div>
                        <div className={mouseInAnimate === 'c' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('c')} onMouseLeave={() => setMouseInAnimate('')}>c</div>
                        <div className={mouseInAnimate === 'h2' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('h2')} onMouseLeave={() => setMouseInAnimate('')}>h</div>
                        <div className={mouseInAnimate === 'a' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('a')} onMouseLeave={() => setMouseInAnimate('')}>a</div>
                        <div className={mouseInAnimate === 'm2' ? 'animate_header_name':''} onMouseEnter={() => setMouseInAnimate('m2')} onMouseLeave={() => setMouseInAnimate('')}>m</div>
                    </h1>
                    <div onMouseEnter={() => setMouseInAnimate('description')} onMouseLeave={() => setMouseInAnimate('')}>
                        <div className={mouseInAnimate === 'description' ? 'portfolio-description':''}>
                            Developer who can build anything involve front-end
                        </div>
                    </div>
                    <Link activeClass="active" className="about-scroll"
                        to="about" spy={true} smooth={true}
                        duration={500}
                    >
                        <div className='portfolio-more'>
                            More about me
                        </div>
                    </Link>
                    <a className='portfolio-patron' rel="noopener noreferrer"
                        href="https://www.patreon.com/bePatron?u=40714472" target='_blank'>
                        Become a Patron!
                    </a>
                    <script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                </div>
            </div>
        </Element>
    );
};

export default Portfolio;
