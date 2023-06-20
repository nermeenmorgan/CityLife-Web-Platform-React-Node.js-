import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { userData, AllIDsNames } = useContext(DataContext);
  const { DeleteUserData } = useContext(DataContext);
  const [itemID, setIDitem] = useState("");
  const navigate = useNavigate();
  const [lang, setLang] = useState("");
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

  useEffect(()=>{
    i18n.language === "ar" ?  setLang("English") :  setLang("عربي")
  },[i18n.language])

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
      <nav
        className="navbar navbar-expand-lg bg-main-light p-0 w-100"
        style={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
          zIndex: 99,
          position: "sticky",
          top: 0,
        }}
      >
        {/* <Link className="navbar-brand" to="">
            <img
              src="/images/logo-no-background.svg"
              style={{ width: 60 }}
              alt="Logo"
            />
          </Link> */}
        <div className="container">
          <Link className="navbar-brand" to="">
            <img
              src="/images/logo-no-background.svg"
              style={{ width: 60 }}
              alt="Logo"
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
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
                <Link
                  className="nav-link fw-semibold"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold"
                  to="about"
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {t("About")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fw-semibold dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Services")}
                </Link>
                <ul className="dropdown-menu"
                style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="banks"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Banks")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="markets"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Markets")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="hospitals"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Hospitals")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="education"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Education")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="cinema"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Cinema")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="payment"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Payment")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link fw-semibold dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("Categories")}
                </Link>
                <ul className="dropdown-menu"
                 style={{
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="restaurants"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Restaurants")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="shopping"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Shopping")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="fashion"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Fashion")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="health"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Health")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="sports"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Sports")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="maintenance"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Maintenance")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="homeServices"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Home Services")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="transportation"
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      {t("Transportation")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-semibold"
                  to="contactus"
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  {t("Contact us")}
                </Link>
              </li>
              {userData !== null &&
                userData.id === "648a002ac64b570033765c4b" && (
                  <li className="nav-item">
                    <Link className="nav-link fw-semibold" to="dashboard">
                      {t("DashBoard")}
                    </Link>
                  </li>
                )}
            </ul>
            <ul
              className={`d-flex flex-lg-row align-items-lg-center flex-column mt-3  ms-0 ps-0 ${
                i18n.language === "ar" ? "me-lg-auto" : "ms-lg-auto"
              }`}
            >
              {/* <button
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
              </button> */}
              <form
                className="d-flex align-items-center me-2"
                onSubmit={handleSubmit}
              >
                <div
                  className={`input-group ${
                    i18n.language === "ar" && "d-flex flex-lg-row-reverse"
                  }`}
                >
                  <div className="form-outline">
                    <input
                      type="text"
                      value={itemID}
                      onChange={handleChange}
                      className="form-control rounded-0 border-2 border-grey  shadow-none"
                      list="searchList"
                      id="exampleDataList"
                      placeholder={t("Type to search...")}
                      autoComplete="off"
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary border-0">
                    <i className="fas fa-search p-0"></i>
                  </button>
                </div>
                <datalist id="searchList">
                  {AllIDsNames.map((ele, index) => (
                    <option key={index} value={t(ele.name)}>
                      {/* {ele.name} */}
                    </option>
                  ))}
                </datalist>
              </form>

              {userData === null ? (
                <div className="mt-lg-0 mt-4 "
                // style={{
                //   width:"100px",
                //   height:"50px"
                // }}
                >
                  <Link
                    className=" nav-item btn text-white rounded-1 mx-lg-2 mx-0 btn-mainColor"
                    
                    aria-current="page"
                    to="signin"
                  >
                    {t("Sign in")}
                  </Link>
                  {/* <Link
                    className=" text-white btn btn-success rounded-3 mx-2 btn-mainColor"
                    to="signup"                  
                  >
                    {t("Sign up")}
                  </Link> */}
                </div>
              ) : (
                <div className="mt-lg-0 mt-4">
                  <button
                    className="nav-item text-white btn rounded-1 mx-lg-2 mx-0 btn-mainColor"
                    onClick={() => {
                      DeleteUserData();
                    }}
                  >
                    {t("Sign out")}
                  </button>
                  <Link className=" btn btn-dark" to="profile">
                    <i className="fa-solid fa-user"></i>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
        <button
          style={{
            fontSize: 13,
            border: "none",
            background: "none",
          }}
          onClick={ToggleLang}
        >
          <div className="d-flex flex-column justify-content-center fw-semibold">
            {/* <li
                    className="fa-solid fa-globe fa-2x"
                    style={{ color: "#123b1c" }}
                  ></li> */}
            {lang}
          </div>
        </button>
      </nav>
    </>
  );
}
