import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function ViDu2() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  function handleIncreaseCountA(){
    setCountA(countA+1)
  }
  function handleIncreaseCountB(){
    setCountB(countB+1)
  }

  useEffect(()=>{
    console.log("k doi so")
  });
  useEffect(()=>{
    console.log("arr rong")
  },[])
  useEffect(()=>{
    console.log("doi so countA va countB")
  },[countA,countB])
  useEffect(()=>{
    console.log("doi so countA")
  },[countA])

  return (
    <div>
      <div>
        <h3>Count A: {countA}</h3>
        <h3>Count B: {countB}</h3>
      </div>
      <div>
        <Button
          variant="primary"
          style={{ marginRight: 30 }}
          onClick={handleIncreaseCountA}
        >
          Increase Count A
        </Button>
        <Button variant="primary" onClick={handleIncreaseCountB}>
          Increase Count B
        </Button>
      </div>
    </div>
  );
}

export default ViDu2;
