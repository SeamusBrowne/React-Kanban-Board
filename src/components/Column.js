import React from "react";

import Card from "./Card";
import AddCard from "./AddCard";

function Column(props) {

  return (
    <div className="column">
      <div className="column_header">
        <p className="column_header_title">
          {props.column?.title}
          <span style={{ color: props.column?.cards?.length >= 3 ? 'red' : 'gray'}}>{props.column?.cards?.length || 0}</span>
        </p>
      </div>
      <div className="column_cards custom-scroll">
        {props.column?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            columnId={props.column.id}
            removeCard={props.removeCard}
            dragTo={props.dragTo}
            dragFrom={props.dragFrom}
            updateCard={props.updateCard}
          />
        ))}
        <AddCard 
          text="+ Add Card"
          placeholder="Enter Card Name"
          displayClass="column_add_card"
          editClass="column_add-card_edit"
          onSubmit={(value) => props.addCard(props.column?.id, value)}
        />
      </div>
    </div>
  );
}

export default Column;
