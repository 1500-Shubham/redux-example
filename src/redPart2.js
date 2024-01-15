import { createReducer } from "@reduxjs/toolkit";

const initalState= {
    d:0,
    s:"string"
}

export const redPart2= createReducer(initalState,{
    increment:(state,action)=>{state.d+=1},
    incrementBy10:(state,action)=>{state.d+=action.random},
    stringchange:(state,action)=>{state.s=action.payload}
})