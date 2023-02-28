import React from 'react'
import ResultCards from '../containers/ResultCards/ResultCards';

function Results({ results }) {
    return (
        <div className='Results'>
            <ul>
                {Object.keys(results).map((q, i) =>
                    <li key={i}>
                        <ResultCards title={results[q].title} img={results[q].thumbnail} content={results[q].extract} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Results;
