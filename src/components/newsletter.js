import React, { useState } from "react";
import classes from "./newsletter.module.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handlerChangeInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className={classes.container}>
      <svg className={classes["deco--top"]}>
        <use xlinkHref="/sprite.svg#icon-flower"></use>
      </svg>
      <svg className={classes["deco--bottom"]}>
        <use xlinkHref="/sprite.svg#icon-flower"></use>
      </svg>
      <h3 className={classes.title}>
        Subscribe our newsletter for newest movies updateds
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.input}
          value={email}
          onChange={handlerChangeInput}
          placeholder="Email"
        ></input>
        <button className={classes.btn}>subcribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
