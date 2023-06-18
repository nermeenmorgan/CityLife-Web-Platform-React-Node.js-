import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllRes.css";
import { useTranslation } from "react-i18next";

const Shawarma = () => {
  const { ShawarmaRes } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const handlefeedbackName = useCallback((event) => {
    setFeedbackName(event.target.value);
  },[]);
  const handlefeedbackMessage = useCallback ((event) => {
    setFeedbackMessage(event.target.value);
  },[]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFeedbackName("");
    setFeedbackMessage("");
  },[]);
  

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
            ? "fs-4  fw-bold me-5 mb-5 offset-1"
            : "fs-4  fw-bold  mb-5 offset-lg-9 offset-md-7"
        }
      >
        {t("Shawarma Restaurants")}
      </div>
      <div className="d-flex flex-column offset-lg-1 offset-sm-1 " >
        {ShawarmaRes ? (
          [...ShawarmaRes].map((res) => (
            <div className="" key={res.id}>
              <div
                className="d-flex align-items-center justify-content-between "
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
                  />

                  <div
                    className="mt-3 d-flex flex-column justify-content-center align-content-center align-items-center "
                    style={{ marginRight: i18n.language === "en" ? "" : "20%" }}
                  >
                    <div
                      className={
                        i18n.language === "en"
                          ? " fw-bold mb-2 "
                          : " fw-bold mb-2 "
                      }
                      style={{ fontSize: 16 }}
                    >
                      {t(res.name)}
                    </div>
                    <div className="d-flex align-items-center">
                        <div style={{ marginRight:"10px"}} >4.0</div>
                    <div className="d-flex justify-content-center align-content-center">
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
                </div>
                <a
                  href={res.location}
                  className={
                    i18n.language == "en"
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
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img1}
                  alt="img 1"
                />
                <img
                  className="my-2 mx-3 itStyle"
                  style={{
                    width: "150px",
                    height: "160px",
                    borderRadius: 10,
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img2}
                  alt="img 2"
                />
                <img
                  className="my-2 mx-3  itStyle"
                  style={{
                    width: "150px",
                    height: "160px",
                    borderRadius: 10,
                    borderRadius: 10,
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={res.img3}
                  alt="img 3"
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
                 
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"

                  
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

      <div
            className="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {t("Leave your message")}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="Name" className="col-form-label">
                       {t("Name:")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        value={feedbackName}
                        onChange={handlefeedbackName}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        {t("Message:")}
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        value={feedbackMessage}
                        onChange={handlefeedbackMessage}
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success w-50"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        disabled={
                          feedbackName && feedbackMessage ? false : true
                        }
                      >
                        {t("Send")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column align-items-center">
                  <i
                    className="fa-sharp fa-regular fa-circle-check text-center"
                    style={{ color: "#14992a", fontSize: 80 }}
                  ></i>
                  <p className="my-2 fs-4 fw-bolder">
                    {t("Thanks, We received your feedback!")}
                  </p>
                </div>
           
              </div>
            </div>
          </div>
    </>
  );
};

export default Shawarma;
