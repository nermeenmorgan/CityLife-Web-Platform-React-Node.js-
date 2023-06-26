import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Pharmacies from "./Pharmacies";
import Centers from "./Centers";
import { useTranslation } from "react-i18next";

export default function Health() {
  // Stated
  const [TopNav, setTopNav] = useState("Pharmacies");
  const { t, i18n } = useTranslation();

  // Functions
  const handleClickTopNav = (val) => {
    setTopNav(val);
  };

  return (
    <>
          <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className="lightGreenColor text-center m-0">
          {t("Health")}
        </h2>
      </div>



      <div className="w-50 mx-auto my-2">
        <div className="row justify-content-center">
          <div className="col-md-12">

            <p className="fs-5 text-muted mb-4">
              {t("Discover the best schools in Rehab Egypt and give your child the gift of quality education. Our featured schools are dedicated to providing exceptional learning experiences.  The campuses of the schools in Al Rehab City are well-designed and spacious, with modern facilities.")}
            </p>


            {/* Buttons */}
            <div className="text-center">
              <button type="button" onClick={() => handleClickTopNav("Centers")} className="btn dark-btn rounded-1 w-25 mx-2 " >
                {t("Centerss")}
              </button>
              <button type="button" onClick={() => handleClickTopNav("Pharmacies")} className="btn dark-btn w-25 rounded-1 mx-2 " >
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
      </div>
    </>
  );
}