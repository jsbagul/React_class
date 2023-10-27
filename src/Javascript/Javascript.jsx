const Javascript=()=>{
    const name="Jayesh"
    const age=21;
function clk(){
    document.body.style.backgroundColor="red"
}

function blr(){
   let a= document.getElementById("ipt")
   a.value= a.value.toUpperCase()
}
    
    return(

        <div>
            <h1>My name is {name} and my age is {age}</h1>
            <h1>{`My name is ${name} and my age is ${age}`}</h1>
            <button onClick={clk}>Click</button>
            <input type="text" onBlur={blr} id='ipt'/>
            <button></button>
        </div>
    )
}
export default Javascript