import './js1.css'
function Javascript1(){

const a=async()=>{

   const data= await fetch("https://fakestoreapi.com/products")
    console.log(data);
    // to json
    const finalData=await data.json()
    console.log(finalData);
    finalData.map((e)=>{
        let sec=document.getElementById('sec')
        sec.innerHTML+=`<div class='cards'>
        <img src="${e.image}" width='200px' height='200px'/>
        <p>${e.title}</p>
        <p>${e.price}</p>
        <button>Add Cart</button>
        </div>`

    })
}
a()
    return(
        <div className="javascript1">
            <section id='sec'></section>

        </div>
    )
}
export default Javascript1