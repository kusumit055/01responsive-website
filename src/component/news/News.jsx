import React from "react";
import "./News.css";
export default function News() {
  return (
    <div className="container-fluid container1">
      <div className="container my-4 text-center">
        <div className="d-md-flex dflex2 align-items-center justify-content-between">
          <div className="first my-4">
            <div className="card w-100 m-auto">
              <img
                src="./src/accetes/image2.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="second my-4">
            <div className="card w-75 uper m-auto">
              <img
                src="./src/accetes/image3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="third my-4">
            {" "}
            <div className="card w-75 uper m-auto">
              <img
                src="./src/accetes/image4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="four my-4">
            <div className="card w-100 m-auto">
              <img
                src="./src/accetes/photo1.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
