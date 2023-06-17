import React, { useCallback, useState } from 'react';
import { v4 as uuid } from "uuid";
import Payment from '../PaymentStripe/Payment';


export default function PopUp() {
    const [selectedDay, setSelectedDay] = useState(""); 
    const [selectedShowTime, setSelectedShowTime] = useState(""); 

    const handleDayChange = useCallback( (event) => {
        setSelectedDay(event.target.value);
      },[]);
    
      const handleShowTimeChange = useCallback((event) => {
        setSelectedShowTime(event.target.value);
      },[]);

      const handleClickConfirmReser = useCallback( () => {
        setSelectedDay("");
        setSelectedShowTime("");
      },[]);
  return (
    <>
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
                      Ticket Reservation
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>Choose Day: </p>
                    <select
                      className="form-select form-select-md mb-3"
                      aria-label="Default select example"
                      onChange={handleDayChange}
                      value={selectedDay}
                    >
                      {/* <option disabled>Choose Day...</option> */}
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </select>
                    <p>Choose Show Time: </p>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={handleShowTimeChange}
                      value={selectedShowTime}
                    >
                      {/* <option disabled selected>Choose ShowTime...</option> */}
                      <option value="10:30 am">10:30 am</option>
                      <option value="1:15 pm">1:15 pm</option>
                      <option value="4:00 pm">4:00 pm</option>
                      <option value="6:30 pm">6:30 pm</option>
                      <option value="9:00 pm">9:00 pm</option>
                      <option value="12:15 pm">12:15 pm</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-success"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      disabled={selectedShowTime && selectedDay ? false : true}
                      onClick={handleClickConfirmReser}
                    >
                      Confirm
                    </button>
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
                    <h1
                      className="modal-title fs-5"
                      id="exampleModalToggleLabel2"
                    >
                      Pay for your ticket (100 EGP)
                    </h1>
                  </div>
                  <div className="modal-body d-flex flex-column align-items-center">
                  <Payment></Payment>
                  </div>
                </div>
              </div>
            </div>



            {/* <div
              className="modal fade"
              id="exampleModalToggle3"
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
                      Success
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body d-flex flex-column align-items-center">
                    <i
                      className="fa-solid fa-check fa-beat  fs-1"
                      style={{ color: "#2aa509" }}
                    ></i>
                    <p className="fw-bold">
                      Your reservation code is {uuid().substring(0, 8)}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
    </>
  )
}
