import React, { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";
import "../../App.css";
import './Navbar.module.css'
export default function Navbar() {
  // States
  const { userData, AllIDsNames } = useContext(DataContext);
  const { DeleteUserData } = useContext(DataContext);
  const [itemID, setIDitem] = useState("");
  const navigate = useNavigate();
  const [lang, setLang] = useState("");
  const { t, i18n } = useTranslation();









  // Functions
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

  useEffect(() => {
    i18n.language === "ar" ? setLang("En") : setLang("Ar");
  }, [i18n.language]);

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
      <nav className="navbar navbar-expand-lg bg-main-light p-0  w-100" style={{ direction: i18n.language === "ar" ? "rtl" : "ltr", zIndex: 99, position: "sticky", top: 0, }} >

        <div className="container ">


          <Link className="navbar-brand" to="">
            <img src="/images/logo-citylife.png" style={{ width: 55 }} className="navLogo" alt="Logo"
              onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} />
          </Link>
          <button className="navbar-toggler rounded-1" style={{ backgroundColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className={`nav-item `}>
                <Link className="nav-link text-white" aria-current="page" to="/" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }) }} >
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="about" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                  {t("About")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link  dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  {t("Services")}
                </Link>
                <ul className="dropdown-menu" style={{ textAlign: i18n.language === "ar" ? "right" : "left", }}>
                  <li>
                    <Link className="dropdown-item "
                      to="banks" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                      {t("Banks")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="markets" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Markets")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="hospitals" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Hospitals")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="education" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Education")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="cinema" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Cinema")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="payment" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Payment")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link  dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  {t("Categories")}
                </Link>
                <ul className="dropdown-menu" style={{ textAlign: i18n.language === "ar" ? "right" : "left", }} >
                  <li>
                    <Link className="dropdown-item" to="restaurants" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Restaurants")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="shopping" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                      {t("Shopping")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item" to="fashion" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Fashion")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item" to="health" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Health")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="sports" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Sports")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="maintenance" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Maintenance")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="homeServices" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Home Services")}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="transportation" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      {t("Transportation")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="contactus" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                  {t("Contact us")}
                </Link>
              </li>
              {userData !== null &&
                userData.id === "648a002ac64b570033765c4b" && (
                  <li className="nav-item">
                    <Link className="nav-link text-white " to="dashboard" onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}> {t("DashBoard")} </Link>
                  </li>
                )}
            </ul>
            <ul className={`d-flex m-0 p-0
             ${i18n.language === "ar" ? "me-lg-auto" : "ms-lg-auto"}`} >

              <form
                className="d-flex align-items-center" onSubmit={handleSubmit} >
                <div className={`input-group ${i18n.language === "ar" && "d-flex flex-lg-row-reverse "}`} >
                  <div className="form-outline input-search">
                    <input type="text" value={itemID} onChange={handleChange} className=" form-control rounded-0  " list="searchList" id="exampleDataList" placeholder={t("Type to search...")} autoComplete="off" />
                  </div>
                  <button type="submit" className="btn btn-secondary border-0">
                    <i className="fas fa-search p-0"></i>
                  </button>
                </div>
                <datalist id="searchList">
                  {AllIDsNames.map((ele, index) => (
                    <option key={index} value={t(ele.name)}>
                    </option>
                  ))}
                </datalist>


                {/* Language */}
                <div className="d-flex flex-column justify-content-center fw-semibold">
                  <button className="btn btn-mainColor-nav " onClick={ToggleLang} >{lang}</button>
                </div>
              </form>

              {userData === null ? (
                <div className="mt-lg-0  ">
                  <Link className=" nav-item btn text-white rounded-1 mx-lg-2 mx-0 btn-mainColor-nav" aria-current="page" to="signin" >
                    {t("Sign in")}
                  </Link>
                </div>
              ) : (
                <div className="mt-lg-0 d-flex justify-content-center align-items-center ">
                  <button className="nav-item text-white btn rounded-1 mx-0 btn btn-mainColor-nav" onClick={() => { DeleteUserData(); navigate('/') }} >
                    {t("Sign out")}
                  </button>
                  <button className="btn btn-mainColor-nav">
                    <Link className=" text-white d-inline-block" to="profile">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </button>
                </div>
              )}
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}
