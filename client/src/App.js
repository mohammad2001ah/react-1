import './App.css';
import NavBar from './componenets/navBar';
import Title from './componenets/Title';
import Button from './componenets/Button';
import Input from './componenets/Input';
import TodoList from './componenets/TodoList';

import { saveToLocalStorage,getFromLocalStorage } from './utils/storage';
import React,{useState,useEffect} from 'react';

function App() {
  //state for input
  const [inputValue,setInputValue]=useState('');
  const [todos,setTodos]=useState(getFromLocalStorage('todos')||[]);
  /*
  useEffect(()=>{do any thing},[states])
  */

  useEffect(()=>{
    saveToLocalStorage('todos',todos)//(key,value)
    console.log('todos',todos)
  },[todos])

  const handelAdd=()=>{
    setTodos ([...todos,inputValue]);
  }
  return (
    <div className="App">
      <NavBar/>
      <Title text="This is react to do app"/>
      <Input value={inputValue} onChange={setInputValue}/>
      <Button text="add to do" onClick={handelAdd}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
