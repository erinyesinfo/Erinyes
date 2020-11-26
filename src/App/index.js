import React, { Component } from 'react';

/* Header */
import Header from './# Header';

import Portfolio from './#1 Portfolio';/*  Portfolio */
import Projects from './#2 Projects';/*  Projects */
import About from './#3 About';/*  About */
import Skills from './#4 Skills';/*  Skills */
import Contact from './#5 Contact';/*  Contact */

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Theme: (localStorage.getItem('theme') && localStorage.getItem('theme') === 'black') || false
        };
    };
    componentDidMount() {
        if (this.state.Theme) {
            let body = document.querySelector("body");
            let elm_footer = document.getElementById('footer');
            if (body && (body.style.backgroundColor !== 'rgb(0, 0, 0)' || body.style.color !== 'rgb(255, 255, 255)')) {
                if (body.style.backgroundColor !== 'rgb(0, 0, 0)' && body.style.color !== 'rgb(255, 255, 255)') {
                    body.style.backgroundColor = 'rgb(0, 0, 0)';
                    body.style.color = 'rgb(255, 255, 255)';
                } else if (body.style.backgroundColor !== 'rgb(0, 0, 0)') {
                    body.style.backgroundColor = 'rgb(0, 0, 0)';
                } else if (body.style.color !== 'rgb(255, 255, 255)') {
                    body.style.color = 'rgb(255, 255, 255)';
                }
            }
            if (elm_footer && elm_footer.style.color !== 'darkslategray') {
                elm_footer.style.backgroundColor = 'darkslategray';
            }
        }
    };
    handleLightTheme = () => {
        if (!this.state.Theme) return null;
        this.setState({ Theme: false });
        let body = document.querySelector("body");
        if (body && (body.style.backgroundColor === 'rgb(0, 0, 0)' || body.style.color === 'rgb(255, 255, 255)')) {
            if (body.style.backgroundColor === 'rgb(0, 0, 0)' && body.style.color === 'rgb(255, 255, 255)') {
                body.style.backgroundColor = 'unset';
                body.style.color = 'unset';
            } else if (body.style.backgroundColor === 'rgb(0, 0, 0)') {
                body.style.backgroundColor = 'unset';
            } else if (body.style.color === 'rgb(255, 255, 255)') {
                body.style.color = 'unset';
            }
        }
        window.location.reload()
    };
    handleDarkTheme = () => {
        if (this.state.Theme) return null;
        this.setState({ Theme: true });
        let body = document.querySelector("body");
        if (body && (body.style.backgroundColor !== 'rgb(0, 0, 0)' || body.style.color !== 'rgb(255, 255, 255)')) {
            if (body.style.backgroundColor !== 'rgb(0, 0, 0)' && body.style.color !== 'rgb(255, 255, 255)') {
                body.style.backgroundColor = 'rgb(0, 0, 0)';
                body.style.color = 'rgb(255, 255, 255)';
            } else if (body.style.backgroundColor !== 'rgb(0, 0, 0)') {
                body.style.backgroundColor = 'rgb(0, 0, 0)';
            } else if (body.style.color !== 'rgb(255, 255, 255)') {
                body.style.color = 'rgb(255, 255, 255)';
            }
        }
        window.location.reload()
    };
    render() {
        return (
            <div className='erinyes'>
                <Header handleLightTheme={this.handleLightTheme} handleDarkTheme={this.handleDarkTheme}
                    Theme={this.state.Theme}
                />
                <Portfolio />
                <Projects />
                <About />
                <Skills />
                <Contact />
            </div>
        );
    };
};

export default index;

