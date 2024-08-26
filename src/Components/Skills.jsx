import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faMicrosoft,
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import C from "../assets/c.png";
import cPlus from "../assets/c++.png";
const Skills = () => {
  return (
    <section
      id="skills"
      className="justify-content-center mt-1"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#333" }}
    >
      <div className="text-center 
      ">
        <h2
          className="display-4"
          style={{
            color: "#bdc3c7",
            marginBottom: "50px",
            // marginTop: "50px"
            paddingTop: "50px"
          }}
        >
          Skills
        </h2>
        <div className="row justify-content-center p-md-5 m-1">
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faHtml5}
              size="8x"
              title="HTML5"
              color="#e44e26"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>HTML</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="8x"
              title="CSS3"
              color="#0377be"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>CSS</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faJsSquare}
              size="8x"
              title="JavaScript"
              color="#efd83a"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>JavaScript</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faReact}
              size="8x"
              title="React"
              color="#61dafb"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>ReactJS</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faMicrosoft}
              size="8x"
              title=".NET"
              color="#68217a"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>.NET</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <FontAwesomeIcon
              icon={faFlutter}
              size="8x"
              title="Flutter"
              color="#02569B"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>Flutter</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <img
              src={C}
              alt="C"
              style={{ width: "128px", height: "128px" }}
              title="C"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>C</p>
          </div>
          <div className="col-md-3 col-5 p-3">
            <img
              src={cPlus}
              alt="C++"
              style={{ width: "128px", height: "128px" }}
              title="C++"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>C++</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
