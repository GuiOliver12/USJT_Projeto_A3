import React from "react";
import "./style.css";
import ItemMusic from "../../components/list-item/item";


function PickList() {
  return (
    <div className="pick-list-page">
      <header className="green-board-header">
        <a href={`/`} className="list-path-letter">
          <p className="title-omusical-hover">Omusical</p>
        </a>
      </header>
      <div className="list-board">        
        <ItemMusic />
      </div>
    </div>
  );
}

export default PickList;
