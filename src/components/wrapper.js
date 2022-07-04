import React from "react";
import Footer from "./footer/footer";
import Newsletter from "./newsletter";
import Navigation from "./navigation";
import Logo from "./logo";

const Wrapper = (props) => {
  return (
    <>
      <div className="nav">
        <Navigation />
      </div>
      <Logo />
      {props.children}
      <Newsletter />
      <Footer />
    </>
  );
};

export default Wrapper;
