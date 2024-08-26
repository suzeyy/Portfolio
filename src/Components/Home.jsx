import React from "react";
import profileImage from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <section
      className="d-flex align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#fff" }}
    >
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <div
              className="rounded-circle mb-5 mb-md-0 mx-auto"
              style={{
                width: "350px",
                // maxWidth: "350px",
                height: "350px",
                borderColor: "#fff",
                marginTop: "0",
                overflow: "hidden"
              }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{
                  width: "100%",
                  height: "100%",
                  // maxWidth: "250px", // Smaller image on small screens
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col-md-6 text-center text-md">
            <div className="tracking-tight" style={{ marginTop: "0" }}>
              <div className="h2" style={{ color: "#bdc3c7" }}>
                Hello, I'm
              </div>
              <h1 className="display-4 fw-bold" style={{ color: "#bdc3c7" }}>
                Sujana Pyakurel
              </h1>
              <p className="lead mt-3" style={{ color: "#bdc3c7" }}>
                <TypeAnimation
                  sequence={[
                    "I'm a Frontend Developer",
                    2000,
                    "I'm a Web Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <p className="mt-4 mb-5" style={{ color: "#bdc3c7" }}>
                A Solution Developer, specializing in technical education
                through hands-on learning and application development.
              </p>

              <div className="mt-0 mb-3 ">
                <a
                  href="https://www.linkedin.com/in/sujana-pyakurel-bab77122a/"
                  className="btn btn-outline-light mx-2"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/suzeyy"
                  className="btn btn-outline-light mx-2"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
