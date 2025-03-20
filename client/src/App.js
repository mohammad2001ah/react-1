import './App.css';
import NavBar from './componenets/navBar';
import Title from './componenets/Title';
import Button from './componenets/Button';
import Input from './componenets/Input';
import TodoList from './componenets/TodoList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { saveToLocalStorage,getFromLocalStorage } from './utils/storage';
import React,{useState,useEffect} from 'react';
import MediaCard from './componenets/cards';
import Clothes from './componenets/Clothes';
import ResponsiveGrid from './componenets/cards';
import Moh from './componenets/moh';

function App() {
  // //state for input
  // const [inputValue,setInputValue]=useState('');
  // const [todos,setTodos]=useState(getFromLocalStorage('todos')||[]);
  // /*
  // useEffect(()=>{do any thing},[states])
  // */

  // useEffect(()=>{
  //   saveToLocalStorage('todos',todos)//(key,value)
  //   console.log('todos',todos)
  // },[todos])

  // const handelAdd=()=>{
  //   setTodos ([...todos,inputValue]);
  // }
  return (
    // <div className="App">
    //   <NavBar/>
    //   <Title text="This is react to do app"/>
    //   <Input value={inputValue} onChange={setInputValue}/>
    //   <Button text="add to do" onClick={handelAdd}/>
    //   <TodoList todos={todos}/>
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route path ='/navBar' element={<NavBar/>}/>
        <Route path='/' element={<MediaCard/>}/> */}
        {/* <Route path='/' element={<TodoList/>}/> */}
        <Route path='/' element={<Moh/>}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
