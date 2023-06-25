import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Schools from "./schools";
import { useTranslation } from "react-i18next";
import Kindergarten from "./kindergarten";


export default function Education() {
  // States
  const [TopNav, setTopNav] = useState("Schools");
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
        {/* Header */}
        <div className='container-fluid lightGreyBg py-3'>
          <h2 className="lightGreenColor text-center m-0">
            {t("Education")}
          </h2>
        </div>


        {/* Card */}
        <div className="mx-auto my-2">
          <div className="row justify-content-center m-0">
            <div className="col-md-6 ">

              <p className="fs-5 text-muted text-center mb-4">
                {t("Discover the best schools in Rehab Egypt and give your child the gift of quality education. Our featured schools are dedicated to providing exceptional learning experiences.  The campuses of the schools in Al Rehab City are well-designed and spacious, with modern facilities.")}
              </p>


              {/* Buttons */}
              <div className="text-center">
                <button type="button" onClick={() => handleClickTopNav("Schools")} className={`btn dark-btn text-center rounded-1 w-50  ${TopNav === "Centers" ? "active" : ""}`} >
                  {t("Schools")}
                </button>
                <button type="button" onClick={() => handleClickTopNav("Kindergartens")} className={`btn dark-btn text-center rounded-1 w-50  ${TopNav === "Centers" ? "active" : ""}`} >
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
      </div>
    </>
  );
}
