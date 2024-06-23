//  for making reducer / slice
// nanoid generate unique id's

import { createSlice ,nanoid } from "@reduxjs/toolkit";

// it can be array or object
const initialState={
    todos:[{id:1,text:"Hello World"}]
}


function greet(){
    console.log("Hello World");
}

// how to make slice .it is bigger version of reducer

export const todoSlice=createSlice({  //moslty it take objects .every slice has it's inital state
    name:'todo',
    initialState,
    reducers:{
        // addTodo:greet
        addTodo:(state,action)=>{
            console.log(action);
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        }, //it always give state and action
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    } //it has properities and functions 
})





//  steps

// 1. export all functionaliteis
// 2. give awareness of recuder to store 
export const  {addTodo,removeTodo} =todoSlice.actions;

export default todoSlice.reducer;

