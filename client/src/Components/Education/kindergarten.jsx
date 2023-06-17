import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

const Kindergarten = () => {
  const { Kindergarten, encodedToken } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    $(".single-item").not(".slick-initialized").slick();
  }, []);

  return (
    <div className="">
      <div className=" container my-5 p-5">
        <div className="row justify-content-center mt-4">
          {Kindergarten ? (
            [...Kindergarten].map((res) => (
              <div
                className="col-md-8 mb-5 p-3 p-md-5 w-100 mx-md-2"
                style={{ border: "2px solid lightgrey", borderRadius: 40 }}
                key={res.id}
              >
                <div className="d-flex  flex-nowrap">
                  <img
                    className="rounded-circle me-3 mb-3 mb-md-0"
                    style={{
                      maxWidth: "100px",
                      height: "auto",
                      borderRadius: 40,
                    }}
                    src={res.logo}
                    alt={res.name}
                  />

                  <div className="d-flex flex-column">
                    <div className="mt-3 d-flex flex-column align-content-center ">
                      <div className="fs-4 fw-bold mb-1 ms-5">{res.name}</div>
                      <div className="d-flex justify-content-center">
                        {[...Array(parseInt(res.Rating))].map((_, index) => (
                          <i
                            key={index}
                            className="fa-solid fa-star fa-2x"
                            style={{ color: "#ffc107" }}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-6 mb-3">
                    <div className="fs-5  mt-5 fw-bold">Overview</div>
                    <div className="fs-lg-5 fs-md-6 my-4">{res.overview}</div>
                    <div className="fs-5  fw-bold">Address</div>
                    <div className="fs-lg-5 fs-md-6 my-4">{res.address}</div>
                    <div className="d-flex justify-content-evenly ">
                      <div className="d-flex-column ">
                        <a href={res.website}>
                          <i
                            className="fa-solid fa-house fa-2x"
                            style={{ color: "green" }}
                          ></i>
                          {/* <FontAwesomeIcon icon={faHouse}  className='' /> */}
                          <div className="fs-6 fw-bold text-success">
                            Website
                          </div>
                        </a>
                      </div>
                      <div className="d-flex-column flex-wrap">
                        <a href={`https://wa.me/${res.number}`}>
                          <i
                            className="fa-solid fa-phone fa-2x "
                            style={{ color: "green" }}
                          ></i>
                          <div className="fs-6 fw-bold text-success">
                            WhatsApp
                          </div>
                        </a>
                      </div>

                      <div className="d-flex-column flex-wrap">
                        <a href={res.location}>
                          <i
                            className="fa-sharp fa-solid fa-location-dot  fw-bold  fa-2x "
                            style={{ color: "green" }}
                          ></i>
                          <div className="fs-6 fw-bold text-success">
                            Location
                          </div>
                        </a>
                      </div>

                      {!encodedToken ? (
                        <button
                          style={{ backgroundColor: "green", color: "white" }}
                          type="button"
                          class="btn  text-center"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={handleShowModal}
                          data-whatever="@mdo"
                        >
                          Complain
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6 " style={{ borderRadius: 20 }}>
                    <div style={{ borderRadius: 20 }} className="single-item ">
                      <img
                        style={{ borderRadius: 20 }}
                        src={res.img2}
                        alt="School Image"
                        className="img-fluid"
                      />
                      <img
                        style={{ borderRadius: 20 }}
                        src={res.img1}
                        alt="School Image"
                        className="img-fluid"
                      />
                      <img
                        style={{ borderRadius: 20 }}
                        src={res.img3}
                        alt="School Image"
                        className="img-fluid"
                      />
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
        </div>
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
                  New message
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
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Complaint:
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
                  Close
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "green", color: "white" }}
                  className="btn "
                >
                  Submit complaint
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kindergarten;
