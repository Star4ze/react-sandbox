import { useEffect, useState } from "react";
import AddToBlog from './AddToBlog/AddToBlog';
import './App.css';
import Login from "./Login/Login";
import ShowBlogs from './ShowBlogs/ShowBlogs';

// const initialBlogs = [
//   { title: 'blog 1', author: 'writtenbyme', content: 'such empty' },
//   { title: 'blog 2', author: 'he', content: 'nothing to see' },
//   { title: 'blog 3', author: 'she', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus sapiente culpa. Enim fugit excepturi repellat mollitia, porro voluptatum voluptatem? Minus tempore ipsum magni necessitatibus numquam aut nihil quidem dolor.' }
// ]

function App() {
  const [logged, setLogged] = useState(false)
  const [blogs, setBlogs] = useState(() => {
    const storageBlogs = localStorage.getItem('blogs')
    if (!storageBlogs)
      return []
    if (storageBlogs.length)
      return JSON.parse(storageBlogs)
  })

  useEffect(() => { localStorage.setItem('blogs', JSON.stringify(blogs)) }, [blogs])

  return (
    <div className="App">
      <header className="App-header">Blogs App</header>
      {logged ?
        <><AddToBlog AddToBlog={blog => setBlogs([...blogs, blog])} />
          <ShowBlogs blogs={blogs} /></>
        : <Login setLogged={setLogged} />}
    </div>
  );
}

export default App;
