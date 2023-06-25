import React, { useCallback, useState } from 'react';
import { v4 as uuid } from "uuid";
import Payment from '../PaymentStripe/Payment';
import { useTranslation } from "react-i18next";



export default function PopUp() {
  // States
  const { t, i18n } = useTranslation();
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedShowTime, setSelectedShowTime] = useState("");

  // Functions
  const handleDayChange = useCallback((event) => {
    setSelectedDay(event.target.value);
  }, []);

  const handleShowTimeChange = useCallback((event) => {
    setSelectedShowTime(event.target.value);
  }, []);

  const handleClickConfirmReser = useCallback(() => {
    setSelectedDay("");
    setSelectedShowTime("");
  }, []);
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
            <div className="modal-header text-center lightGreenBackgroudColor text-white ">
              <h1 className="modal-title fs-5 w-100" id="exampleModalToggleLabel" >
                {t("Ticket Reservation")}
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{t("Choose Day")}: </p>
              <select
                className="form-select form-select-md mb-3"
                aria-label="Default select example"
                onChange={handleDayChange}
                value={selectedDay}
              >
                {/* <option disabled>Choose Day...</option> */}
                <option value="Sunday">{t("Sunday")}</option>
                <option value="Monday">{t("Monday")}</option>
                <option value="Tuesday">{t("Tuesday")}</option>
                <option value="Wednesday">{t("Wednesday")}</option>
                <option value="Thursday">{t("Thursday")}</option>
                <option value="Friday">{t("Friday")}</option>
                <option value="Saturday">{t("Saturday")}</option>
              </select>
              <p>{t("Choose Show Time")}: </p>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleShowTimeChange}
                value={selectedShowTime}
              >
                {/* <option disabled selected>Choose ShowTime...</option> */}
                <option value="10:30 am">{t("10:30 am")}</option>
                <option value="1:15 pm">{t("1:15 pm")}</option>
                <option value="4:00 pm">{t("4:00 pm")}</option>
                <option value="6:30 pm">{t("6:30 pm")}</option>
                <option value="9:00 pm">{t("9:00 pm")}</option>
                <option value="12:15 pm">{t("12:15 pm")}</option>
              </select>
            </div>
            <div className="modal-footer ">
              <button
                className="btn dark-btn w-50 mx-auto"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                disabled={selectedShowTime && selectedDay ? false : true}
                onClick={handleClickConfirmReser}
              >
                {t("Confirm")}
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Payment Modal */}
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
                {t("Pay for your ticket")} 100 {t("EGP")}
              </h1>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <Payment></Payment>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
