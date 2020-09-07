import React from "react";

function TextInput(props) {
  return (
    <input
      onChange={props.handleChange}
      onKeyDown={props.handleKeyDown}
      className="text-input"
      type="text"
      placeholder="Add something..."
      value={props.text}
    ></input>
  );
}

export default TextInput;
