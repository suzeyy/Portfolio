import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex flex-column align-items-center justify-content-center mt-1"
      style={{
        minHeight: "100vh",
        backgroundColor: "#222b30",
        color: "#bdc3c7",
      }}
    >
      <div className="text-center ">
        <h2
          className="display-4"
          style={{
            color: "#bdc3c7",
            marginTop: "-20px",
            marginBottom: "150px",
          }}
        >
          Contact Me
        </h2>
      </div>

      <div className="container-contact">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="mb-5">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <h3 className="mt-4">Email</h3>
              <p className="mail">
                <a
                  href="mailto:sujanapyakurel2000@example.com"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  sujanapyakurel2000@example.com
                </a>
              </p>
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} size="3x" />
              <h3 className="mt-4">Phone</h3>
              <p className="phone">
                <a
                  href="tel:(+977)9843888957"
                  style={{ color: "#bdc3c7", textDecoration: "none" }}
                >
                  (+977)9843888957
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
