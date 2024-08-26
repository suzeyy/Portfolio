import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="d-flex flex-column align-items-center mt-1 justify-content-center"
      style={{
        // height: "100vh",
        backgroundColor: "#222b30",
        color: "#333",
        // marginTop: "20em",
        minHeight: "100vh",
      }}
    >
      <div>
        <div
          className="text-center mt-4"
          style={{ color: "#bdc3c7", marginBottom: "2rem" }}
        >
          <h2 className="display-4">Projects</h2>
        </div>

        <div className="container d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#2c3e50",
                  borderRadius: "10px",
                  color: "#bdc3c7",
                  display: "flex",

                  flexDirection: "column",
                }}
              >
                <h3 className="mb-4">LiteLane</h3>
                <ul>
                  <li className="mb-4">
                    A car game implemented in C Programming language
                  </li>
                  <li className="mb-5">Used graphics.h library.</li>
                </ul>
                <div className="d-flex justify-content-center mt-auto">
                  <a
                    href="https://github.com/suzeyy/LiteLane"
                    className="btn btn-outline-light mx-2"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#2c3e50",
                  borderRadius: "10px",
                  color: "#bdc3c7",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 className="mb-4">FlavorFusion</h3>
                <ul>
                  <li className="mb-4">Static webpage for a restaurant.</li>
                  <li className="mb-4">
                    Utilized HTML and CSS to create a visually appealing and
                    user-friendly interface.
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-auto">
                  <a
                    href="https://github.com/suzeyy/FlavorFusion"
                    className="btn btn-outline-light mx-2"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div
                className="p-4 h-100"
                style={{
                  backgroundColor: "#2c3e50",
                  borderRadius: "10px",
                  color: "#bdc3c7",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 className="mb-4">Watch Haven</h3>
                <ul>
                  <li className="mb-2">
                    E-commerce website designed for the watch collection.
                  </li>
                  <li className="mb-2">
                    Designed using HTML, CSS, JavaScript, PHP and MySQL.
                  </li>
                  <li className="mb-0">
                    Includes add-to-cart, wishlist, checkout page and esewa
                    payment integration.
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-auto">
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
      </div>
    </section>
  );
};

export default Projects;
