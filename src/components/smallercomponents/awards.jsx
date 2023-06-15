import React from "react";

function Awards(props) {
  return (
    <div className="awardElements">
      <h1>{props.participation}</h1>
      <h2 className="ed2">{props.rank}</h2>
    </div>
  );
}

export default Awards;
