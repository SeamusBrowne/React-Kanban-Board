import React, { useEffect, useState } from "react";

import Column from "./components/Column";

import "./index.css";

function App() {
  const [columns, setColumns] = useState(
    JSON.parse(localStorage.getItem("kanban-one")) || []
  );

  const [targetCard, setTargetCard] = useState({
    colId: "",
    cid: "",
  });

  const addCardHandler = (id, title) => {
    const index = columns.findIndex((item) => item.id === id);
    if (index < 0) return;

    const tempColumns = [...columns];
    tempColumns[index].cards.push({
      id: Date.now() + Math.random() * 2,
      title,
    });
    setColumns(tempColumns);
  };

  const removeCard = (colId, cid) => {
    const index = columns.findIndex((item) => item.id === colId);
    if (index < 0) return;

    const tempColumns = [...columns];
    const cards = tempColumns[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setColumns(tempColumns);
  };

  const dragTo = (colId, cid) => {
    let source_colIndex, source_cardIndex, temp_colIndex, temp_cardIndex;
    source_colIndex = columns.findIndex((item) => item.id === colId);
    if (source_colIndex < 0) return;

    source_cardIndex = columns[source_colIndex]?.cards?.findIndex(
      (item) => item.id === cid
    );
    if (source_cardIndex < 0) return;

    temp_colIndex = columns.findIndex((item) => item.id === targetCard.colId);
    if (temp_colIndex < 0) return;

    temp_cardIndex = columns[temp_colIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cid
    );
    if (temp_cardIndex < 0) return;

    const tempColumns = [...columns];
    const sourceCard = tempColumns[source_colIndex].cards[source_cardIndex];
    tempColumns[source_colIndex].cards.splice(source_cardIndex, 1);
    tempColumns[temp_colIndex].cards.splice(temp_cardIndex, 0, sourceCard);
    setColumns(tempColumns);

    setTargetCard({
      colId: "",
      cid: "",
    });
  };

  const dragFrom = (colId, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      colId,
      cid,
    });
  };

  const updateCard = (colId, cid, card) => {
    const index = columns.findIndex((item) => item.id === colId);
    if (index < 0) return;

    const tempColumns = [...columns];
    const cards = tempColumns[index].cards;

    const cardIndex = cards.findIndex((item) => item.id === cid);
    if (cardIndex < 0) return;

    tempColumns[index].cards[cardIndex] = card;

    setColumns(tempColumns);
  };

  useEffect(() => {
    localStorage.setItem("kanban-one", JSON.stringify(columns));
  }, [columns]);

  return (
    <div className="app">
      <div className="app_title">
        <h1>Kanban Board</h1>
      </div>
      <div className="app_board">
        <div className="app_columns">
          {columns.map((item) => (
            <Column
              key={item.id}
              column={item}
              addCard={addCardHandler}
              removeCard={removeCard}
              dragTo={dragTo}
              dragFrom={dragFrom}
              updateCard={updateCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
