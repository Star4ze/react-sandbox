import './App.css';
import { useState } from "react";
import Display from './Display/Display';

function App() {
const [inputs,setInputs] = useState()


  return (
    <div className="App">
      <header className="App-header">Calculator</header>
      <Display inputs={inputs}/>

    </div>
  );
}

export default App;
