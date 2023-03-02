import React, { useMemo } from 'react'
import wrapPromise from '../../Api/wrapPromise';
import ResultCards from '../containers/ResultCards/ResultCards';
import './Results.css'

async function Results({ search }) {
    const results = useMemo(() => {
        const URL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&exintro=&prop=extracts%7Cpageimages&format=json&origin=*`;
        return wrapPromise(() => fetch(URL)).read();
    }, [search])

    return (
        <div className='Results'>
            <ul>
                {Object.keys(results).map((q, i) =>
                    <li key={i}>
                        <ResultCards
                            title={results[q].title}
                            img={results[q].thumbnail}
                            content={results[q].extract}
                        />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Results;
