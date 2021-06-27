import React from "react";

import "./Button.scss";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const Button = ({
  buttonText,
  copyToClipboard,
  fetchData,
  loading,
  override,
  color,
}) => {
  return (
    <>
      <button className="button" onClick={copyToClipboard || fetchData}>
        {loading ? (
          <span className="main__spinner">
            <ClipLoader
              color={color}
              loading={loading}
              css={override}
              size={13}
            />
            Loading...
          </span>
        ) : (
          <>{buttonText}</>
        )}
      </button>
    </>
  );
};

export default Button;
