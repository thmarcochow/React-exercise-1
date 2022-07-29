import React from "react";

function Ex5() {
  const [text, setText] = React.useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button disabled={text.length < 1}>Submit</button>
    </>
  );
}

export default Ex5;