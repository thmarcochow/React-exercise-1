import React from "react";
import Ex8css from "./Ex8.css"

function Ex8() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);
  
  function calculateTotal(){
    setTotal(number1 + number2);
  }
  
  return (
    <div>
      <h2>Adding Two Numrbers</h2>
      <input placeholder="First Number" type="number" onChange={(e) => setNumber1(+e.target.value)}/>
      <input placeholder="Second Number" type="number" onChange={(e) => setNumber2(+e.target.value)}/>

      <button onClick={calculateTotal}>Add Two Numbedrs</button>
      <p>Total: {total}</p>
    </div>
  );
}

export default Ex8;