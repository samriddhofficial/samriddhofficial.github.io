import React from "react";
import Navitem from "./smallercomponents/navitem";
function Navigation() {
  return (
    <div className="Navigation" id="Navigation">
      <nav className="nav">
        <div className="nav-items">
          <Navitem name="Home" navito="#smallAbout" />
          <Navitem name="About" navito="#About" />
          <Navitem name="Skills" navito="#Skills" />
          <Navitem name="Experiences" navito="#Socities" />
          <Navitem name="Contact" navito="#Contact" />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
