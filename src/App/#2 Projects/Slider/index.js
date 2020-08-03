import React from 'react';
import { LeftCurved, RightCurved } from '../Icons';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    return (
        <React.Fragment>
            <button className='button-slide-previous' onClick={previous}>
                <LeftCurved handlePreviousProject={previous} />
            </button>
            <button className='button-slide-next' onClick={next}>
                <RightCurved handleNextProject={next} />
            </button>
        </React.Fragment>
    );
};

export default ButtonGroup;
