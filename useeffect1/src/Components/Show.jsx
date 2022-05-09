import { useState } from "react"
import { Input } from "./Input";
import { nanoid } from "nanoid";


export const Todo=()=>{

    const [data,setData]=useState([])
    function textReceive(data1){
        const payload={
            "title":data1
        }
        setData([...data,payload])
    };
 
    return(<div>
        <Input fn={textReceive}/>
        {data.map((e)=><div key={nanoid()}>{e.title}</div>)}
    </div>) 
    
}