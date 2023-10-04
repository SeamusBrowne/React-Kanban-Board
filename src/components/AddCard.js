import React, { useState } from "react";

function AddCard(props) {
  const [isAddible, setisAddible] = useState(false);
  const [inputText, setInputText] = useState(props.defaultValue || "");

  const submission = (e) => {
    e.preventDefault();
    if (inputText && props.onSubmit) {
      setInputText("");
      props.onSubmit(inputText);
    }
    setisAddible(false);
  }

  return (
    <div className="add_card">
      {isAddible ? (
        <form
          className={`add_card_edit ${props.editClass ? props.editClass : ""}`}
          onSubmit={submission}
        >
          <input
            type="text"
            value={inputText}
            placeholder={props.placeholder || props.text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className="add_card_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <button className="delete_add">X</button>
            <X onClick={() => setisAddible(false)} className="closeIcon" />
          </div>
        </form>
      ) : (
        <p
          className={`add_card_text ${
            props.displayClass ? props.displayClass : ""
          }`}
          onClick={() => setisAddible(true)}
        >
          {props.text}
        </p>
      )}
    </div>
  );
}

export default AddCard;
