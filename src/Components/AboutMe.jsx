import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="d-flex flex-column align-items-center justify-content-center mt-2"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#333" }}
    >
      <div className="text-center mb-4">
        <h2
          className="display-4"
          style={{ color: "#bdc3c7", marginTop: "-80px" }}
        >
          About Me
        </h2>
      </div>
      <div className="text-center">
        <p
          className="lead"
          style={{
            maxWidth: "900px",
            lineHeight: "1.6",
            color: "#bdc3c7",
            marginTop: "-20px",
          }}
        >
          Hello! I am a passionate Frontend Developer with a keen eye for design
          and a commitment to creating intuitive, responsive, and user-friendly
          web applications. With expertise in HTML, CSS, JavaScript, and modern
          frameworks like React, I strive to deliver seamless digital
          experiences. I am constantly learning new technologies and improving
          my skills to stay at the forefront of the industry. My goal is to
          build innovative solutions that not only meet user needs but also
          exceed expectations.
        </p>
      </div>
      {/* Experience and Education Boxes */}
      <div className="container">
        <div className="row mx-5">
          {/* Experience Box */}
          <div className="col-md-5 mx-5">
            <div
              className="p-4 mb-4"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "200px",
              }}
            >
              <h3 className="mb-2">Experience</h3>
              <a
                href="https://inspireuvic.org/"
                className="company"
                style={{ color: "#bdc3c7" }}
              >
                INSPIRE UVic
              </a>
              <p>
                {/* Replace with your actual experience details */}
                Apprentice Garage | Solution Developer
              </p>
              <p>
                  Applied advanced problem-solving skills to co-design and
                  develop full-stack web applications using .NET and ReactJS,
                  addressing complex challenges effectively.
                  </p>
            </div>
          </div>
          {/* Education Box */}
          <div className="col-md-5">
            <div
              className="p-4 mb-4"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "200px",
              }}
            >
              <h3 className="mb-2">Education</h3>
              <p>BSc. CSIT (Final Year) | Tribhuvan University</p>
              <p>
              I am currently in my final year of pursuing a Bachelor's degree in Computer Science. My studies have equipped me with a solid foundation in software development, algorithms, data structures, and web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
