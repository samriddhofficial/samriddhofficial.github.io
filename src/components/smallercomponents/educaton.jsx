import React from "react";

function Education(props) {
  return (
    <div className="edElements">
      <h1>{props.degree}</h1>
      <h2>{props.year}</h2>
      <h2 className="ed2">{props.institute}</h2>
    </div>
  );
}

export default Education;
