import './ShowBlogs.css'

function ShowBlogs(props) {
    return (
        <div className='ShowBlogs'>
            <ul>
                {props.blogs.map((b, i) =>
                    <li key={i}>
                        <div className='showBlogsDiv'>
                            <div>
                                <span id="title">Title :{b.title}</span>
                                <span id="author">Author :{b.author}</span>
                            </div>                  
                            <span id='content'>{b.content}</span></div>
                    </li>)}
            </ul>
        </div>
    );
}

export default ShowBlogs;