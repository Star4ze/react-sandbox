import { createContext, useEffect, useReducer } from "react";
import ShowBlogs from '../containers/ShowBlogs/ShowBlogs';
import Actions from "../state/Actions";
import { initialState } from "../state/initialState";
import stateReducer from "../state/reducer/reducer";
import AddToBlog from './AddToBlog/AddToBlog';
import './App.css';
import Header from "./Header/Header";
import Login from "./Login/Login";
import SearchBar from "./SearchBar/SearchBar";

const StateContext = createContext();

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    const storageBlogs = localStorage.getItem('blogs')
    if (!!storageBlogs) {
      if (storageBlogs.length) {    //is this the right method?
        dispatch({ type: Actions.setToBlogs, payload: JSON.parse(storageBlogs) })
      }
    }
  }, [])

  useEffect(() => { localStorage.setItem('blogs', JSON.stringify(state.blogs)) }, [state.blogs])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className={`App App-${state.theme}`} >
        <Header />
        {state.authenticated ?
          <>
            <SearchBar />
            <AddToBlog />
            <ShowBlogs />
          </>
          : <Login />}
      </div>
    </StateContext.Provider>
  );
}

export default App;

export { StateContext };
