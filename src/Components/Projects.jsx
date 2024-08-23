import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="d-flex flex-column align-items-center justify-content-center mt-1"
      style={{ minHeight: "100vh", backgroundColor: "#222b30", color: "#333" }}
    >
      <div className="text-center mb-4">
        <h2
          className="display-4"
          style={{ color: "#bdc3c7", marginTop: "-10px" }}
        >
          Projects
        </h2>
      </div>

      <div className="container-aboutme">
        <div className="row mx-5">
          <div className="col-md-3 mx-5" data-aos="fade-up">
            <div
              className="p-4 mb-5"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 className="mb-4">LiteLane</h3>

              <ul>
                <li className="mb-4">
                  {" "}
                  A car game implemented in C Programming language
                </li>
                <li className="mb-5">Used graphics.h library.</li>
              </ul>
              <div className="d-flex justify-content-center mt-5">
                <a
                  href="https://github.com/suzeyy/LiteLane"
                  className="btn btn-outline-light mx-2"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-5" data-aos="fade-up">
            <div
              className="p-4 mb-4"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 className="mb-4">FlavorFusion</h3>
              <ul>
                <li className="mb-4"> Static webpage for a restaurant.</li>
                <li className="mb-4">
                  Utilized HTML and CSS to create a visually appealing and
                  user-friendly interface.
                </li>
              </ul>
              <div className="d-flex justify-content-center mt-5">
                <a
                  href="https://github.com/suzeyy/FlavorFusion"
                  className="btn btn-outline-light mx-2"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 mx-5" data-aos="fade-up">
            <div
              className="p-4 mb-4"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3 className="mb-4">Watch Haven</h3>
              <ul>
                <li className="mb-2">
                  {" "}
                  E-commerce website designed for the watch collection.
                </li>
                <li className="mb-2">
                  Designed using HTML, CSS, JavaScript, PHP and MySQL.
                </li>
                <li className="mb-0">
                  Includes add-to-card, wishlist, checkout page and esewa
                  payment integration.
                </li>
              </ul>
              <div className="d-flex justify-content-center mt-3">
                <a
                  href="https://github.com/suzeyy/Ecommerce"
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

export default Projects;
