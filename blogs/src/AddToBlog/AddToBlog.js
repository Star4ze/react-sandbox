import { useState } from "react";
import './AddToBlog.css';

function AddToBlog(props) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [error, setError] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (inputTitle === '' || inputAuthor === '') {
            setError("some fields are missing")

        } else {
            props.AddToBlog({ title: inputTitle, author: inputAuthor, content: inputContent });
        }
        setInputTitle('');
        setInputAuthor('');
        setInputContent('');
    };

    return (
        <form onSubmit={onSubmit} className='AddToBlog'>
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
            <input type="submit" value="Add" className="form-submit-button" />  <strong>{error}</strong>
        </form>
    )

}

export default AddToBlog