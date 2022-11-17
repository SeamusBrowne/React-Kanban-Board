import { FaTimes } from 'react-icons/fa'

import React, { useState } from "react";

// import "./Card.css";
// import CardInfo from "./CardInfo/CardInfo";

function Card(props) {

  const { id, title} = props.card;

  return (
    <>
      {/* {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={props.card}
          boardId={props.boardId}
          updateCard={props.updateCard}
        />
      )} */}
      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
        //onClick={() => setShowModal(true)}
      >

        <div className="card_title">{title}</div>
      </div>
    </>
  );
}

export default Card;
