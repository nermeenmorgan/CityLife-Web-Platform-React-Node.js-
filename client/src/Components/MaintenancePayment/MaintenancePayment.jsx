import React, { useCallback, useContext, useMemo, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from "uuid";
import Payment from "../PaymentStripe/Payment";
import { useTranslation } from "react-i18next";


export default function MaintenancePayment() {

  // const PayArr = useMemo(()=> [
  //   { name: "City Maintenance Bills", fees: "10000 EGP" },
  //   { name: "El-Rehab club subscription", fees: "2000 EGP" },
  //   { name: "Water Bills", fees: "900 EGP" },
  //   { name: "Car Washing subscription", fees: "200 EGP" },
  // ],[]);

  const { userData, PayArr } = useContext(DataContext);

  // handle payment and bills
  const [selectedName, setSelectedName] = useState("");
  const [selectedFees, setSelectedFees] = useState("");
  const { t, i18n } = useTranslation();

  const openModelPay = (name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
  }

  // handle complain form
  const [errors, setErrors] = useState({
    nameError: "",
    phoneError: "",
    placeError: "",
    messageError: "",
    uploadedImgError: "",
  })

  const [newFeedBack, setNewFeedback] = useState({
    // id: "",
    name: "",
    phone: "",
    place: "",
    message: "",
    uploadedImg: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewFeedback({ ...newFeedBack, [name]: value });
    if (newFeedBack.name === "") {
      setErrors({ ...errors, nameError: "Title is required" })
    } else {
      setErrors({ ...errors, nameError: "" })
    }
  }, [newFeedBack, errors]);

  const handleImageUpload = useCallback((e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setNewFeedback({ ...newFeedBack, uploadedImg: fileReader.result });
    };
  }, [newFeedBack]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setNewFeedback({
      name: "",
      phone: "",
      place: "",
      message: "",
      uploadedImg: "",
    })
  }, []);

  return (
    <>
          <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className='lightGreenColor text-center m-0'> {t("PAYMENT")}</h2>
      </div>
      <div className="container">
        <div className="row mt-5">
          <h2 className="text-center mb-4 fw-bold">
            {t("One place for your all bills and subscriptions")}
          </h2>

          {PayArr && PayArr.map((type, index) => (
            <div key={uuid()} className="col-lg-6 col-12">
              <div
                className="d-flex flex-column shadow-sm rounded-3 w-100 my-3 p-4" style={{ height: 250 }} key={uuid()}  >
                <div>
                  <h3 className="text-center fw-bold">{t(type.name)}</h3>
                </div>
                <div className="mx-auto">
                  {(() => {
                    switch (type.name) {
                      case "City Maintenance Bills":
                        return (
                          <i className="fa-solid fa-screwdriver-wrench mainColor my-3" style={{ fontSize: 70 }} key={uuid()}  ></i>);
                      case "El-Rehab club subscription":
                        return (
                          <i className="fa-solid fa-futbol mainColor my-3" style={{ fontSize: 70 }} key={uuid()}  ></i>
                        );


                      case "Water Bills":
                        return (
                          <i className="fa-solid fa-droplet mainColor my-3" style={{ fontSize: 70 }} key={uuid()}  ></i>
                        );


                      case "Car Washing subscription":
                        return (
                          <i className="fa-solid fa-car mainColor my-3" style={{ fontSize: 70 }} key={uuid()}  ></i>
                        );
                      default:
                        return null;
                    }
                  })()}
                </div>










                <div key={uuid()} className="d-flex justify-content-evenly mt-auto">
                  <button
                    key={uuid()}
                    className="btn dark-btn  w-50 mx-4 p-2"
                    data-bs-target="#exampleModalToggleBills"
                    data-bs-toggle="modal"
                    onClick={() => {
                      openModelPay(type.name, type.fees);
                    }}
                  >
                    {t("Check Bills")}
                  </button>
                  <button
                    key={uuid()}
                    className="btn dark-btn w-50 mx-4 p-2"
                    data-bs-target="#exampleModalTogglePay"
                    data-bs-toggle="modal"
                    onClick={() => {
                      openModelPay(type.name, type.fees);
                    }}
                  >
                    {t("Pay")}
                  </button>
                </div>
              </div>



              {/** Bills Popup */}
              <div
                key={uuid()}
                className="modal fade"
                id="exampleModalToggleBills"
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
                        {selectedName !== "" && selectedName}
                      </h1>
                    </div>
                    <div className="modal-body d-flex flex-column align-items-center">
                      <p className="fw-bold fs-5 text-center">
                        {userData === null ? null : userData.name}, Your {selectedName !== "" && selectedName.toLocaleLowerCase()}
                        amount is {selectedFees !== "" && selectedFees}
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        {t("Close")}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-target="#exampleModalTogglePay"
                        data-bs-toggle="modal"
                      >
                        {t("pay")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              {/** Payment Popup */}
              <div
                key={uuid()}
                className="modal fade"
                id="exampleModalTogglePay"
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
                        {selectedName} {selectedFees}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body d-flex flex-column align-items-center">
                      <Payment></Payment>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}


          {/*Feedback */}
          <div className="d-flex flex-column align-items-center mt-5">
            <h3 className="text-center">
              {t("If you have any inquiry, feedback or complain, we are glad to hear it")}
            </h3>
            <button
              className="btn dark-btn w-25 p-2 mt-4"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              {t("Feedback")}
            </button>
          </div>




          {/* Mocal */}
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="Name" className="col-form-label">
                        {t("Name:")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        name="name"
                        value={newFeedBack.name}
                        onChange={handleChange}
                      />
                      {errors.nameError ? <span>{errors.nameError}</span> : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Phone" className="col-form-label">
                        {t("Phone:")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Phone"
                        name="phone"
                        value={newFeedBack.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Place" className="col-form-label">
                        {t("Place of incident:")}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Place"
                        name="place"
                        value={newFeedBack.place}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        {t("Message:")}
                      </label>
                      <textarea
                        className="form-control"
                        id="message-text"
                        name="message"
                        value={newFeedBack.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Photo" className="col-form-label">
                        {t("Upload Photo:")}
                      </label>
                      <input
                        accept="image/*"
                        style={{}}
                        id="Photo"
                        multiple
                        type="file"
                        className="form-control"
                        onChange={handleImageUpload}
                      />
                    </div>

                    {/* Send FeedBack */}
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn dark-btn w-50"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        disabled={
                          newFeedBack.name &&
                            newFeedBack.place &&
                            newFeedBack.message
                            ? false
                            : true
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



          {/* Success Modal */}
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
                  {/* <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1> */}
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
      </div>
      </div>
    </>
  );
}
