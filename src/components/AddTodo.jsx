import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice3';
addTodo
function AddTodo() {
    const dispatch=useDispatch();
    const [input,setInput]=useState("");
    function onSubmitHandler(e){
        e.preventDefault();
        console.log(input)
        dispatch(addTodo(input)) //for dispatching action 
        setInput('')
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={input} name="text" onChange={(e)=>setInput(e.target.value)} id="text" />
            <button style={{"background":"red","color":"white","margin":"20px","height":"max-content"}}>add</button>
        </form>
    </div>
  )
}

export default AddTodo
