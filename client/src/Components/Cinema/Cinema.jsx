import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from "uuid";
import "./cinema.css";
import MovieCard from "./MovieCard";
import { useTranslation } from "react-i18next";
import PopUp from "./PopUp";

export default function Cinema() {
  const { movies } = useContext(DataContext);
  const [TopNav, setTopNav] = useState("All");
  const { t, i18n } = useTranslation();


  const handleClickTopNav = useCallback((val) => {
    setTopNav(val);
  },[]);

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
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "",
                      // textAlign: i18n.language === "ar" ? "right" : "",
                    }}
          >
            <h1 className="my-2">{t("El-Rehab Cinema")}</h1>
            <a
              className="ps-md-0 ps-3 ms-md-4 ms-0 nav-link text-muted mb-3 "
              href="https://www.google.com/maps/place/Al+Rehab+Cinema/@30.059036,31.4958799,15z/data=!4m6!3m5!1s0x14581888bcacb1bb:0x417640e69aeaea98!8m2!3d30.059036!4d31.4958799!16s%2Fg%2F1tdhvt25?entry=ttu"
            >
              <h5>
                <i className="fa-solid fa-location-dot"></i> {t("Inside El-Rehab Mall 1")}
              </h5>
            </a>
            <div className="d-flex justify-content-around my-2">
              <button
                type="button"
                onClick={() => handleClickTopNav("All")}
                className="btn btn-success col-md-4 w-25"
              >
                {t("All")}
              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("ThisWeek")}
                className="btn btn-success col-md-4 w-25"
              >
                {t("This Week")}
              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("NextWeek")}
                className="btn btn-success col-md-4 w-25"
              >
                {t("Coming Soon")}
              </button>
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
