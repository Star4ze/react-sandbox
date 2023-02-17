import React, { useContext, useState } from 'react'
import Actions from '../../state/Actions';
import { StateContext } from '../App'

function EditBlog({ index, setIsEdit }) {
    const { state, dispatch } = useContext(StateContext)

    const [inputTitle, setInputTitle] = useState(state.blogs[index].title);
    const [inputAuthor, setInputAuthor] = useState(state.blogs[index].author);
    const [inputContent, setInputContent] = useState(state.blogs[index].content);
    const [error, setError] = useState('');

    const showErrorMessage = (message) => {
        setError(message)
        setTimeout(() => { setError('') }, 3000)
    }


    const onSubmit = e => {
        e.preventDefault();
        if (!inputTitle || !inputAuthor) {
            showErrorMessage("some fields are missing")
        } else {
            let tempBlogs = state.blogs
            tempBlogs[index] = { title: inputTitle, author: inputAuthor, content: inputContent }
            dispatch({ type: Actions.setToBlogs, payload: [...tempBlogs] })
            setIsEdit(false);
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor='title'>Title :</label>
                    <label htmlFor='author'>Authot :</label>
                    <label htmlFor='content'>Content :</label>
                </div>
                <div>
                    <input type="text" id='title' value={inputTitle} onInput={e => setInputTitle(e.target.value)} />
                    <input type="text" id='author' value={inputAuthor} onInput={e => setInputAuthor(e.target.value)} />
                    <textarea id="content" value={inputContent} rows="4" cols="50" onChange={e => setInputContent(e.target.value)} />
                </div>
            </div>
            <input type="submit" value="done" className={`form-submit-button Button-${state.theme}`} />  <strong>{error}</strong>
        </form>
    );
}

export default EditBlog;
