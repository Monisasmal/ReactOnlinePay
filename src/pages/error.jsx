import React from "react";
import ErrorComponent from "../ErrorComponent";
import Navbar from "../navbar";
import EndFooter from "../EndFooter";

const error = () => {
  return (
    <>
      <Navbar />
      <ErrorComponent />
      <EndFooter />
    </>
  );
};

export default error;
