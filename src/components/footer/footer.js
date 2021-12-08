import React from "react";
import IconItem from "../icons/iconItem";
import Links from "../links/links";
import Copyright from "./copyright";

import classes from "./footer.module.css";

const quickLinks = [
  {
    url: "#",
    content: "About us",
  },
  {
    url: "#",
    content: "Contact us",
  },
  {
    url: "#",
    content: "Products",
  },
];

const categoriesLinks = [
  {
    url: "#",
    content: "Action",
  },
  {
    url: "#",
    content: "Adventure",
  },
  {
    url: "#",
    content: "Comedy",
  },
  {
    url: "#",
    content: "Crime",
  },
  {
    url: "#",
    content: "Drama",
  },
  {
    url: "#",
    content: "Horror",
  },
  {
    url: "#",
    content: "Mystery",
  },
  {
    url: "#",
    content: "Romance",
  },
];

const supportLinks = [
  {
    url: "#",
    content: "FAQs",
  },
  {
    url: "#",
    content: "Support Center",
  },
];

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer__social}>
          <img className={classes.logo} alt="Logo" src="/images/kino.png" />
          <h5>Follow us</h5>
          <div>
            <IconItem icon="icon-facebook" />
            <IconItem icon="icon-youtube" />
            <IconItem icon="icon-twitter" />
            <IconItem icon="icon-linkedin" />
            <IconItem icon="icon-instagram" />
          </div>
        </div>
        <div
          className={`${classes.footer__links} ${classes["footer__links--1"]}`}
        >
          <Links title="Quick links" links={quickLinks} />
        </div>

        <div
          className={`${classes.footer__links} ${classes["footer__links--2"]}`}
        >
          <Links title="Support" links={supportLinks} />
        </div>
        <div
          className={`${classes.footer__links} ${classes["footer__links--3"]}`}
        >
          <Links title="Movie catagories +" links={categoriesLinks} />
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
