import React from "react";

export default function Button(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>{props.children}</button>
    </div>
  );
}
