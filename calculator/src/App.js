import './App.css';
import { useState } from "react";
import Display from './Display/Display';
import Keyboard from './Keyboard/Keyboard';

function App() {
const [inputs,setInputs] = useState([])
const [ans,setAns] = useState()
const [num2,setNum2] = useState()

  return (
    <div className="App">
      <header className="App-header">Calculator</header>
      <Display inputs={inputs} ans={ans} num2={num2}/>
      <Keyboard setInputs={setInputs} inputs={inputs} ans={ans} setAns={setAns} setNum2={setNum2}/>
    </div>
  );
}

export default App;
