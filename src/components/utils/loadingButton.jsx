import React from "react";

const LoadingButton = ({isLoading, textButton}) => {      
  return (
    <>
      {isLoading ? (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        textButton
      )}
    </>
  );
};

export default LoadingButton;
