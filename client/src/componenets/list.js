import { useState } from "react";
import Title from "./Title";
var indexId=1;
export default function List(){
  const initialCard=[
    {
      id:1, title:"card1",descreption:"nnnnnnnn"
    }
  ];
  const [cardInfo,setCardData]=useState(initialCard);
  const [newCard,setNewCard]=useState("");

  function addCard(){
    if(newCard.trim()== " "){
      alert("please enter all information")
      return;
    }
    setCardData(...cardInfo,{id:indexId++, title:"", descreption:""});
    setNewCard("");
  }
  
}