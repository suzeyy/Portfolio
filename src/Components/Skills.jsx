import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faMicrosoft } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
  return (
    <section
      id="skills"
      className="d-flex flex-row align-items-center justify-content-center mt-2"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#333" }}
    >
      <div className="text-center ">
        <div><h2
          className="display-4"
          style={{ color: "#bdc3c7", marginTop: "-300px" }}
        >
          Skills
        </h2></div>
        
      
      
<div className="mx-2 p-5 ">
      <FontAwesomeIcon icon={faHtml5} size="8x" title="HTML5"  color="#e44e26" className="mx-5"/>
      <FontAwesomeIcon icon={faCss3Alt} size="8x" title="CSS3" color="#0377be" className="mx-5"/>
      <FontAwesomeIcon icon={faJsSquare} size="8x" title="JavaScript" color="#efd83a" className="mx-5"/>
      <FontAwesomeIcon icon={faReact} size="8x" title="React" color="#61dafb" className="mx-5"/>
      <FontAwesomeIcon icon={faMicrosoft} size="8x" title=".NET" color="#68217a" className="mx-5" />
    </div>
    </div>
    </section>
  );
};

export default Skills;
