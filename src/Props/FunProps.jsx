

const FunProps = (props) => {


  return (
    <div>
     <h1>My name {props.name} is  and my age is {props.age}</h1> 
      <br />
    <button onClick={props.btn}>Click here</button>
    </div>
  )
}

export default FunProps
