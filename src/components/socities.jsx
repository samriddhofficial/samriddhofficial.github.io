import React from "react";
import SocElement from "./smallercomponents/socElement";
import Project from "./smallercomponents/project";
function Socities() {
  return (
    <div className="Socities" id="Socities">
      <h1>Experiences</h1>
      <div className="masterSocities">
        <h2>Societies</h2>
        <SocElement
          src="https://github.com/samriddhofficial/photos/blob/main/Photos-001/axiom.png?raw=true"
          alt="Axiom"
          desc1="Axiom"
          desc2="Member at Content Department"
          desc3="Helps in writing synopsis of CPCs"
        />
        <SocElement
          src="https://github.com/samriddhofficial/photos/blob/main/Photos-001/quizclub.png?raw=true"
          alt="Quiz Club"
          desc1="Quiz Club"
          desc2="Quizzing Member at the club"
        />
        <SocElement
          src="https://github.com/samriddhofficial/photos/blob/main/Photos-001/kalpana.png?raw=true"
          alt="Team Kalpana"
          desc1="Team Kalpana"
          desc2="Member at Software Department"
          desc3="Developed a GUI for presenting data recieved from CanSat in graphical and tabular form "
        />
      </div>
      <div className="masterProject">
        <h2>Projects</h2>
        <p>
          Though I have not done much developments projects, yet one of my major
          project is GUI build using python tKinter
        </p>
        <Project
          src="https://github.com/SamriddhDiwan/TeamKalpanaTask/blob/project1/Screenshot%202023-04-02%20201623.png?raw=true"
          alt="Task1"
          desc1="Task 1"
          desc2="Data in csv file was recieved from CanSat at the rate of 1 packet/sec and the GUI was required to show the given change simultaneously "
        />
        <Project
          src="https://github.com/SamriddhDiwan/TeamKalpanaTask/blob/project1/Screenshot%202023-04-02%20201623.png?raw=true"
          alt="Task2"
          desc1="Task 2"
          desc2="Quite same as task 1 but this time in addition to tabular representaiton graphical representaion was also required, this also being refreshed simultaneously "
        />
        <a
          href="https://github.com/SamriddhDiwan/TeamKalpanaTask"
          className="linkit"
        >
          <h3>Have A Look At The Project On github </h3>
        </a>
      </div>
    </div>
  );
}

export default Socities;
