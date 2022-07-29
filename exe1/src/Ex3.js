import React from "react";

function Ex3() {
  const [show, setShow] = React.useState(true);
  
  return (
    <>
      <button onClick={()=>{setShow(!show)}}>
        {show ? "Hide Element Below" : "Show Element Below"}</button>

       {show && <div>Toggle Challenge</div>}
    </>
  );
}

export default Ex3;