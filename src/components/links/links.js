import React from "react";
import LinkItem from "./linkItem";
import classes from "./links.module.css";

const Links = ({ title, links }) => {
  return (
    <>
      <h5>{title}</h5>
      <ul className={classes.links}>
        {links.map((l) => (
          <li className={classes.links__link} key={l.content}>
            <LinkItem url={l.url} content={l.content} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
