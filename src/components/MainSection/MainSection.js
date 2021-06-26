import React from "react";

import Card from "../Card/Card";

import "./MainSection.scss";

const MainSection = () => {
  return (
    <main className="main__container">
      <div className="main__modal">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="main__input"
        ></input>
        <button className="main__button">Shorten It!</button>
      </div>

      <h3 className="main__header">Advanced Statistics</h3>

      <p className="main__paragraph">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <Card />
    </main>
  );
};

export default MainSection;
