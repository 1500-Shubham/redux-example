import React from 'react'

    import { useDispatch,useSelector } from 'react-redux'

const Part1 = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.firstReducer)

  function changeState(){
    dispatch({type:"incrementpart1"})    
  }  

  return (
    <div>
    <div>Part1 : {data.c}</div>
    <button onClick={()=>changeState()}>Change variable c</button>
    </div>
  )
}

export default Part1