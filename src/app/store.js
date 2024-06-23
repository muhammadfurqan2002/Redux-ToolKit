// steps 
//1. for making store
// 2. make reducer /slicer

import todoReducder from '../features/todo/todoSlice3'

import { configureStore } from "@reduxjs/toolkit";


export const store=configureStore({
    reducer:todoReducder
})  //most of the time it take objects