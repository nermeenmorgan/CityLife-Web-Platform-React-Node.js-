import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-main-light text-muted mt-5">
        <section className="pt-2">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-2">About</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="/about"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      About City
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="https://www.talaatmoustafa.com/Default.aspx"
                      className="nav-link p-0 text-muted"
                    >
                      TMG
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="#"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Terms of services
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-2">Services</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="banks"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Banks
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="markets"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Markets
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="hospitals"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Hospitals
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="education"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Education
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="cinema"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Cinema
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="payment"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Payment
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links  */}
                <h6 className="text-uppercase fw-bold mb-2">Categories</h6>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <Link
                      to="restaurants"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Restaurants
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="shopping"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Shopping
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="fashion"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Fashion
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="health"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Health
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="sports"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="maintenance"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Maintenance
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="homeServices"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Home Services
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="transportation"
                      className="nav-link p-0 text-muted"
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Transportation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-2">Follow Us</h6>
                <div className="mb-4">
                  <a href="https://www.facebook.com/AlRehabCityHall" className="me-4 text-reset">
                    <i
                      className="fab fa-facebook-f fa-xl"
                      style={{ color: "#4267B2" }}
                    ></i>
                  </a>
                  <a href="https://twitter.com/ASeifeen" className="me-4 text-reset">
                    <i
                      className="fab fa-twitter fa-xl"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                  <a href="https://www.youtube.com/@alrehabcityhall9255" className="me-4 text-reset">
                    <i
                      className="fab fa-youtube fa-xl"
                      style={{ color: "red" }}
                    ></i>
                  </a>
                  <a href="https://www.instagram.com/rehabcityresidentialnews/" className="me-4 text-reset">
                    <i
                      className="fab fa-instagram fa-xl"
                      style={{ color: "#f56200" }}
                    ></i>
                  </a>
                </div>

                <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                <p>
                  <i className="fas fa-location me-3"></i>New Cairo, Cairo,
                  Egypt
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  Rehab@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +20 111 28 90765
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +20 87 48 121
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +20 87 48 123
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba (0, 0, 0, 0.05)" }}
        >
          <p className="text-reset ">
            Copyright © 2023: El-Rehab City and related marks are registered
            trademarks of TMG.
          </p>
        </div>
      </footer>
    </>
  );
}
