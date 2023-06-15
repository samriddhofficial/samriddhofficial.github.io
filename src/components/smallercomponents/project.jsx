import React from "react";

function Project(props) {
  return (
    <div className="project">
      <img src={props.src} alt={props.alt} />
      <h3>{props.desc1}</h3>
      <p>{props.desc2}</p>
    </div>
  );
}

export default Project;
