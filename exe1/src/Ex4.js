import React from "react";

function Ex4() {
  const [text, setText] = React.useState("");

  return (
    <>
      <p>Type text here!!!</p>
      <input type="text" placeholder="Enter Text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
      <p>{text}</p>
    </>
  );

}

export default Ex4;