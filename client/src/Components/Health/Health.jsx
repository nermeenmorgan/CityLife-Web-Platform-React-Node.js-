import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Pharmacies from "./Pharmacies";
import Centers from "./Centers";
import { useTranslation } from "react-i18next";

export default function Health() {
  const [TopNav, setTopNav] = useState("All");
  const { t } = useTranslation();
  const translatedText = t(
    "Experience a comprehensive approach to health and wellness in Rehab City, Egypt. Our community is dedicated to providing top-notch healthcare services and facilities to residents. Whether you're in need of medical care, preventive services, or specialized treatments, you'll find a range of options to meet your healthcare needs. Explore the following information to learn more about the health services available in Rehab City."
  );

  const handleClickTopNav = (val) => {
    setTopNav(val);
  };

  return (
    <>
      <div>
        <div className="mt-4 ">
          <div className="text-center">
            <div
              className="container p-5"
              style={{
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                borderRadius: 20,
              }}
            >
              <h3
                className="text-center offset-3 fw-bold w-50 p-3 mb-5"
                style={{
                  backgroundColor: "#CEE9D8",
                  borderRadius: 10,
                  boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                }}
              >
                {t("Promoting Health and Wellness in Rehab")}
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div style={{ fontWeight: "bold", fontSize: 18 }}>
                    {t("About Healthcare Facilities")}
                  </div>
                  <p style={{ fontSize: 14 }}>
                    {translatedText}
                  </p>
                  <div className="d-flex  mb-3">
                    <i
                      className="fa-solid fa-heart fa-2x me-3"
                      style={{ color: "black" }}
                    ></i>
                    <div style={{ fontSize: 16, fontWeight: "bold" }}>
                      {t("Pharmacies")}
                    </div>
                  </div>
                  <div style={{ fontSize: 14 }}>
                    {t("Rehab City boasts a network of pharmacies that offer a wide range of medications and healthcare products. These pharmacies are staffed with knowledgeable pharmacists who can provide expert advice and guidance on medication usage, dosage, and potential interactions. Whether you're looking for prescription medications, over-the-counter drugs, or health supplements, you can rely on the pharmacies in Rehab City to fulfill your needs.")}
                  </div>

                  <div className="d-flex  mb-3 mt-5">
                    <i
                      className="fa-solid fa-hospital fa-2x me-3"
                      style={{ color: "black" }}
                    ></i>
                    <div style={{ fontSize: 16, fontWeight: "bold" }}>
                      {t("Health Centers")}
                    </div>
                  </div>
                  <div style={{ fontSize: 14 }}>
                    {t("The health centers in Rehab City are equipped with modern medical facilities and staffed by experienced healthcare professionals. These centers offer a wide range of services, including general medical consultations, specialized clinics, diagnostic tests, vaccinations, and more. Whether you're seeking routine check-ups, treatment for a specific condition, or emergency care, the health centers in Rehab City are committed to providing high-quality healthcare services to ensure your well-being.")}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="container-fluid position-relative">
                    <div className="row">
                      <div className="col-12 p-0  position-relative w-100 h-100">
                        <div className="d-flex justify-content-start me-5">
                          <img
                            src="images/healthImg.png"
                            className="img-fluid mx-auto h-100 mb-5"
                            alt="Cover Image"
                          />
                        </div>

                        <div className="row justify-content-around ">
                          <div className="d-flex">
                            <button
                              style={{
                                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                color: "white",
                              }}
                              type="button"
                              onClick={() => handleClickTopNav("Centers")}
                              className="btn ms-5 btn-success  w-50 hoverEff text-center fs-5 fw-bold"
                            >
                              Centers
                            </button>
                            <button
                              style={{
                                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                color: "white",
                              }}
                              type="button"
                              onClick={() => handleClickTopNav("Pharmacies")}
                              className="btn ms-5 btn-success hoverEff w-50 text-center fs-5 fw-bold"
                            >
                              {t("Pharmacies")}
                            </button>
                          </div>
                        </div>
                      </div>
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
