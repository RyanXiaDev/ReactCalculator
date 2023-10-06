import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState("")
  const [curValue, setCurValue] = useState(0)
  const [curOp, setCurOp] = useState("+")
  
  const calculate = () =>{
    if(curOp === "+"){
      setCurValue(curValue + parseInt(display))
    }
    if(curOp === "-"){
      setCurValue(curValue - parseInt(display))
    }
    if(curOp === "x"){
      setCurValue(curValue*parseInt(display))
    }
    if(curOp === "/"){
      setCurValue(curValue/parseInt(display))
    }
    
  }




  return (
    <div className="App">
      <div>Result: {curValue}</div>
      <div>Input: {display}</div>
      <div>
        <button onClick={()=>{
          setDisplay(display+"1")
        }}>1</button>
        <button onClick={()=>{
          setDisplay(display+"2")
        }}>2</button>
        <button>3</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div>
        <button>0</button>
        <button onClick={()=>{
          calculate()
          setCurOp("+")
          setDisplay("")
        }}>+</button>

        <button onClick={()=>{
          calculate()
          setCurOp("-")
          setDisplay("")
        }}>-</button>
      </div>
      <div>
        <button onClick={()=>{
          calculate()
          setCurOp("x")
          setDisplay("")}}>x</button>
        <button>/</button>
        <button onClick={()=>{
          calculate()
          // = means calculate, then put the result as current input for future operator
          
        }}>=</button>
      </div>

    </div>
  );
}

export default App;
