import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ url, content }) => {
  return <Link to={url}>{content}</Link>;
};

export default LinkItem;
