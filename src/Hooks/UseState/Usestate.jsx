import { useState } from "react"

const App = () => {

  const[count,setcount]=useState(0)
  const[color,setcolor]=useState('re-d')
  const[bgcolor,setbgcolor]=useState('gray')
  
  return (  
<div>
      <h1 style={{color:`${color}`,backgroundColor:`${bgcolor}`}}>Count {count}</h1>
      <button onClick={()=>{setcount(count+1) }}>+</button>
      <button onClick={()=>{setcount(count-1)}}>-</button>
      <button onClick={()=>{setcolor("green")}}>color</button>
      <button onClick={()=>{setbgcolor("black")}}>change background color</button>
    </div>
  )
}
export default App

