import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

function ViDu3() {
  const countRef = useRef(0);
  const countObj = {
      abc: 0,
  };
  const [count, setCount] = useState(0);
  const increaseCount = () => {
      countRef.current++;
      countObj.abc++;
      setCount(count + 1);
  };
  console.log("count:", count);
  console.log("countRef:", countRef);
  console.log("countObj:", countObj);
  return (
      <Button variant="primary" onClick={increaseCount}>
          Tang gia tri
      </Button>
  );
};


export default ViDu3;
