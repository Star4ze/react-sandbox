import { useState, useContext, useEffect } from 'react';
import './Blogs.scss'
import { StateContext } from '../App';
import Actions from '../../state/Actions';
import { useParams } from 'react-router-dom';
import EditBlog from '../EditBlog/EditBlog';


export default function Blogs() {
    const { state, dispatch } = useContext(StateContext)
    const { index } = useParams();
    const [blog, setBlog] = useState(null)
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => { setBlog(state.blogs[index]) }, [index, state.blogs]);

    const onDelete = () => {
        let tempBlogs = state.blogs
        tempBlogs.splice(index, 1);
        dispatch({ type: Actions.setToBlogs, payload: tempBlogs })
    }

    return (blog ? (
        isEdit ? <EditBlog index={index} setIsEdit={setIsEdit} /> : <>
            <div className={`showBlogsDiv showBlogsDiv-${state.theme}`}>
                <div>
                    <span id="title">Title :{blog.title}</span>
                    <span id="author">Author :{blog.author}</span>
                </div>
                <span id='content'>{blog.content}</span></div>
            <button className={`form-submit-button Button-${state.theme}`} onClick={() => setIsEdit(!isEdit)}>Edit</button>
            <button className={`form-submit-button Button-${state.theme}`} onClick={() => onDelete()}>Delete</button>
        </>
    ) :
        <span>no Content</span>
    )
}
