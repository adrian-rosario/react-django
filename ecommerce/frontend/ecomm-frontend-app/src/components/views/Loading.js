import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className='sr-only'>Loading.</span>
    </Spinner>
  );
}

export default Loading;
