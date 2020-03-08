import React from "react";

const PropItem = ({ Name, Value }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {Name}
      {Value && <span className="badge badge-primary badge-pill">{Value}</span>}
    </li>
  );
};

export default PropItem;
