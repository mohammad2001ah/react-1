import { Update } from "@mui/icons-material";
import { useState } from "react";
// export default function Counter(){
//   const[count,setCount]=useState(0);
//   function increaseCount(){
//       setCount(count+1);
//   }
//   function decreaseCount(){
//       setCount(count-1);
//   }
//   return(
//     <>
//     <button onClick={()=>increaseCount()}>+</button>
//     <label>{count}</label>
//     <button onClick={()=>increaseCount()}>-</button>
//     <label>{count}</label>
//     <p></p>
//     </>
//   )
// }
export default function Counter(){
  const[text,setText]=useState("");
  const[todo,setTodo]=useState([]);

  function addTask(event){
    event.preventDefault();
    if(text.trim()===""){
      alert("enter yor task");
      return;
    }
    const isEditing = todo.find(item => item.isEditing === true);
    if(isEditing){
      setTodo(todo.map(item =>
        item.id === isEditing.id ? { ...item, text: text, isEditing: false } : item
      ));
      setText("");
      return;
    }
    const newTask={
      id: Date.now(),
      text: text.trim(),
      isEditing: false
    }
    setTodo([...todo, newTask]);
    setText("");
  }

  function deleteTask(id){
    setTodo(todo.filter(item => item.id !== id));
  }

  function editData(id){
    const edit = todo.find(item => item.id === id);
    if(edit){
      setText(edit.text);
      setTodo(todo.map(item =>
        item.id === id ? { ...item, isEditing: true } : { ...item, isEditing: false }
      ));
    }
  }

  return(
    <>
    <h1>todo list??</h1>
    <form onSubmit={addTask}>
    <input type="text" name="text" placeholder="enter your task" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button type="submit">Add</button>
    </form>
    <ul>
      {todo.map(item =>
        <li key={item.id}>{item.text}
        <button onClick={() => deleteTask(item.id)}>Delete</button>
        <button onClick={() => editData(item.id)}>edit</button>
        </li>
      )}
    </ul>
    </>
  )
}
