import React from "react";
const TodoList =({todos})=>(
  <ul>
    {/* {todos} */}
    {todos.map((y,index)=>
    <li key={index}>{y}</li>
    )}
  </ul>
)
export default TodoList;