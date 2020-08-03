import React from 'react';

/* Header */
import Header from './# Header';

import Portfolio from './#1 Portfolio';/*  Portfolio */
import Projects from './#2 Projects';/*  Projects */
import About from './#3 About';/*  About */
import Skills from './#4 Skills';/*  Skills */
import Contact from './#5 Contact';/*  Contact */

const index = () => {
    return (
        <div className='erinyes'>
            <Header />
            <Portfolio />
            <Projects />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default index;

