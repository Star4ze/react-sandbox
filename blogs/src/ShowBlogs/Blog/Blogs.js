import { useState } from 'react';
import './Blogs.css'

export default function Blogs(props) {
    const [inputTitle, setInputTitle] = useState(props.title);
    const [inputAuthor, setInputAuthor] = useState(props.author);
    const [inputContent, setInputContent] = useState(props.content);
    const [error, setError] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!inputTitle || !inputAuthor) {        
            setError("some fields are missing")
        } else {
            //props.AddToBlog({ title: inputTitle, author: inputAuthor, content: inputContent });
        }

        setInputTitle('');
        setInputAuthor('');
        setInputContent('');
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
            <input type="submit" value="done" className="form-submit-button" />  <strong>{error}</strong>
        </form>
    )
}