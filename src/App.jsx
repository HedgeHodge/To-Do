import React, { useState } from "react";
import TextInput from "./TextInput";
import PlusButton from "./PlusButton";
import ToDoItem from "./ToDoItem";

export default function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);
  const [plusButtonClicked, setPlusButtonClicked] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addItem();
    }
  }

  function handleClick() {
    setPlusButtonClicked(true);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
    setItemAdded(true);
  }

  return (
    <div className="App">
      {itemAdded === false && (
        <h2 id="intro-text">
          To add an item to your list, click the circle below
        </h2>
      )}
      {items.map((item, index) => (
        <ToDoItem key={index} id={index} text={item} />
      ))}
      {plusButtonClicked === false ? (
        <PlusButton handleClick={handleClick} />
      ) : (
        <TextInput
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          text={input}
        />
      )}
    </div>
  );
}
