import { Update } from "@mui/icons-material";
import { useState,useEffect } from "react";
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
// export default function Counter(){
//   const[text,setText]=useState("");
//   const[todo,setTodo]=useState([]);

//   function addTask(event){
//     event.preventDefault();
//     if(text.trim()===""){
//       alert("enter yor task");
//       return;
//     }
//     const isEditing = todo.find(item => item.isEditing === true);
//     if(isEditing){
//       setTodo(todo.map(item =>
//         item.id === isEditing.id ? { ...item, text: text, isEditing: false } : item
//       ));
//       setText("");
//       return;
//     }
//     const newTask={
//       id: Date.now(),
//       text: text.trim(),
//       isEditing: false
//     }
//     setTodo([...todo, newTask]);
//     setText("");
//   }

//   function deleteTask(id){
//     setTodo(todo.filter(item => item.id !== id));
//   }

//   function editData(id){
//     const edit = todo.find(item => item.id === id);
//     if(edit){
//       setText(edit.text);
//       setTodo(todo.map(item =>
//         item.id === id ? { ...item, isEditing: true } : { ...item, isEditing: false }
//       ));
//     }
//   }

//   return(
//     <>
//     <h1>todo list??</h1>
//     <form onSubmit={addTask}>
//     <input type="text" name="text" placeholder="enter your task" value={text} onChange={(e)=>setText(e.target.value)}/>
//     <button type="submit">Add</button>
//     </form>
//     <ul>
//       {todo.map(item =>
//         <li key={item.id}>{item.text}
//         <button onClick={() => deleteTask(item.id)}>Delete</button>
//         <button onClick={() => editData(item.id)}>edit</button>
//         </li>
//       )}
//     </ul>
//     </>
//   )
// }
// export default function Counter(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     const intervaId= setInterval(()=>{
//       setCount(value => value+1);
//     },100)
//     return ()=> clearInterval(intervaId)
//   },[])
//   return(
//     <>
//     <h1>i have renderd {count} times</h1>
//     </>
//   )
// }
// export default function Counter(){
//   const[resourceType,setResourceType]=useState("Home");
//   useEffect(()=>{
//     //alert("resourceType is set to "+ resourceType)
//     console.log("resourceType is set to "+ resourceType)
//   },[resourceType])
//   return(
//     <>
//     <button onClick={()=>setResourceType("Home")}>Home</button>
//     <button onClick={()=>setResourceType("Posts")}>Posts</button>
//     <button onClick={()=>setResourceType("Users")}>Users</button>
//     <h1>Current Resource: {resourceType}</h1>
//     </>
//   )
// }
// export default function Counter(){
//   const[count,setCount]=useState(0);
//   useEffect(()=>{
//     const timer= setTimeout(()=>{
//       setCount(value=> value+1)
//     alert("welcome to my webSite")
//     },3000)
//     return ()=>clearTimeout(timer);
//   },[])
//   return(
//     <>
//     <h1>Current Resource:{count}</h1>
//     </>
//   )
// }
// export default function Counter() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       <h1>Mouse Position:</h1>
//       <h2>X: {position.x}</h2>
//       <h2>Y: {position.y}</h2>
//     </>
//   );
// }
export default function Counter() {
  const[username,setUserName]=useState("");
  const [savedName, setSavedName] = useState("");
  useEffect(()=>{
    const name=localStorage.getItem("username");
    setSavedName(name);
  }
  ,[])
  const handelAdd=()=>{
    localStorage.setItem("username",username);
    setSavedName(username);
    setUserName("");
  }
  return (
    <>
    <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handelAdd}>Add</button>
      <h1>Welcome, {username}</h1>
      
    </>
  );
}