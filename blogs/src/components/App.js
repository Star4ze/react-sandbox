import { createContext, useEffect, useState } from "react";
import AddToBlog from './AddToBlog/AddToBlog';
import './App.css';
import Header from "./Header/Header";
import Login from "./Login/Login";
import SearchBar from "./SearchBar/SearchBar";
import ShowBlogs from '../containers/ShowBlogs/ShowBlogs';

const StateTheme = createContext();

function App() {
  const [theme, setTheme] = useState('cofee')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [blogs, setBlogs] = useState(() => {
    const storageBlogs = localStorage.getItem('blogs')
    if (!storageBlogs) { return [] }
    if (storageBlogs.length) { return JSON.parse(storageBlogs) }
  })

  useEffect(() => { localStorage.setItem('blogs', JSON.stringify(blogs)) }, [blogs])

  const [toShow, setToShow] = useState(blogs)

  return (
    <StateTheme.Provider value={theme}>
      <div className={`App App-${theme}`} >
        <Header setTheme={setTheme}></Header>
        {isLoggedIn ?
          <>
            <SearchBar setToShow={setToShow} blogs={blogs} />
            <AddToBlog AddToBlog={blog => setBlogs([...blogs, blog])} />
            <ShowBlogs blogs={toShow} setBlogs={setBlogs} /></>
          : <Login setIsLoggedIn={setIsLoggedIn} />}
      </div>
     </StateTheme.Provider>
  );
}

export default App;

export { StateTheme };
