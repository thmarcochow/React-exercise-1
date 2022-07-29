import React from "react";

function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent({ children }) {
  return (
    <div>
      <h3>Parent Component</h3>
      {children}
    </div>
  );
}

function Ex7() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

export default Ex7;