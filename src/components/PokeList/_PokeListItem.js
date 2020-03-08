import React from "react";
import { Link } from "react-router-dom";
import Default from "../../assets/icons/default.png";

const PokeListItem = ({ Name, Image, Link: URL, Available }) => {
  Image = Image ? Image : Default;
  return (
    <Link
      to={URL}
      className={
        "PokeListItem list-group-item list-group-item-action" +
        (Available ? " list-group-item-warning" : "")
      }
    >
      <img src={Image} className="PokeList-Img" alt="" />
      {Name}
      {Available && <i className="fa fa-check-square"></i>}
    </Link>
  );
};

export default PokeListItem;
