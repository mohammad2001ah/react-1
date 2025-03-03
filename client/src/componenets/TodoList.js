import React from "react";
const TodoList =({todos})=>(
  <ul>
    {/* {todos} */}
    {/* this line of code mean make loop to access all indext and addedd to list  */}
    {todos.map((y,index)=>
    <li key={index}>{y}</li>
    )}
  </ul>
)
export default TodoList;