import { useState } from "react";
import AddToBlog from './AddToBlog/AddToBlog';
import './App.css';
import ShowBlogs from './ShowBlogs/ShowBlogs';

const initialBlogs = [
  { title: 'blog 1', author: 'writtenbyme', content: 'such empty' },
  { title: 'blog 2', author: 'he', content: 'nothing to see' },
  { title: 'blog 3', author: 'she', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus sapiente culpa. Enim fugit excepturi repellat mollitia, porro voluptatum voluptatem? Minus tempore ipsum magni necessitatibus numquam aut nihil quidem dolor.' }
]

function App() {
  const [blogs, setBlogs] = useState(initialBlogs);

  return (
    <div className="App">
      <header className="App-header">Blogs App</header>
      <AddToBlog AddToBlog={blog => setBlogs([...blogs, blog])} />
      <ShowBlogs blogs={blogs} />
    </div>
  );
}

export default App;
