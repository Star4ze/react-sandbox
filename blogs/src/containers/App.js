import { createContext, useEffect, useReducer } from "react";
import Actions from "../state/Actions";
import { initialState } from "../state/initialState";
import stateReducer from "../state/reducer/reducer";
import './App.css';
import Header from "./Header/Header";
import Routes from "./Routes/Routes";

const StateContext = createContext();

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  useEffect(() => {
    const storageBlogs = localStorage.getItem('blogs')

    if (storageBlogs.length) {
      dispatch({ type: Actions.setToBlogs, payload: JSON.parse(storageBlogs) })
      console.log("imported from local storage");
    }

  }, [])

  useEffect(() => { localStorage.setItem('blogs', JSON.stringify(state.blogs)) }, [state.blogs])

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className={`App App-${state.theme}`} >
        <Routes />
      </div>
    </StateContext.Provider>
  );
}

export default App;

export { StateContext };
