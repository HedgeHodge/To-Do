import React from "react";

export default function PlusButton(props) {
  return (
    <button className="main-btn" onClick={props.handleClick}>
      +
    </button>
  );
}
