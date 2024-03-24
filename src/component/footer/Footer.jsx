import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container ">
        <div className="row ">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto  mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Company Name
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              eius maiores commodi rem, ex animi. Repudiandae voluptatum tenetur
              ipsa ab odit. Repudiandae, ipsum ea necessitatibus quod
              accusantium minima unde provident!
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto float-left mt-3">
            <div className="text-uppercase mb-4 font-weight-bold text-warning">
              Products
            </div>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                The Providers
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Creativity
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                SourceFiles
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Bootstraps 5
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2  mt-3">
            <div className="text-uppercase mb-4 font-weight-bold text-warning">
              Useful Links
            </div>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Your Account
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Become an Affiliates
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Sopping Rates
              </a>
            </p>
            <p>
              <a
                href="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Help
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <div className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </div>
            <p>
              <i class="fa-solid fa-house"></i>&nbsp;New Work, NY2333, US
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>&nbsp;Example@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-phone-volume"></i>&nbsp;+91 7970390389
            </p>
            <p>
              <i class="fa-solid fa-print"></i>&nbsp;@copyright
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              copyright @2024 all right receved by:
              <a href="/" style={{ textDecoration: "none" }}>
                {" "}
                <strong className="text-warning">The Providers</strong>{" "}
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fa-brands fa-google"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item ml-md-2">
                  <a
                    href="/"
                    className="btn-floating btn-sm text-white ml-md-2 "
                    style={{ fontSize: "23px" }}
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
