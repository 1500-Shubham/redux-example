import React from 'react'

import { useDispatch,useSelector } from 'react-redux'


const Part2 = () => {

     const dispatch=useDispatch();
    const data=useSelector(state=>state.secondReducer)

function changeState(){
   dispatch({type:"incrementBy10",
            random:10,  
        })    
  }  

  return (
    <div>
    <div>Part1 : {data.d} {data.s}</div>
    <button onClick={()=>changeState()}>Change variable d</button>
    <input placeholder='change string value' onChange={(e) => {
        dispatch({type:"stringchange",
            payload:e.target.value,  
        }) }} ></input>
    </div>
  )
}

export default Part2