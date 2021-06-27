import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import Card from "../Card/Card";

import "./MainSection.scss";

import Button from "../Button/Button";

const MainSection = () => {
  // const url = "https://api.shrtco.de/v2/"
  const buttonText = "Copy";
  const shortLinkRef = useRef();

  const [input, setInput] = useState("");
  const [shortenLink, setShortenLink] = useState([]);
  const [success, setSuccess] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const fetchData = async () => {
    if (!input.length && !validURL(input)) {
      setEmptyInput(true);
    } else {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );

      const data = await response.json();
      await setShortenLink(data);

      setInput("");
    }
  };

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    console.log(pattern);
    return !!pattern.test(str);
  };

  // useEffect(() => {
  //   if (input.length) {
  //     fetchData();
  //   }
  // }, [shortenLink, input, fetchData]);

  const copyToClipboard = () => {
    const el = shortLinkRef.current;
    el.select();

    document.execCommand("Copy");

    setSuccess(true);
  };

  return (
    <main className="main__container">
      <div className="main__modal">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className= {emptyInput ? "main__input main__empty-input" : "main__input"}          
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button type="submit" className="main__button" onClick={fetchData}>
          Shorten It!
        </button>
      {emptyInput && <span className="main__error">Please add a link</span>}
      </div>


      {shortenLink?.length === 0 ? (
        <></>
      ) : (
        <div className="api__container">
          <small className="api__full-link">
            {shortenLink?.result?.original_link}
          </small>

          <div className="api__right-section">
            <textarea
            cols="30"
              ref={shortLinkRef}
              className="api__short-link"
              value={shortenLink?.result?.full_short_link}
            >
              {shortenLink?.result?.full_short_link}
            </textarea>

            <button className="button" type="submit" onClick={copyToClipboard}>
              {success ? "Copied" : "Copy"}
            </button>
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
