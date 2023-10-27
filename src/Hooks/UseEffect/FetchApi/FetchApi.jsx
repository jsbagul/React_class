import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const[data,setData]=useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then((d)=>setData(d))
    },[data])
  return (
    <div>
     {
        data.map((x)=>{
            return(
                <section>
                    <center>
                    <h3>{x.name}</h3>
                    <p>{x.email}</p>
                    </center>
                </section>
            )
        })
     }
    </div>
  )
}

export default FetchApi
