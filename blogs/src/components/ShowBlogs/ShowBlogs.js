import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../containers/App';
import Blogs from '../../containers/Blog/Blogs';
import './ShowBlogs.css'

function ShowBlogs() {
    const {state} = useContext(StateContext)
    return (
        <div className='ShowBlogs'>
            <ul>
                {state.isSearching
                    ? state.searchResults.map((b, i) => <li key={i}> <Blogs blog={b} index={i} /> </li>)
                    : state.blogs.map((b, i) => <li key={i}> <h3> {b.title} </h3> <Link to={`/home/${i}`}> Read content </Link> </li>)}
            </ul>
        </div>
    );
}

export default ShowBlogs;
