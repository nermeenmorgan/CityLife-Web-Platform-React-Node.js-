import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";
import '../../App.css'
export default function Details() {
  // Stated
  const { t, i18n } = useTranslation();
  const { All } = useContext(DataContext);
  const { id } = useParams();

  for (let category of Object.values(All)) {
    for (let ele of category) {
      if (t(ele.name) === t(id)) {
        console.log(ele.name);
        return (
          <>
            <div
              style={{
                direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
              }}
            >
              <div className="container mx-auto text-center">
                <div className="row" style={{ direction: i18n.language === "ar" ? "rtl" : "", textAlign: i18n.language === "ar" ? "right" : "" }} >
                  <div className=" p-0 my-3 ">
                    <div className="col-md-6 mx-auto rounded-bottom-3 shadow-sm " >

                      {/* Img */}
                      <div className={`${i18n.language === "ar" && "d-flex justify-content-end"}`}>
                        <img
                          src={ele.img1 || ele.img}
                          alt=""
                          className={`w-100 rounded-top-3 `}
                          style={{ height: 300 }}
                        />
                      </div>


                      {/* Name - Overveiw */}
                      <div className="">
                        <h2 className="text-center m-0 py-1">{t(ele.name)}</h2>
                        <p className="text-center m-0 py-1">{t(ele.overview)}</p>

                      </div>

                      {/* Data */}
                      <div className="lightGreenBackgroudColor text-white rounded-bottom-3">
                        {/* Actors -- Number -- Website */}
                        {ele.actors && (
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item"> <span className="fw-bolder">{t("Type")}:</span>{" "} {t(ele.type)}
                            </li>
                            <li className="list-group-item ">
                              <span>
                                <span className="fw-bolder">{t("Language")}:</span> {t(ele.language)}
                              </span>
                              <span>
                                <span className="fw-bolder">{t("Country")}:</span> {t(ele.country)}
                              </span>
                            </li>
                            <li className="list-group-item">
                              <span className="fw-bolder">{t("Cast")}:</span>{" "} {t(ele.actors)}
                            </li>
                          </ul>
                        )}

                        {/*dur */}
                        {ele.dur && <p className=""> {t(ele.dur)} </p>}


                        <div className="d-flex justify-content-around py-4 align-items-center">

                          {/* RATING */}
                          {(ele.Rating || ele.rating) && (
                            <p className="card-title ">
                              {t(ele.Rating) || t(ele.rating)}
                              <i className="fa-sharp fa-solid fa-star px-2" style={{ color: '#C3801B' }} />
                            </p>
                          )}


                          {/* Location */}
                          {ele.location && (
                            <div className="">
                              <Link to={ele.location} target="_blank" className="text-decoration-none text-white" >
                                Location
                              </Link>
                            </div>
                          )}


                          {/* Website */}
                          {ele.website && (
                            <p className="m-0 "> <Link className="text-white text-decoration-none" to={ele.website} target="_blank"> {t("website")}  </Link> </p>
                          )}


                          {/* NUMBER */}
                          {ele.number && (
                            <p className='m-0' onClick={() => { const whatsappURL = `https://wa.me/${ele.number}`; window.location.href = whatsappURL; }} > <Link className="text-decoration-none text-white" >Phone</Link> </p>
                          )}

                        </div>

                        {ele.line1 && (
                          <>
                            <p> {t("Line 1:")} <span className=" fw-bold">{t(ele.line1)}</span>
                            </p>
                            <p> {t("Line 2:")} <span className=" fw-bold">{t(ele.line2)}</span>
                            </p>
                            {ele.line3 && (
                              <>
                                <p> {t("Line 3:")} <span className=" fw-bold">{t(ele.line3)}</span> </p>
                                <p> {t("Line 4:")} <span className=" fw-bold">{t(ele.line4)}</span>
                                </p>
                                <p> {t("Line 5:")} <span className=" fw-bold">{t(ele.line5)}</span> </p>
                                <p>{t("Line 6:")} <span className=" fw-bold">{t(ele.line6)}</span> </p>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
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
