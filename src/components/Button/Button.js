import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

import "./Button.scss";

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
