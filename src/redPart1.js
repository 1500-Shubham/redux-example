import { createReducer } from "@reduxjs/toolkit";

const initalState= {
    c:0,
}

export const redPart1= createReducer(initalState,{
    incrementpart1:(state,action)=>{state.c+=1},
    increment10:(state,action)=>{state.c+=action.payload},
})