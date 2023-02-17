import { useContext, useState } from "react";
import Actions from "../../state/Actions";
import { StateContext } from "../App";
import './AddToBlog.css';


function AddToBlog() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAuthor, setInputAuthor] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [error, setError] = useState('');

    const context = useContext(StateContext)

    const onSubmit = e => {
        e.preventDefault();
        if (!inputTitle || !inputAuthor) {
            setError("some fields are missing");
        } else {
            context.dispatch({ type: Actions.addToBlogs, payload: { title: inputTitle, author: inputAuthor, content: inputContent } })
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
            <input type="submit" value="Add" className={`form-submit-button Button-${context.state.theme}`} />  <strong>{error}</strong>
        </form>
    )

}

export default AddToBlog
