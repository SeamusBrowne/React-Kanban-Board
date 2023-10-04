import React from "react";

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

        <div className="card_title">{title}
          <button className="card_delete" onClick={() => props.removeCard(props.columnId, id)}>X</button>
        </div>
      </div>
    </>
  );
}

export default Card;
