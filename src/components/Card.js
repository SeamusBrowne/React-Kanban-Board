import React, { useState } from "react";

function Card(props) {

  const { id, title} = props.card;

  return (
    <>
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragTo(props.columnId, id)}
        onDragEnter={() => props.dragFrom(props.columnId, id)}
      >

        <div className="card_title">{title}</div>
        <div className="card_footer"></div>
      </div>
    </>
  );
}

export default Card;
