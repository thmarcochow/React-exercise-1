import React from "react";

function Ex9() {
  const [number, setNumber] = React.useState(0);
  function add() {
    setNumber(number + 1);
  }
  function dec() {
    setNumber(number - 1);
  }
  return (
    <div>
      <h2>Counter: {number}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default Ex9;