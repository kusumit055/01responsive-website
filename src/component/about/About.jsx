import React from "react";
import "./About.css";
function About() {
  return (
    <div className="container-fauid py-5">
      <div className="row">
        <h2 className="text-center">About Us</h2>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card card1">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "21px",
                    borderBottom: "1px solid red",
                    width: "10%",
                    paddingBottom: "8px",
                  }}
                >
                  Skills
                </h5>

                <p className="card-text my-3">
                  <div className="web-skil mb-3">
                    <div className="d-flex justify-content-around">
                      <div className="HTml">HTML</div>
                      <div className="skill-length">
                        <div className="skill-in"></div>
                      </div>
                      <div className="persantage">90%</div>
                    </div>
                  </div>
                  <div className="web-skil mb-3">
                    <div className="d-flex justify-content-around">
                      <div className="HTml">CSS</div>
                      <div className="skill-length">
                        <div className="skill-in css-in"></div>
                      </div>
                      <div className="persantage">70%</div>
                    </div>
                  </div>
                  <div className="web-skil mb-3">
                    <div className="d-flex justify-content-around">
                      <div className="HTml">JAVASCRIPT</div>
                      <div className="skill-length">
                        <div className="skill-in javascript-in"></div>
                      </div>
                      <div className="persantage">50%</div>
                    </div>
                  </div>
                  <div className="web-skil mb-3">
                    <div className="d-flex justify-content-around">
                      <div className="HTml">BOOTSTRAPS</div>
                      <div className="skill-length">
                        <div className="skill-in javascript-in"></div>
                      </div>
                      <div className="persantage">60%</div>
                    </div>
                  </div>
                  <div className="web-skil">
                    <div className="d-flex justify-content-around">
                      <div className="HTml">REACT JS</div>
                      <div className="skill-length">
                        <div className="skill-in javascript-in"></div>
                      </div>
                      <div className="persantage">70%</div>
                    </div>
                  </div>
                </p>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card card1">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "21px",
                    borderBottom: "1px solid red",
                    width: "20%",
                    paddingBottom: "8px",
                  }}
                >
                  Introduction
                </h5>
                <p className="card-text">
                  <div>
                    I am Sumit Kumar.I belong to Bihar But i currently present
                    in meerut of Utterperdeash. i am doing B.tech from Swami
                    Vivekanand Subhsrti University.My Strength is that i am
                    self-motivated person and my hobby is to watch movie.
                  </div>
                </p>
                <a href="#" className="btn btn-primary">
                  Thank you.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
