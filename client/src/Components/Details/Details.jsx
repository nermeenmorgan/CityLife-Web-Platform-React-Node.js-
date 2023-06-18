import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";

export default function Details() {
  const { t, i18n } = useTranslation();

  const { All } = useContext(DataContext);
  const { id } = useParams();

  for (let category of Object.values(All)) {
    for (let ele of category) {
      if (t(ele.name) === t(id)) {
        console.log(ele.name);
        return (
          <>
            <div className="container">
              <div
                className="row"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "",
                  textAlign: i18n.language === "ar" ? "right" : "",
                }}
              >
                <div className="d-flex flex-row justify-content-between align-items-center border shadow rounded-4 my-3 p-4">
                  <div className="col-sm-12 col-lg-6">
                    <div className="d-flex align-items-center mb-3">
                      {ele.logo && (
                        <img
                          src={ele.logo}
                          alt={t(ele.name)}
                          className="rounded-circle shadow"
                          style={{ width: "80px", height: "80px" }}
                        />
                      )}
                      <h2 className="ms-5">{t(ele.name)}</h2>
                      {(ele.Rating || ele.rating) && (
                        <h6 className="ms-2 card-title">
                          <i
                            className="fa-sharp fa-solid fa-star me-2"
                            style={{ color: "#ffdf0f" }}
                          />
                          {t(ele.Rating) || t(ele.rating)}
                        </h6>
                      )}
                    </div>
                    <p className="opacity-75">{t(ele.overview)}</p>
                    <p className="fw-bold"> {t(ele.dur)} </p>

                    {ele.actors && (
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span className="fw-bolder">{t("Type")}:</span>{" "}
                          {t(ele.type)}
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>
                            <span className="fw-bolder">{t("Language")}:</span>
                            {t(ele.language)}
                          </span>
                          <span>
                            <span className="fw-bolder">{t("Country")}:</span>
                            {t(ele.country)}
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="fw-bolder">{t("Cast")}:</span>{" "}
                          {t(ele.actors)}
                        </li>
                      </ul>
                    )}
                    {ele.number && (
                      <p>
                        {t("Call Center:")}
                        <span className=" fw-bold">{ele.number}</span>
                      </p>
                    )}
                    {ele.website && (
                      <p>
                        {t("website :")}
                        <Link to={ele.website} target="_blank">
                          {ele.website}
                        </Link>
                      </p>
                    )}
                    <div className="d-sm-block d-md-flex ">
                      {ele.location && (
                        <div className="">
                          <p>{t(ele.address)}</p>
                          <Link
                            to={ele.location}
                            target="_blank"
                            className="ms-2"
                          >
                            <i className="fa-solid fa-location-dot fa-xl"></i>
                          </Link>
                        </div>
                      )}
                      {ele.workinghours && (
                        <p className="pe-0">
                          {" "}
                          {t("Working hours:")} {t(ele.workinghours)}
                        </p>
                      )}
                    </div>
                    {ele.line1 && (
                      <>
                        <p>
                          {t("Line 1:")}
                          <span className=" fw-bold">{t(ele.line1)}</span>
                        </p>
                        <p>
                          {t("Line 2:")}
                          <span className=" fw-bold">{t(ele.line2)}</span>
                        </p>
                        {ele.line3 && (
                          <>
                            <p>
                              {t("Line 3:")}
                              <span className=" fw-bold">{t(ele.line3)}</span>
                            </p>
                            <p>
                              {t("Line 4:")}
                              <span className=" fw-bold">{t(ele.line4)}</span>
                            </p>
                            <p>
                              {t("Line 5:")}
                              <span className=" fw-bold">{t(ele.line5)}</span>
                            </p>
                            <p>
                              {t("Line 6:")}
                              <span className=" fw-bold">{t(ele.line6)}</span>
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className={`col-sm-12 col-lg-6  ${i18n.language === "ar" && "d-flex justify-content-end"}`}>
                    <img
                      src={ele.img1 || ele.img}
                      alt=""
                      className={`w-75 rounded-4 float-end d-none d-md-block`}
                      style={{ height: 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  }
}
