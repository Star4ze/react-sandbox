import { useState, useContext } from 'react';
import './Blogs.scss'
import { StateTheme } from '../App';


export default function Blogs(props) {
    const [inputTitle, setInputTitle] = useState(props.blog.title);
    const [inputAuthor, setInputAuthor] = useState(props.blog.author);
    const [inputContent, setInputContent] = useState(props.blog.content);
    const [error, setError] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const theme = useContext(StateTheme)

    const showErrorMessage = (message) => {
        setError(message)
        setTimeout(() => { setError('') }, 3000)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (!inputTitle || !inputAuthor) {
            showErrorMessage("some fields are missing")
        } else {
            let tempBlogs = [...props.blogs]
            tempBlogs[props.index] = { title: inputTitle, author: inputAuthor, content: inputContent }
            props.setBlogs([...tempBlogs])
            setIsEdit(false);
        }
    };

    return (
        <>{isEdit ? <form onSubmit={onSubmit}>
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
            <input type="submit" value="done" className={`form-submit-button ${theme}`} />  <strong>{error}</strong>
        </form>
            : <div className={`showBlogsDiv showBlogsDiv-${theme}`}>
                <div>
                    <span id="title">Title :{props.blog.title}</span>
                    <span id="author">Author :{props.blog.author}</span>
                </div>
                <span id='content'>{props.blog.content}</span></div>}
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        </>
    )
}
