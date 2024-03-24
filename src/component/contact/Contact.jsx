import React from "react";
import "./Content.css";
function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5 mb-4">
            <h2>Some Heading Goes Here</h2>
          </div>
          <div className="col-md-4">
            <div className="d-flex dflex align-items-center flex-column mt-4 mb-5 pt-4 pb-4 px-4">
              <div className="icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <h3 className="title  my-3">Coding</h3>
              <div className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                qui saepe inventore non, cupiditate cum possimus numquam odio!
                Asperiores eos nemo debitis harum animi nihil aspernatur
                accusantium cumque minus ab!
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex dflex align-items-center flex-column mt-4 mb-5 pt-4 pb-4 px-4">
              <div className="icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <h3 className="title my-3">User</h3>
              <div className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                qui saepe inventore non, cupiditate cum possimus numquam odio!
                Asperiores eos nemo debitis harum animi nihil aspernatur
                accusantium cumque minus ab!
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex dflex align-items-center flex-column mt-4 mb-5 pt-4 pb-4 px-4">
              <div className="icon">
                <i class="fa-solid fa-diamond"></i>
              </div>
              <h3 className="title my-3">Diamond</h3>
              <div className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                qui saepe inventore non, cupiditate cum possimus numquam odio!
                Asperiores eos nemo debitis harum animi nihil aspernatur
                accusantium cumque minus ab!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
