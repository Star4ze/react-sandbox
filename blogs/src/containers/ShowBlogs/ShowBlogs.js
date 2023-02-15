import { useContext } from 'react';
import { StateContext } from '../../components/App';
import Blogs from '../../components/Blog/Blogs';
import './ShowBlogs.css'

function ShowBlogs() {
    const context = useContext(StateContext)
    return (
        <div className='ShowBlogs'>
            <ul>
                {context.state.isSearching
                    ? context.state.searchResults.map((b, i) => <li key={i}> <Blogs blog={b} index={i} /> </li>)
                    : context.state.blogs.map((b, i) => <li key={i}> <Blogs blog={b} index={i} /> </li>)}
            </ul>
        </div>
    );
}

export default ShowBlogs;
