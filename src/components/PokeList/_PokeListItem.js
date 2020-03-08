import React from "react";
import Default from "../../assets/icons/default.png";

const PokeListItem = ({ Name, Image, Link }) => {
  Image = Image ? Image : Default;
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
