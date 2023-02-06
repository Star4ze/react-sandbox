import './App.css';
import { useState } from "react";
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';

function App() {
const [inputs,setInputs] = useState([])
const [ans,setAns] = useState()

  return (
    <div className="App">
      <header className="App-header">Calculator</header>
      <Display inputs={inputs} ans={ans}/>
      <Keyboard setInputs={setInputs} inputs={inputs} ans={ans} setAns={setAns}/>
    </div>
  );
}

export default App;
