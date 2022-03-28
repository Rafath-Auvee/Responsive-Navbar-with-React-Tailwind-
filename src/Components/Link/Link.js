import React from "react";
import './Link.css'
const Link = (props) => {
  const { name, link } = props.route;
  return (
    <div>
      <li className="mr-16 mt-2 text-2xl">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
