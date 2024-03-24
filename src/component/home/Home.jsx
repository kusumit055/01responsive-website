import React from "react";
import "./home.css";
export default function Home() {
  return (
    <>
      <div className="header min-vh-80 pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-white">HPE Discover 2024</h2>
              <p className="text-white ">
                HPE Monday launched at HPE Discover its first-ever
                Everything-as-a-Service GreenLake ecosystem channel program.
                Here are 10 big things to know about HPE’s new Partner Ready
                Vantage program.
              </p>
              <div className="row">
                <div className="col-md-6 text-center">
                  <div className="btn btn-primary">
                    Look at this&nbsp;<i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="col-md-6 float-md-start">
                  <div className="btn btn-success">
                    Discover on Image&nbsp;
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image w-70 float-auto float-md-end">
                <img
                  className="w-100"
                  src="./src/accetes/photo1.webp"
                  alt="remove"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
