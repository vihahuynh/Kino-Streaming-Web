import React from "react";
import Footer from "./footer/footer";
import Newsletter from "./newsletter";

const Wrapper = (props) => {
  return (
    <>
      {props.children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Wrapper;
