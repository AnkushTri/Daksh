import React from 'react'
import { useSelector } from "react-redux";

const DisplayCounter = () => {
    const counter=useSelector((store)=>store.counter)
  return (
    <div>Counter:{counter}</div>
  )
}

export default DisplayCounter