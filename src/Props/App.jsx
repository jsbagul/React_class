import FunProps from "./Props/FunProps"
import ClassProps from "./Props/ClassProps"
const App = () => {
  const name="Jayesh"
  const age=23
  let flag=0;
  const clk=()=>{
   if (flag==0) {
    document.body.style.backgroundColor="yellow"
    flag=1
   }
   else{
    document.body.style.backgroundColor="white"
    flag=0
   }
  
    
  }
  return (
    <div>
      <FunProps name={name} age={age} btn={clk}/>
      <ClassProps name={name} age={age}/>
    </div>
  )
}

export default App
