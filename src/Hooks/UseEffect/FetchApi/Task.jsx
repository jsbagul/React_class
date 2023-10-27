import React, { useEffect, useState } from 'react'

const Task = () => {

    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((d)=>setData(d))
    },[data])
  return (
    <div>
         <center><input type={"search"} onChange={(e)=>setSearch(e.target.value)}/></center>
         {    data.filter((item)=>item.name.toLowerCase().includes(search)).map((x)=>{
            return(
                <section key={x.name}>
                    <center>
                   <h3>{x.name}</h3>
                   </center>
                </section>
            )
        })
     }
    </div>
  )
}
export default Task
