import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import './hospitals.css';
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
export default function Hospitals() {
  const { Centers } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  //   console.log(Centers);

  const handleCall = useCallback((number) => {
    window.location.href = `tel:${number}`;
  }, []);

  const [appointDetails, setAppointDetails] = useState({
    date: "",
    name: "",
    time: "",
    specialty: "",
    centerName: "",
  });

  const handleCenterName = useCallback((name) => {
    setAppointDetails({ ...appointDetails, centerName: name });
  }, [appointDetails]);
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setAppointDetails({ ...appointDetails, [name]: value });
    },
    [appointDetails]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleClear = useCallback(() => {
    setAppointDetails({
      date: "",
      name: "",
      time: "",
      specialty: "",
      centerName: "",
    });
  }, []);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="mt-5 text-center fw-semibold">
            In our medical centers, you will find all specialties
          </h1>
          {Centers ? (
            Centers.map((res) => (
              <div
                className="row mx-0 mx-md-3 shadow my-5 custom-style mb-5 p-2 p-md-4 w-10 rounded-4"
                key={res.id}
              >
                <div className="col-lg-6  col-12">
                  <div className="d-flex align-items-center flex-wrap">
                    <img
                      className="rounded-circle me-3 mb-3 mb-md-0 shadow"
                      style={{ maxWidth: "100px", height: "auto" }}
                      src={res.logo}
                      alt={res.name}
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center offset-1">
                      <div className="fs-4 fw-bold mb-1">{res.name}</div>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center ms-1 mb-3">
                    {/* <div className="fs-5 fw-bold">Overview</div>
                    <div className="fs-5 my-4">{res.overview}</div> */}
                    <div className="fs-5 fw-bold mt-3">
                      Clinics and Labs No.
                    </div>
                    <div className="fs-5 ">{res.clinicAndLabsNum}</div>
                    <div className="fs-5 fw-bold mt-3">Address</div>
                    <div className="fs-5 ">{res.address}</div>
                    <div className="d-flex flex-column flex-md-row align-items-md-center align-items-start mt-4">
                      <div className="d-flex  align-items-center">
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa-solid fa-phone fa-2xl mainColor"
                          onClick={() => handleCall(res.number)}
                        ></i>
                        <span className="fw-semibold ms-1 fs-5">
                          : {res.number}
                        </span>
                        {/* <button
                              className="fa-2x btn fs-6 fw-bold text-success"
                            //   onClick={() => handleCall(res.number)}
                            
                              Call
                            </button> */}
                      </div>

                      <div className="d-flex justify-content-center ms-md-5 ms-0 my-md-0 my-4 mx-auto mx-md-0">
                        <a href={res.location} className="">
                          <i className="fa-solid fa-location-dot fa-2xl mainColor"></i>
                          {/* <div className=" fs-6 fw-bold text-success">
                            Location
                          </div> */}
                        </a>
                      </div>
                      <div className="ms-md-5 ms-0">








                      </div>
                    </div>
                  </div>


                  <button
                    className="btn fs-6 btn-success me-3 "
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                    //   style={{ borderRadius: "10px" ,backgroundColor:"green" }}
                    onClick={() => {
                      handleCenterName(res.name);
                    }}
                  >
                    Book a clinic appointment
                  </button>


                  {/* FeedBack */}
                  <button data-bs-target="#exampleModalToggle3" data-bs-toggle="modal"

                    onClick={() => {
                      handleShowModal()
                      setMessage(res.name)
                    }}
                    data-whatever="@mdo"
                    className={i18next.language === 'en' ? "btn btn-success text-center" : "btn btn-success me-4 ms-5 text-center"}
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0px 2px 2px 2px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {t("Feedback")}
                  </button>
                </div>

                <div className="col-lg-6  col-12 mt-sm-3" style={{}}>
                  <Slider {...settings}>
                    <div className="my-3 px-1">
                      <img
                        height={250}
                        className="w-100 rounded-4"
                        src={res.img1}
                        alt="Photos galley"
                      />
                    </div>
                    <div className="my-3 px-1">
                      <img
                        height={250}
                        className="w-100 rounded-4"
                        src={res.img2}
                        alt="Photos galley"
                      />
                    </div>
                    <div className="my-3 px-1">
                      <img
                        height={250}
                        className="w-100 rounded-4"
                        src={res.img3}
                        alt="Photos galley"
                      />
                    </div>
                  </Slider>
                </div>



                {/** Popup */}
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
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel"
                        >
                          Clinic appointment
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                          <label className="form-label" htmlFor="name">
                            Your Name:
                          </label>
                          <input
                            className="form-control"
                            type="name"
                            name="name"
                            value={appointDetails.name}
                            onChange={handleChange}
                            id="name"
                          ></input>
                          <label className="form-label" htmlFor="date">
                            Choose Date:
                          </label>
                          <input
                            className="form-control"
                            type="date"
                            name="date"
                            value={appointDetails.date}
                            onChange={handleChange}
                            id="date"
                          ></input>
                          <label className="form-label" htmlFor="time">
                            Choose time:
                          </label>
                          <input
                            className="form-control"
                            type="time"
                            name="time"
                            value={appointDetails.time}
                            onChange={handleChange}
                            id="time"
                            step="1800"
                          ></input>
                          <label
                            htmlFor="exampleDataList"
                            className="form-label"
                          >
                            Specialty:
                          </label>
                          <input
                            name="specialty"
                            value={appointDetails.specialty}
                            onChange={handleChange}
                            className="form-control"
                            list="datalistOptions"
                            id="exampleDataList"
                            placeholder="Type to search..."
                          />
                          <datalist id="datalistOptions">
                            <option value="Internal Medicine"></option>
                            <option value="Gastroenterology"></option>
                            <option value="Orthopedic"></option>
                            <option value="Ear, nose and throat (ENT)"></option>
                            <option value="Cardiology"></option>
                            <option value="Ophthalmology"></option>
                            <option value="Pediatrics"></option>
                            <option value="Dentistry"></option>
                          </datalist>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-success"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                          //   disabled={selectedShowTime && selectedDay ? false : true}
                          //   onClick={handleClickConfirmReser}
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
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
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel2"
                        >
                          Your appointment details
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={handleClear}
                        ></button>
                      </div>
                      <div className="modal-body d-flex flex-column align-items-center">
                        {appointDetails ? (
                          <>
                            <p className="fw-semibold fs-5 text-center">
                              Name: {appointDetails.name}
                            </p>
                            <p className="fw-semibold fs-5 text-center">
                              Date: {appointDetails.date}
                            </p>
                            <p className="fw-semibold fs-5 text-center">
                              Time: {appointDetails.time}
                            </p>
                            <p className="fw-semibold fs-5 text-center">
                              Specialty: {appointDetails.specialty}
                            </p>
                            <p className="fw-semibold fs-5 text-center">
                              in {appointDetails.centerName}
                            </p>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}


          {/* FeedBack */}
          <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
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
        </div>
      </div>
    </>
  );
}
