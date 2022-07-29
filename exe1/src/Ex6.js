import React from "react";
import Ex6css from "./Ex6.css"

function Child({ setValue }) {
  return (
    <>
      <div>Child</div>
      <button
        onClick={() => {
          setValue("Parent has been updated");
        }}
      >
        Change Parent Value
      </button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child setValue={setValue} />
      </div>
    </>
  );
}

export default Parent;