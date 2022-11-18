import React, { useState } from "react";

function Card(props) {

  const { id, title} = props.card;

  return (
    <>
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.columnId, id)}
        onDragEnter={() => props.dragEntered(props.columnId, id)}
      >

        <div className="card_title">{title}</div>
      </div>
    </>
  );
}

export default Card;
