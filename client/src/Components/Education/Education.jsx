import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Schools from "./schools";

import { useTranslation } from "react-i18next";
import Kindergarten from "./kindergarten";


export default function Education() {
  
  const [TopNav, setTopNav] = useState("Schools");
  const { t, i18n } = useTranslation();
  const handleClickTopNav = (val) => {
    setTopNav(val);
  };


  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="fw-bold mb-4 text-center">
                {t("Education in Rehab")}
                </h2>
            <p className="fs-5 text-muted mb-4">
              {t("Discover the best schools in Rehab Egypt and give your child the gift of quality education. Our featured schools are dedicated to providing exceptional learning experiences.  The campuses of the schools in Al Rehab City are well-designed and spacious, with modern facilities.")}
              </p>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={() => handleClickTopNav("Schools")}
                className={`btn btn-lg btn-success me-3 ${
                  TopNav === "Centers" ? "active" : ""
                }`}
              >
                              {t("Schools")}
                              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("Kindergartens")}
                className={`btn btn-lg btn-success ${
                  TopNav === "Pharmacies" ? "active" : ""
                }`}
              >
                              {t("Kindergartens")}
                              </button>
            </div>
          </div>
        </div>
      </div>
            {TopNav === "Schools" ? (
              <Schools key={uuid()}></Schools>
            ) : TopNav === "Kindergartens" ? (
              <Kindergarten key={uuid()}></Kindergarten>
            ) : null}
    </>
  );
}
