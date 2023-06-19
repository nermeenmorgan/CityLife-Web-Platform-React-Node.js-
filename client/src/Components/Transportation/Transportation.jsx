import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "./transportation.css";
import Slider from "react-slick";
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
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
  const { buses } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')

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
        <div className="row">
          {/* Title and silder */}
          <div className="d-flex flex-column mb-2">
            <div>
              <h1 className="my-4 text-center">
                Transportation (Inside and Outside City)
              </h1>
            </div>

            {/* <div
              id="carouselExampleAutoplaying"
              className="carousel slide "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={buses !== null ? buses[0].img1 : null}
                    className="d-block w-100 rounded-5"
                    alt="outside"
                    style={{ height: 400 }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={buses !== null ? buses[1].img1 : null}
                    className="d-block w-100 rounded-5"
                    alt="inside"
                    style={{ height: 400 }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
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
                        <p className="fw-bolder fs-5">{bus.name}</p>
                      </div>
                      <div>
                        <a href={bus.location} className="">
                          <i className="fa-solid fa-location-dot fa-2xl mainColor"></i>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="fw-bold"> {bus.dur} </p>
                    </div>
                    <div>
                      <p className="fw-semibold">Choose line:</p>
                      <select
                        className="form-select form-select-md mb-3"
                        aria-label="Default select example"
                        onChange={(event) => {
                          handleChange(event, bus.id);
                        }}
                        value={selectedLineObj[bus.id] || ""}
                      >
                        <option value="" disabled>
                          Choose...
                        </option>

                        {bus.line1 ? (
                          <option value={bus.line1}>First line</option>
                        ) : null}
                        {bus.line2 ? (
                          <option value={bus.line2}>Second line</option>
                        ) : null}
                        {bus.line3 ? (
                          <option value={bus.line3}>Third line</option>
                        ) : null}
                        {bus.line4 ? (
                          <option value={bus.line4}>Forth line</option>
                        ) : null}
                        {bus.line5 ? (
                          <option value={bus.line5}>Fifth line</option>
                        ) : null}
                        {bus.line6 ? (
                          <option value={bus.line6}>Sixth line</option>
                        ) : null}
                      </select>
                    </div>
                    <div>
                      <p className="fw-bold fs-5 mainColor">
                        {selectedLineObj[bus.id]}
                      </p>
                    </div>
                    <div className="cont">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <p className="fw-semibold">for Schedule press here</p>
                        <button
                          className="btn btn-success px-5"
                          // style={{width:30}}
                          onClick={() => {
                            openModal(bus);
                          }}
                        >
                          show
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
            <section className=" col-lg-4 shadow mt-4 ms-md-3 rounded-4 ms-0 h-100  ">
              <div
                className=" px-4 mb-3 mt-4 d-flex flex-column justify-content-between"
                style={{ height: "88%" }}
              >
                <h4 className="text-center">Contact us</h4>

                {/* Email */}
                <div className="Email-Section">
                  <h4>Email: </h4>
                  <h5 className="">Rehab@gmail.com </h5>
                  <h5 className="">city.hall@gmail.com</h5>
                </div>

                {/* Telephone */}
                <div className="Telephone-Section">
                  <h4>Telephone: </h4>
                  <h5 className="">+20 87 48 121 </h5>
                  <h5 className="">+20 87 48 122</h5>
                  <h5 className="">+20 87 48 123</h5>
                </div>

                {/* Phone */}
                <div className="Phone-Section">
                  <h4>Phone: </h4>
                  <h5 className=""> +20 111 28 90765 </h5>
                  <h5 className=""> +20 112 28 90765 </h5>
                  <h5 className=""> +20 101 28 90765 </h5>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => {
                      setMessage('buses')
                    }}
                    className="btn btn-success mt-5 px-5"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    Feedback
                  </button>
                </div>



                {/* Feedback Popup */}




                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          {t("Leave your message")}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                      </div>
                      <div className="modal-body">

                        <FeedBack message={message} ></FeedBack>
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
                          We received your feedback, Thanks.
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
