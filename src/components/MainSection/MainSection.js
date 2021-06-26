import React, { useState, useEffect } from "react";

import axios from "axios";
import Card from "../Card/Card";

import "./MainSection.scss";

import Button from "../Button/Button"


const MainSection = () => {
  // const url = "https://api.shrtco.de/v2/"
  const buttonText = "Copy"

  const [input, setInput] = useState("");
  const [shortenLink, setShortenLink] = useState([])



  
  const fetchData = async () => {

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${input}`
    );

    const data =  await response.json();
    await setShortenLink(data)

  };

  
  useEffect(() => {

    if(input.length > 1) {
      fetchData()
    }
    
  }, [shortenLink, input, fetchData])

  const copyLink = () =>{
    const shortLink = document.getElementById("shortLink");
    const myBtn = document.getElementById("myBtn");

    myBtn.addEventListener("click", () =>{
      shortLink.select();

      document.execCommand("Copy");
    })
  }

  
  return (
    <main className="main__container">
      <div className="main__modal">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="main__input"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className="main__button" onClick={fetchData}>
          Shorten It!
        </button>
      </div>

      {/* {data} */}

      {shortenLink?.length === 0 ? <></> : (
        <div className="api__container">
          <small className="api__full-link">{shortenLink?.result?.original_link}</small>

          <div className="api__right-section">
            <small id="shortLink" className="api__short-link">{shortenLink?.result?.short_link}</small>

            <Button id="myBtn" buttonText={buttonText} onClick={copyLink} />
          </div>
        </div>
      )}

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
