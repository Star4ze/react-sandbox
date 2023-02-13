import Blogs from '../../components/Blog/Blogs';
import './ShowBlogs.css'
function ShowBlogs(props) {
    return (
        <div className='ShowBlogs'>
            <ul>
                {props.blogs.map((b, i) => <li key={i}> <Blogs blog={b} blogs={props.blogs} index={i} setBlogs={props.setBlogs} theme={props.theme} /> </li>)}
            </ul>
        </div>
    );
}

export default ShowBlogs;
