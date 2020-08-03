import React from 'react';
import './index.css';

const Helper = ({ number, title, description }) => {
    return (
        <div className='helper'>    
            <div className='helper-container'>
                <div className='helper-number'>{number}</div>
                <div className='helper-title'>{title}</div>
            </div>
            <hr className='helper-hr' />
            <div className='helper-container-2'>
                {description}
            </div>
        </div>
    );
};

export default Helper;
