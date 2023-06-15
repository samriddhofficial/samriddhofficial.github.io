import React from "react";
import Education from "./smallercomponents/educaton";
import Awards from "./smallercomponents/awards";
function Skills() {
  return (
    <div className="Skills" id="Skills">
      <h1>Skills</h1>
      <div className="masterEducation">
        <h1>Education</h1>
        <Education
          institute="N.C Jindal Public School"
          degree="10th Class"
          year="2008-2020"
        />
        <Education
          institute="N.C Jindal Public School"
          degree="12th Class"
          year="2020-2022"
        />
        <Education
          institute="Netaji Subhash Institute Of technology"
          degree="B.Tech (EIOT)"
          year="2022-26"
        />
      </div>
      <div className="masterAward">
        <h1>Awards</h1>
        <Awards participation="JEE Mains" rank="Top 2.7 Percentile" />
        <Awards participation="French Olympiad" rank="Silver Medal" />
        <Awards
          participation="Gita Competition"
          rank="Intra School First Rank"
        />
        <Awards participation="Scholar" rank="Class 10th" />
        <Awards participation="Scholar " rank="Class 12th" />
        <Awards participation="Aryabhatta" rank="Intra School 1st rank" />
      </div>
    </div>
  );
}

export default Skills;
