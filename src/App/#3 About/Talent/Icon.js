import React from 'react';

export const Left = ({ onClick }) => (
    <button className='about_arrows left' type='button' onClick={onClick}>
        <svg className="about_svg_arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.57 451.85"><defs><style>{`.arrow-left{fill:#fff}`}</style></defs><g id="Arrow-left_2" data-name="Arrow-left 2"><g id="arrow-left" data-name="Arrow-left 1"><path className="arrow-left" d="M9.27,203.55,203.55,9.27A31.64,31.64,0,0,1,248.3,54L76.39,225.93,248.3,397.83a31.64,31.64,0,0,1-44.75,44.75L9.26,248.29a31.64,31.64,0,0,1,0-44.74Z"/></g></g></svg>
    </button>
);

export const Right = ({ onClick }) => (
    <button className='about_arrows right' type='button' onClick={onClick}>
        <svg className="about_svg_arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.57 451.85"><defs><style>{`.arrow-right{fill:#fff}`}</style></defs><g id="Arrow-right_2" data-name="Arrow-right 2"><g id="arrow-right" data-name="Arrow-right 1"><path className="arrow-right" d="M248.3,248.29,54,442.57A31.64,31.64,0,0,1,9.27,397.83L181.18,225.92,9.27,54A31.64,31.64,0,0,1,54,9.27L248.31,203.55a31.64,31.64,0,0,1,0,44.74Z"/></g></g></svg>
    </button>
);
