import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

import "./AllRes.css";
const Shawarma = () => {
  const { ShawarmaRes } = useContext(DataContext);

  const { t, i18n } = useTranslation();


  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
 <div
        style={{ color: "#09913C" }}
        className={
          i18n.language === "en"
            ? "fs-2  fw-bold me-5 mb-5"
            : "fs-3  fw-bold me-5 mb-5 offset-9"
        }
      >        Shawarma Restaurants
      </div>
      <div className="d-flex flex-column  ">
        {ShawarmaRes ? (
          [...ShawarmaRes].map((res) => (
            <div className="" key={res.id}>
              <div
                className="d-flex align-items-center justify-content-around "
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                <div
                  className={
                    i18n.language === "en" ? "d-flex" : " d-flex offset-3 "
                  }
                  style={{ marginLeft: i18n.language === "en" ? "" : "65%" }}
                >
                  <img
                    className="rounded-circle me-5 mb-3 mb-md-0"
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                    src={res.logo}
                    alt="logo"
                  />

                  <div
                    className="mt-3 d-flex flex-column  "
                    style={{ marginRight: i18n.language === "en" ? "" : "20%" }}
                  >
                    <div
                      className={
                        i18n.language === "en"
                          ? " fw-bold mb-2 ms-5"
                          : " fw-bold mb-2"
                      }
                      style={{ fontSize: 16 }}
                    >
                      {t(res.name)}
                    </div>
                    <div className="d-flex justify-content-center">
                      {[...Array(parseInt(res.Rating))].map((_, index) => (
                        <i
                          style={{ color: "#ffc107" }}
                          key={index}
                          className="fa-solid fa-star fa-1x"
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={res.location}
                  className={
                    i18n.language === "en"
                      ? "d-none d-sm-block offset-7"
                      : "d-none d-sm-block  offset-1"
                  }
                >
                  <img
                    className="me-5"
                    style={{ height: 60, width: 50 }}
                    src="/images/location.png"
                    alt="map marker"
                  />
                </a>
              </div>

              <div
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  marginRight: i18n.language === "en" ? "" : "7%",
                }}
                className="fs-6 my-4"
              >
                {t(res.overview)}
              </div>

<div className="d-flex flex-wrap justify-content-evenly mx-sm-0">
                <img
                  className="my-2 mx-3  itStyle"
                  style={{
                    width: "150px",
                    height: "160px",
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img1}
                  alt="menu 1"
                />
                <img
                  className="my-2 mx-3 itStyle"
                  style={{
                    width: "150px",
                    height: "160px",
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img2}
                  alt="menu 2"
                />
                <img
                  className="my-2 mx-3  itStyle"
                  style={{
                    width: "150px",
                    height: "160px",
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img3}
                  alt="menu 3"
                />
              </div>

              <div
                className="d-flex justify-center my-4 ms-2"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                  justifyContent: "space-evenly",
                  marginRight: "5%",
                }}
              >
                <button
                  className="btn btn-success me-2 "
                  style={{
                    width: "20%",
                    borderRadius: "10px",
                    boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.3)",
                

                  }}
                  onClick={() => {
                    const whatsappURL = `https://wa.me/${res.number}`;
                    window.location.href = whatsappURL;
                  }}
                >
                  {t("Contact restaurant")}
                </button>

                <button
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={handleShowModal}
                  data-whatever="@mdo"
                  className= {i18n.language==='en'? "btn btn-success me-2 ms-5 text-center":  "btn btn-success me-4 ms-5 text-center"}
                  style={{
                    // fontSize:15,
                    // fontWeight:"bold",
                    borderRadius: "10px",
                    width: "20%",
                    boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {t("Feedback")}
                </button>
                <div>
                  <div></div>
                </div>
                <img
                  className={
                    i18n.language === "en" ? "ms-auto me-5" : "ms-auto "
                  }
                  style={{ marginRight: i18n.language === "en" ? "" : "35%" }}
                  src="/images/kalb.png"
                  alt="FavouriteIcon"
                ></img>
              </div>
              <hr
                className="mx-5 my-5"
                style={{ backgroundColor: "black", height: 3 }}
              />
            </div>
          ))
        ) : (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">{t("Loading...")}</span>
          </div>
        )}
      </div>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {t("New message")}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      {t("Email:")}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      {t("Complaint:")}
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  style={{ backgroundColor: "black", color: "white" }}
                  className="btn "
                  data-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  {t("Close")}
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "green", color: "white" }}
                  className="btn "
                >
                  {t("Submit Feedback")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shawarma;
