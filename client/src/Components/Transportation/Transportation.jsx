import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "./transportation.css";
import Slider from "react-slick";
import FeedBack from "../FeedBack/FeedBack";
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";
import { toFormData } from "axios";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow ${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ display: "none" }} onClick={onClick} />
  );
}

export default function Transportation() {
  const { t, i18n } = useTranslation();
  const { buses } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // handle lines select options
  const [selectedLineObj, setSelectedLineObj] = useState({});
  const handleChange = useCallback((event, busID) => {
    const SelectedLine = event.target.value;
    setSelectedLineObj((prev) => ({
      ...prev,
      [busID]: SelectedLine,
    }));
  }, []);

  // handle feedback popup
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const handlefeedbackName = useCallback((event) => {
    setFeedbackName(event.target.value);
  }, []);

  const handlefeedbackMessage = useCallback((event) => {
    setFeedbackMessage(event.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFeedbackName("");
    setFeedbackMessage("");
  }, []);

  // handle image popup
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);

  const openModal = useCallback((bus) => {
    setSelectedBus(bus);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedBus(null);
    setIsModalOpen(false);
  }, []);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            // textAlign: i18n.language === "ar" ? "right" : "",
          }}
        >
          {/* Title and silder */}
          <div className="d-flex flex-column mb-2">
            <div>
              <h1 className="my-4 text-center">
                {t("Transportation (Inside and Outside City)")}
              </h1>
            </div>
            <Slider {...settings}>
              <div className="my-3 px-1">
                <img
                  height={450}
                  className="w-100 rounded-4"
                  src={buses !== null ? buses[0].img1 : null}
                  alt="Photos galley"
                />
              </div>
              <div className="my-3 px-1">
                <img
                  height={450}
                  className="w-100 rounded-4"
                  src={buses !== null ? buses[1].img1 : null}
                  alt="Photos galley"
                />
              </div>
            </Slider>
          </div>
          <div className="d-flex flex-md-row justify-content-md-between flex-column px-2 ">
            {/* lines section*/}
            <section className="col-lg-8 mt-4 d-flex flex-column justify-content-between h-100">
              {buses !== null ? (
                buses.map((bus) => (
                  <div key={bus.id} className="shadow p-4 rounded-4">
                    <div className="d-flex justify-content-between ">
                      <div>
                        <p className="fw-bolder fs-5">{t(bus.name)}</p>
                      </div>
                      <div>
                        <a href={bus.location} className="">
                          <i className="fa-solid fa-location-dot fa-2xl mainColor"></i>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="fw-bold"> {t(bus.dur)} </p>
                    </div>
                    <div>
                      <p className="fw-semibold">{t("Choose line")}:</p>
                      <select
                        className="form-select form-select-md mb-3"
                        aria-label="Default select example"
                        onChange={(event) => {
                          handleChange(event, bus.id);
                        }}
                        value={selectedLineObj[bus.id] || ""}
                      >
                        <option value="" disabled>
                          {t("Choose")}...
                        </option>

                        {bus.line1 ? (
                          <option value={bus.line1}>{t("First line")}</option>
                        ) : null}
                        {bus.line2 ? (
                          <option value={bus.line2}>{t("Second line")}</option>
                        ) : null}
                        {bus.line3 ? (
                          <option value={bus.line3}>{t("Third line")}</option>
                        ) : null}
                        {bus.line4 ? (
                          <option value={bus.line4}>{t("Forth line")}</option>
                        ) : null}
                        {bus.line5 ? (
                          <option value={bus.line5}>{t("Fifth line")}</option>
                        ) : null}
                        {bus.line6 ? (
                          <option value={bus.line6}>{t("Sixth line")}</option>
                        ) : null}
                      </select>
                    </div>
                    <div>
                      <p className="fw-bold fs-5 mainColor">
                        {t(selectedLineObj[bus.id])}
                      </p>
                    </div>
                    <div className="cont">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <p className="fw-semibold">
                          {t("for Schedule press here")}
                        </p>
                        <button
                          className="btn btn-success px-5"
                          // style={{width:30}}
                          onClick={() => {
                            openModal(bus);
                          }}
                        >
                          {t("show")}
                        </button>
                      </div>

                      {isModalOpen && selectedBus === bus && (
                        <div className="imgCont">
                          <span className="closeImg" onClick={closeModal}>
                            &times;
                          </span>
                          <img
                            src={bus.img2}
                            alt="Img"
                            className="imgCont-content"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="spinner-border text-success"
                  style={{ marginLeft: 200 }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </section>
            {/* side bar section*/}
            <section className={ `col-lg-4 shadow mt-4 ms-md-3 rounded-4 ms-0 h-100 ${i18n.language === "ar" ? "me-3":""}`}>
              <div
                className=" px-4 mb-3 mt-4 d-flex flex-column justify-content-between"
                style={{ height: "88%" }}
              >
                <h4 className="text-center">{t("Contact us")}</h4>

                {/* Email */}
                <div className="Email-Section">
                  <h4>{t("Email")}: </h4>
                  <h5 className="">Rehab@gmail.com </h5>
                  <h5 className="">city.hall@gmail.com</h5>
                </div>

                {/* Telephone */}
                <div className="Telephone-Section">
                  <h4>{t("Telephone")}: </h4>
                  <h5 className="">+20 87 48 121 </h5>
                  <h5 className="">+20 87 48 122</h5>
                  <h5 className="">+20 87 48 123</h5>
                </div>

                {/* Phone */}
                <div className="Phone-Section">
                  <h4>{t("Phone")}: </h4>
                  <h5 className=""> +20 111 28 90765 </h5>
                  <h5 className=""> +20 112 28 90765 </h5>
                  <h5 className=""> +20 101 28 90765 </h5>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => {
                      setMessage("buses");
                    }}
                    className="btn btn-success mt-5 px-5"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    {t("Feedback")}
                  </button>
                </div>

                {/* Feedback Popup */}

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
                          {t("Your feedback")}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <FeedBack message={message}></FeedBack>
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3">
                            <label htmlFor="Name" className="col-form-label">
                              {t("Name")}:
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
                            <label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              {t("Message")}:
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
                          {t("We received your feedback, Thanks.")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
