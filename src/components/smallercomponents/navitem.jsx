import React from "react";

function Navitem(props) {
  return (
    <a className="navitem" href={props.navito}>
      {props.name}
    </a>
  );
}

export default Navitem;
