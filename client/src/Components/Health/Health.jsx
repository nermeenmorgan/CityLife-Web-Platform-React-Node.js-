import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Pharmacies from "./Pharmacies";
import Centers from "./Centers";
import { useTranslation } from "react-i18next";

export default function Health() {
  const [TopNav, setTopNav] = useState("Pharmacies");
  const { t } = useTranslation();

  const handleClickTopNav = (val) => {
    setTopNav(val);
  };

  return (
    <>
      <div>
        <div className="mt-4 mb-2 ">
          <div className="text-center">
            <div
              className="container p-3"
              style={{
                height: 300,
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                borderRadius: 20,
              }}
            >
              <h4
                className="text-center offset-3 fw-bold w-50 p-2 mb-5"
                style={{
                  backgroundColor: "#CEE9D8",
                  borderRadius: 10,
                  boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                }}
              >
                {t("Promoting Health and Wellness in Rehab")}
              </h4>
              <div
                style={{ height: "50%", width: "50%", marginLeft: "30%" }}
                className="d-flex justify-content-evenly align-content-center align-items-center "
              >
                <div className="col-md-6">
                  <div style={{ fontWeight: "bold", fontSize: 18 }}>
                    {t("About Healthcare Facilities")}
                  </div>
                  <p style={{ fontSize: 13 }}>
                    {t(
                      "Experience a comprehensive approach to health and wellness in Rehab City, Egypt. Our community is dedicated to providing top-notch healthcare services and facilities to residents. Whether you're in need of medical care, preventive services, or specialized treatments, you'll find a range of options to meet your healthcare needs."
                    )}
                  </p>
                </div>
                <div
                  style={{ marginLeft: "60%", marginTop: "5%", textAlign: "center" }}
                  className="col-md-6 d-flex flex-column justify-content-center align-items-center"
                >
                  <img
                    src="/images/healthImg.png"
                    className=" w-50 h-50 rounded-4 mb-3"
                    alt="Cover Image"
                    style={{ marginTop: "-10%" }}
                  />
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex">
                      <button
                        style={{
                          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                          color: "white",
                          width: "150px",
                          height: 40,
                        }}
                        type="button"
                        onClick={() => handleClickTopNav("Centers")}
                        className="btn ms-5 btn-success   hoverEff text-center fs-5 fw-bold"
                      >
                        {t("Centers")}
                      </button>
                      <button
                        style={{
                          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                          color: "white",
                          width: "150px",
                          height: 40,
                        }}
                        type="button"
                        onClick={() => handleClickTopNav("Pharmacies")}
                        className="btn ms-5 btn-success hoverEff  text-center fs-5 fw-bold "
                      >
                        {t("Pharmacies")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {TopNav === "Pharmacies" ? (
              <Pharmacies key={uuid()}></Pharmacies>
            ) : TopNav === "Centers" ? (
              <Centers key={uuid()}></Centers>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}