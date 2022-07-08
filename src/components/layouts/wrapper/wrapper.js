import React from "react";

import Footer from "../footer/footer";
import Navigation from "../navigation/navigation";
import Newsletter from "../newsletter/newsletter";
import Logo from "../../ui/logo/logo";

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
