// import { useState } from 'react';
import useFilter from '../../hooks/useFilter'
import './SearchBar.scss'

export default function SearchBar(props) {
    // const [input, setInput] = useState('')
    const [filtered, setFilterd] = useFilter(props.blogs);

    const search = (e) => {
        setFilterd(e.target.value);
        props.setToShow(filtered)
    }
    
    // const onSubmit = (e) => {
    //     console.log("object");
    //     e.preventDefault();
    //     setFilterd(e.target.value);
    //     props.setToShow(filtered)
    // }

    return (
        <div className='SearchBar'>
            {/* <form onSubmit={onSubmit}> */}
            <input type='text' placeholder="Search.." onInput={(e) => search(e)} />
            {/* <input type='submit' />
            </form> */}
        </div>
    )
}