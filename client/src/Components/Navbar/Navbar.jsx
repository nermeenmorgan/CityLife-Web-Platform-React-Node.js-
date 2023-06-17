import React, { useCallback, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { userData, AllIDsNames } = useContext(DataContext);
  const { DeleteUserData } = useContext(DataContext);
  const [itemID, setIDitem] = useState("");
  const navigate = useNavigate();
  const [lang, setLang] = useState("English");
  const { t, i18n } = useTranslation();

  // search bar handling
  const handleChange = useCallback(
    (event) => {
      setIDitem(event.target.value);
      console.log(itemID);
    },
    [itemID]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (itemID) {
        navigate(`details/${itemID}`);
      }
      setIDitem("");
    },
    [itemID, navigate]
  );

  const ToggleLang = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
      setLang("English");
    } else {
      i18n.changeLanguage("en");
      setLang("عربي");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-main-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img
              src="/images/logo-no-background.svg"
              style={{ width: 60 }}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="banks">
                      Banks
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="markets">
                      Markets
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="hospitals">
                      Hospitals
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="education">
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="cinema">
                      Cinema
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="payment">
                      Payment
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="restaurants">
                      Restaurants
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="shopping">
                      Shopping
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="fashion">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="maintenance">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="homeServices">
                      Home Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="transportation">
                      Transportation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contactus">
                  Contact us
                </Link>
              </li>
              {userData !== null &&
                userData.id === "648a002ac64b570033765c4b" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard">
                      DashBoard
                    </Link>
                  </li>
                )}
            </ul>
            <ul className="d-flex flex-lg-row align-items-lg-center flex-column mt-3 ms-lg-auto ms-0 ps-0">
              <button
                style={{
                  fontSize: 13,
                  border: "none",
                  background: "none",
                }}
                onClick={ToggleLang}
              >
                <div className="d-flex flex-column justify-content-center">
                  <li
                    className="fa-solid fa-globe fa-2x"
                    style={{ color: "#123b1c" }}
                  ></li>
                  {lang}
                </div>
              </button>
              <form
                className="d-flex align-items-center me-2"
                onSubmit={handleSubmit}
              >
                <div className="input-group">
                  <div className="form-outline">
                    <input
                      type="text"
                      value={itemID}
                      onChange={handleChange}
                      className="form-control rounded-0 border-0 shadow"
                      list="searchList"
                      id="exampleDataList"
                      placeholder="Type to search..."
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary border-0">
                    <i className="fas fa-search p-0"></i>
                  </button>
                </div>
                <datalist id="searchList">
                  {AllIDsNames.map((ele, index) => (
                    <option key={index} value={ele.name}>
                      {/* {ele.name} */}
                    </option>
                  ))}
                </datalist>
              </form>

              {userData === null ? (
                <div className="mt-lg-0 mt-4">
                  <Link
                    className=" text-white btn btn-success rounded-3 mx-lg-2 mx-0"
                    aria-current="page"
                    to="signin"
                  >
                    Sign in
                  </Link>
                  <Link
                    className=" text-white btn btn-success rounded-3 mx-2"
                    to="signup"
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div className="mt-lg-0 mt-4">
                  <button
                    className="nav-item btn btn-success rounded-3 mx-lg-2 mx-0"
                    onClick={() => {
                      DeleteUserData();
                    }}
                  >
                    Sign out
                  </button>
                  <Link
                    className=" text-white bg-dark  rounded-circle p-2 ms-2 "
                    to="profile"
                  >
                    <i className="fa-solid fa-user"></i>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
