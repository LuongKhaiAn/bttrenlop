import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () =>{
  const [count,setCount] = useState(0);
  const handleTang =()=>{
    setCount(count+1);
  }
  const handleGiam = () =>{
    if (count>0){
      setCount(count-1)
    }
  }
  return(
    <>
    <h1>Counter: {count}</h1>
    <Button onClick={handleGiam} variant="primary" className="me-3" style={{width: "100px"}}>Giam</Button>
    <Button onClick={handleTang} variant="primary" style={{width: "100px"}}>Tang</Button>
    </>
  )
}

export default Counter;
