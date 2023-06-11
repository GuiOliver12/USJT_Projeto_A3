import React from "react";
import "./style.css";
import YTMIcon from "../../assets/ytm-icon.svg";

function HomePage() {
  return (
    <div>
      <div className="green-board">
        <p className="title-omusical">Omusical</p>
      </div>
      <div className="button-path-svg">
        <a href={`/pick-list`} className="list-path-svg">
          <img src={YTMIcon} className="ytm-icon" alt="Omusical Logo"></img>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
