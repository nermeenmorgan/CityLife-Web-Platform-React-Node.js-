import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Pharmacies from "./Pharmacies";
import Centers from "./Centers";
import { useTranslation } from "react-i18next";

export default function Health() {
  const [TopNav, setTopNav] = useState("Pharmacies");
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
              {t("Promoting Health and Wellness in Rehab")}
            </h2>
            <p className="fs-5 text-muted mb-4">
              {t(
                "Experience a comprehensive approach to health and wellness in Rehab City, Egypt. Our community is dedicated to providing top-notch healthcare services and facilities to residents. Whether you're in need of medical care, preventive services, or specialized treatments, you'll find a range of options to meet your healthcare needs."
              )}
            </p>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={() => handleClickTopNav("Centers")}
                className={`btn btn-lg btn-success me-3 ${
                  TopNav === "Centers" ? "active" : ""
                }`}
              >
                {t("Centers")}
              </button>
              <button
                type="button"
                onClick={() => handleClickTopNav("Pharmacies")}
                className={`btn btn-lg btn-success ${
                  TopNav === "Pharmacies" ? "active" : ""
                }`}
              >
                {t("Pharmacies")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {TopNav === "Pharmacies" ? (
        <Pharmacies key={uuid()}></Pharmacies>
      ) : TopNav === "Centers" ? (
        <Centers key={uuid()}></Centers>
      ) : null}
    </>
  );
}