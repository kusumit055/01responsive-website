import React from "react";
import "./Service.css";

function Service() {
  return (
    <header className="section orange">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="logo float-auto float-md-start">Sumit Kumar</div>
          </div>
          <div className="col-md-8 text-center">
            <ul className="menu float-auto float-md-end">
              <li className="d-sm-inline-block px-3">
                {" "}
                <a href="/">Home</a>{" "}
              </li>
              <li className="d-sm-inline-block px-3">
                {" "}
                <a href="/">About</a>{" "}
              </li>
              <li className="d-sm-inline-block  px-3">
                {" "}
                <a href="/">Content</a>{" "}
              </li>
              <li className="d-sm-inline-block px-3">
                {" "}
                <a href="/">Service</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Service;
