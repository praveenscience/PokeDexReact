import React from "react";
import { Link } from "react-router-dom";
import Default from "../../assets/icons/default.png";

const PokeListItem = ({ Name, Image, Link: URL }) => {
  Image = Image ? Image : Default;
  return (
    <Link
      to={URL}
      className="PokeListItem list-group-item list-group-item-action"
    >
      <img src={Image} className="PokeList-Img" alt="" />
      {Name}
    </Link>
  );
};

export default PokeListItem;
