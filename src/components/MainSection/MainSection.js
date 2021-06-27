import React, { useState, useEffect, useRef } from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import Card from "../Card/Card";
import Button from "../Button/Button";

import "./MainSection.scss";

const MainSection = () => {
  let color = "#fff";

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: white;
  `;

  const buttonText = "Shorten It!";
  const shortLinkRef = useRef();

  const [input, setInput] = useState("");
  const [shortenLink, setShortenLink] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const fetchData = async () => {
    if (!input.length && !validURL(input)) {
      setEmptyInput(true);
    } else {
      setLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );

      const data = await response.json();
      setLoading(false);
      await setShortenLink(data);

      setInput("");
      setEmptyInput(false);
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
    return !!pattern.test(str);
  };

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
          className={
            (emptyInput && !input.length) ? "main__input main__empty-input" : "main__input"
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <Button
          override={override}
          color={color}
          loading={loading}
          buttonText={buttonText}
          fetchData={fetchData}
        />

        {(emptyInput && !input.length) && <span className="main__error">Please add a link</span>}
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

            <Button
              buttonText={success ? "Copied!" : "Copy"}
              copyToClipboard={copyToClipboard}
            />
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
