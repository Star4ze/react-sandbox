import React from 'react'
import './Search.css'

function Search({ setSearch }) {

    const onSubmit = (e) => {
        e.preventDefault()
        setSearch(e.target[0].value)
    }

    return (
        <form className='Search' onSubmit={onSubmit}>
            <label>Search Wikipedia :</label>
            <input className='inputText' type='text' />
            <input className='submitButton' type='submit' />
        </form>
    )
}

export default Search;
