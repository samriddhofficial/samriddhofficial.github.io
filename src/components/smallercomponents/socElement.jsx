import React from "react";

function SocElement(props) {
  return (
    <div className="society">
      <div className="socimg">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="socel">
        <h3>{props.desc1}</h3>

        <h4>
          {props.desc2}
          <br />
          {props.desc3}
        </h4>
      </div>
    </div>
  );
}

export default SocElement;
