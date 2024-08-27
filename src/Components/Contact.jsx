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
      <div className="text-center">
        <h2
          className="display-4"
          style={{
            color: "#bdc3c7",
            paddingTop: "10px",
            marginBottom: "50px",
          }}
        >
          Contact Me
        </h2>
      </div>

      <div className="container-contact">
        <div className="row d-flex justify-content-center m-0">
          <div className="col-md-10 mx-sm-3px text-center">
            <div
              className="d-flex flex-column align-items-center justify-content-center mb-5 flex-wrap"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                // padding: "10px",
                minHeight: "200px",
                margin: "20px",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <h3 className="mt-4">Email</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <p
                  className="mail"
                  style={{
                    margin: "0",
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <a
                    href="mailto:sujanapyakurel2000@gmail.com"
                    style={{
                      color: "#bdc3c7",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    sujanapyakurel2000@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-10 text-center">
            <div
              className="d-flex flex-column align-items-center justify-content-center p-4 mb-4"
              style={{
                backgroundColor: "#2c3e50",
                borderRadius: "10px",
                color: "#bdc3c7",
                minHeight: "200px",
                margin: "20px",
              }}
            >
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
