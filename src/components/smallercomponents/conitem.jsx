import React from "react";
function Conitem(props) {
  return (
    <a href={props.link}>
      <img className="conitem" src={props.source} alt={props.altname} />
    </a>
  );
}

export default Conitem;
