import React from "react";
//insaide input(valuw ,onchange) is props
const Input=({value,onChange})=>
(
  <input value={value} onChange={(e)=>onChange(e.target.value)} type="text"/>
)
export default Input;
//e.target this mean (input tag)