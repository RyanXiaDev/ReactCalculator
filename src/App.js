import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

function App() {

  const initialState = {
    display: "",
    curValue: 0,
    curOp: "+"
  }
  const [state, dispatch] = useReducer(opsReducer, initialState)

  function calculate(state){
    if(state.curOp === "+"){
      return state.curValue + parseInt(state.display)
    }
    if(state.curOp === "-"){
      return state.curValue - parseInt(state.display)
    }
    if(state.curOp === "x"){
      return state.curValue * parseInt(state.display)
    }
    if(state.curOp === "/"){
      return state.curValue / parseInt(state.display)
    }    
  }

  function opsReducer(state, action){
    switch (action.type) {
      case 'number': {
        return {
          ...state,
          display: state.display + action.value
        }
      }

      case '+': {
        return {
          curValue: calculate(state),
          display: "",
          curOp: "+"
        }
      }
      case '-': {
        return {
          curValue: calculate(state),
          display: "",
          curOp: "-"
        }
      }
      case 'x': {
        return {
          curValue: calculate(state),
          display: "",
          curOp: "x"
        }
      }
      case '/': {
        return {
          curValue: calculate(state),
          display: "",
          curOp: "/"
        }
      }
      default: {
        throw Error('Unknown action: ' + action.type)
      }
    }
  }

 

  return (
    <div className="App">
      <div>Result: {state.curValue}</div>
      <div>Input: {state.display}</div>
      <div>
        <button onClick={()=>{
          dispatch({
            type: "number",
            value: 1
          })
        }}>1</button>
        <button onClick={()=>{
          dispatch({
            type: "number",
            value: 2
          })
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
          dispatch({
            type: "+"
          })
        }}>+</button>

        <button onClick={()=>{
          dispatch({
            type: "-"
          })
        }}>-</button>
      </div>
      <div>
        <button onClick={()=>{
          dispatch({
            type: "x"
          })}}>x</button>
        <button onClick={()=>{
          dispatch({
            type: "*"
          })}}>/</button>
        <button onClick={()=>{
          dispatch({
            type: "="
          })}}>=</button>
      </div>

    </div>
  );
}

export default App;
