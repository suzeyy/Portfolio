import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section
      id="skills"
      className="d-flex flex-row align-items-center justify-content-center mt-2"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#333" }}
    >
      <div className="text-center">
        <h2
          className="display-4"
          style={{
            color: "#bdc3c7",
            marginTop: "-150px",
            marginBottom: "150px",
          }}
        >
          Skills
        </h2>

        <div className="d-flex flex-wrap justify-content-center mx-2 p-5">
          <div className="text-center mx-5">
            <FontAwesomeIcon
              icon={faHtml5}
              size="8x"
              title="HTML5"
              color="#e44e26"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>HTML</p>
          </div>
          <div className="text-center mx-5">
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="8x"
              title="CSS3"
              color="#0377be"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>CSS</p>
          </div>
          <div className="text-center mx-5">
            <FontAwesomeIcon
              icon={faJsSquare}
              size="8x"
              title="JavaScript"
              color="#efd83a"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>JavaScript</p>
          </div>
          <div className="text-center mx-5">
            <FontAwesomeIcon
              icon={faReact}
              size="8x"
              title="React"
              color="#61dafb"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>ReactJS</p>
          </div>
          <div className="text-center mx-5">
            <FontAwesomeIcon
              icon={faMicrosoft}
              size="8x"
              title=".NET"
              color="#68217a"
            />
            <p style={{ color: "#bdc3c7", marginTop: "10px" }}>.NET</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
