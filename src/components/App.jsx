import React from "react";
import About from "./about";
import Contact from "./contact";
import Navigation from "./navigation";
import Skills from "./skills";
import Small from "./smallAbout";
import Socities from "./socities";
function App() {
  return (
    <div>
      <div className="backs">
        <Navigation />
        <Small />
      </div>
      <About />

      <Skills />
      <Socities />
      <Contact />
    </div>
  );
}

export default App;
