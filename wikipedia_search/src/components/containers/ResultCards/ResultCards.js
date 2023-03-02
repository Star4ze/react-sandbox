import React from 'react'
import './ResultCards.css'

function ResultCards({ img, title, content }) {
    return (
        <div className='ResultCards'>
            <div>
                {img ? <img src={img.source} alt={title} /> : null}
                <h3>{title}</h3>
            </div>
            <p>{content.slice(0, 100) + ' ..........'}</p>
        </div>
    );
}

export default ResultCards;
