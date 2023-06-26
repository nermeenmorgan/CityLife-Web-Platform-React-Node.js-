import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "./transportation.css";
import Slider from "react-slick";
import FeedBack from "../FeedBack/FeedBack";
import i18next, { t } from "i18next";
import { useTranslation } from "react-i18next";
import { toFormData } from "axios";
import FeedBackPopSuccess from "../FeedBack/FeedBackPopSuccess";






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
  // States
  const [message, setMessage] = useState('')
  const { t, i18n } = useTranslation();
  const { buses } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  // handle lines select options
  const [selectedLineObj, setSelectedLineObj] = useState({});

  // Functions


  const handleShowModal = () => {
    setShowModal(!showModal);
  };



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
      <div
        style={{
          overflowX: "hidden", overflowY: "hidden",
        }}
        className="position-relative "
      >
        <div className={`headerLayer p-1 `}></div>
        <div
          style={{
            backgroundImage: `url(${buses && buses[0].img1})`,
            backgroundSize: "100% 100%",
            height: "90vh",
            width: "100%",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            textAlign: i18n.language === "ar" ? "right" : "",
          }}
          className={`headerImg`}
        >
          <h1
            className="position-absolute ms-3 mt-2 text-white"
            style={{
              zIndex: 22,
              top: "60vh",
              marginLeft: `${i18n.language === "ar" ? "" : "200px"}`,
              marginRight: `${i18n.language === "ar" ? "100px" : ""}`,

              // letterSpacing: "5px",
              fontSize: 50,
            }}
          >
            {t("Transportation (Inside and Outside City)")}
          </h1>
        </div>
      </div>
      <div className="container">
        <div
          className="row"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
          }}
        >

          <div className="d-flex flex-md-row justify-content-md-between flex-column px-2 ">
            {/* lines section*/}
            <section className="col-lg-8 mt-4 d-flex flex-column justify-content-between h-100">
              {buses !== null ? (
                buses.map((bus) => (
                  <div key={bus.id} className="shadow p-4 rounded-2">
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
                          {t("For Schedule Click Here")}
                        </p>
                        <button
                          className="btn dark-btn px-5 w-50"
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
            <section
              className={`col-lg-4 shadow-sm ms-md-3 p-4 mt-4 rounded-2 ms-0 h-100 mainColor ${i18n.language === "ar" ? "me-3" : ""}`} >
              <div className=" px-4 mb-3 mt-4 d-flex flex-column justify-content-between">
                <h3 className="text-center fw-bold">{t("Contact us")}</h3>

                {/* Email */}
                <div className="Email-Section text-center py-4 ">
                  <h4 className="text-center fw-bold">{t("Email")} </h4>
                  <h5 className="">Rehab@gmail.com </h5>
                  <h5 className="">city.hall@gmail.com</h5>
                </div>

                {/* Telephone */}
                <div className="Telephone-Section text-center py-4">
                  <h4 className="text-center mainColor fw-bold">{t("Telephone")} </h4>
                  <h5 className="">+20 87 48 121 </h5>
                  <h5 className="">+20 87 48 122</h5>
                  <h5 className="">+20 87 48 123</h5>
                </div>

                {/* Phone */}
                <div className="Phone-Section text-center py-4 ">
                  <h4 className="text-center mainColor fw-bold">{t("Phone")} </h4>
                  <h5 className=""> +20 111 28 90765 </h5>
                  <h5 className=""> +20 112 28 90765 </h5>
                  <h5 className=""> +20 101 28 90765 </h5>
                </div>

                <div className='text-center pb-3 '>
                  <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => {
                    handleShowModal()
                    setMessage("buses")
                  }}
                    data-whatever="@mdo"
                    className={i18next.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor "}
                  >
                    {t("Feedback")}
                  </button>
                </div>

              </div>
            </section>
          </div>
        </div>

        <div className="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header lightGreenBackgroudColor text-white text-center">
                <h1 className="modal-title fs-5 w-100" id="exampleModalLabel">
                  {t("Leave your message")}
                </h1>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">

                <FeedBack message={message} ></FeedBack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedBackPopSuccess></FeedBackPopSuccess>

      
    </>
  );
}
