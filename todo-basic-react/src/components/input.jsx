import { useState } from "react"

export const Input=({fn})=>{
  const[text,setText]=useState("")
  return(<div>
    <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
    <button onClick={()=>{fn(text)}}>Add</button>
  </div>)
} 