import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from "uuid";
import "./cinema.css";
import MovieCard from "./MovieCard";
import { useTranslation } from "react-i18next";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";

export default function Cinema() {
  // States
  const { movies } = useContext(DataContext);
  const [TopNav, setTopNav] = useState("All");
  const { t, i18n } = useTranslation();

  // Functions
  const handleClickTopNav = useCallback((val) => {
    setTopNav(val);
  }, []);

  return (
    <>
      {!movies ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center"
            style={{ direction: i18n.language === "ar" ? "rtl" : "" }} >
            <h1 className="my-2">{t("El-Rehab Cinema")}</h1>
            <Link className="ps-md-0 ps-3 ms-md-4 ms-0 nav-link text-muted mb-3 "
              to="https://www.google.com/maps/place/Al+Rehab+Cinema/@30.059036,31.4958799,15z/data=!4m6!3m5!1s0x14581888bcacb1bb:0x417640e69aeaea98!8m2!3d30.059036!4d31.4958799!16s%2Fg%2F1tdhvt25?entry=ttu" >
              <h5>
                <i className="fa-solid fa-location-dot"></i> {t("Inside El-Rehab Mall 1")}
              </h5>
            </Link>


            <div className="d-flex mx-auto ">

              <div className="col-md-4   ">
                <div className="">
                  <button
                    type="button" onClick={() => handleClickTopNav("All")} className="btn dark-btn rounded-0 w-100" >
                    {t("All")}
                  </button>
                </div>
              </div>

              <div className="col-md-4">
                <button type="button" onClick={() => handleClickTopNav("ThisWeek")} className="btn dark-btn rounded-0 w-100" >
                  {t("This Week")}
                </button>
              </div>

              <div className="col-md-4">
                <button type="button" onClick={() => handleClickTopNav("NextWeek")} className="btn dark-btn rounded-0 w-100" >
                  {t("Coming Soon")}
                </button>
              </div>


            </div>

            {movies.map((movie) => {
              if (TopNav === "All") {
                return <MovieCard key={uuid()} movie={movie}></MovieCard>;
              } else if (TopNav === "ThisWeek" && movie.soon === false) {
                return <MovieCard key={uuid()} movie={movie}></MovieCard>;
              } else if (TopNav === "NextWeek" && movie.soon === true) {
                return <MovieCard key={uuid()} movie={movie}></MovieCard>;
              }
            })}
            <PopUp></PopUp>
          </div>
        </div>
      )}
    </>
  );
}
