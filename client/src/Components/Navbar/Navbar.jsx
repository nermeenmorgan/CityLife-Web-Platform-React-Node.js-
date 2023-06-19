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
      <nav className="navbar navbar-expand-lg bg-main-light"
        style={{
          direction: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
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
                  {t("About")}
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
                  {t("Services")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="banks">
                      {t("Banks")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="markets">
                      {t("Markets")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="hospitals">
                      {t("Hospitals")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="education">
                      {t("Education")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="cinema">
                      {t("Cinema")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="payment">
                      {t("Payment")}
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
                  {t("Categories")}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="restaurants">
                      {t("Restaurants")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="shopping">
                      {t("Shopping")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="fashion">
                      {t("Fashion")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="health">
                      {t("Health")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="sports">
                      {t("Sports")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="maintenance">
                      {t("Maintenance")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="homeServices">
                      {t("Home Services")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="transportation">
                      {t("Transportation")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contactus">
                  {t("Contact us")}
                </Link>
              </li>
              {userData !== null &&
                userData.id === "648a002ac64b570033765c4b" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="dashboard">
                      {t("DashBoard")}
                    </Link>
                  </li>
                )}
            </ul>
            <ul className={`d-flex flex-lg-row align-items-lg-center flex-column mt-3  ms-0 ps-0 ${i18n.language === "ar" ? "me-lg-auto" : "ms-lg-auto"}`}>
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
                <div className={`input-group ${i18n.language === "ar" && "d-flex flex-lg-row-reverse"}`}>
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
                    <option key={index} value={t(ele.name)}>
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
                    {t("Sign in")}
                  </Link>
                  <Link
                    className=" text-white btn btn-success rounded-3 mx-2"
                    to="signup"
                  >
                    {t("Sign up")}
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
                    {t("Sign out")}
                  </button>
                  <Link
                    className=" btn btn-dark"
                    to="profile"
                  >
                    <i class="fa-solid fa-user"></i>
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
