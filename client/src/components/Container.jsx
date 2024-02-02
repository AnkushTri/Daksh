import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Container = () => {
  const [value,setValue]=useState(0)

  const increment=(value)=>{
    dispatch({
    type:"ADD",
    payload:{
      value
    }
   } )
  }

  const decrement=(value)=>{
    dispatch({
      type: "SUB",
      payload: {
        value
      }
    })
  }

  const handlechange = () => {
    const x = Number(e.target.value);
    setValue(x);
  }

  const dispatch = useDispatch()
  return (
    <div style={{width:300, margin:10}}>
      <input type="text" onChange={handlechange}  />
      <button onClick={()=>decrement(value)}>-</button>
      <button onClick={()=>increment(value)}>+</button>
    </div>
  )
}

export default Container