import React from "react";
import "./style.css";
import YTMIcon from "../../assets/ytm-icon.svg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="green-board">
        <Link to="PickList" className="list-path-letter">
          <p className="title-omusical">Omusical</p>
        </Link>
      </div>
      <div className="button-path-svg">
        <Link to="PickList" className="list-path-svg">
          <img src={YTMIcon} className="ytm-icon" alt="Omusical Logo"></img>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
