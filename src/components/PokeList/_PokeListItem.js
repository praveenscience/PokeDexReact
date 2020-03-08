import React from "react";

const PokeListItem = ({ Name, Image, Link }) => {
  return (
    <a
      href={Link}
      className="PokeListItem list-group-item list-group-item-action"
    >
      <img src={Image} className="PokeList-Img" alt="" />
      {Name}
    </a>
  );
};

export default PokeListItem;
