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
    const newTask={
      id: Date.now(),
      text:text.trim()
  }
    setTodo([...todo,newTask])
    setText(" ");
  }
  function deleteTask(id){
    setTodo(todo.filter((item=>item.id !==id)))
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
        </li>
      )}
    </ul>
    </>
  )
}