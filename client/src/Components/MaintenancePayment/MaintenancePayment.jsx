import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from "uuid";
import Payment from "../PaymentStripe/Payment";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../App.css";

export default function MaintenancePayment() {
  const { userData, PayArr } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");

  const { addComplain } = useContext(DataContext);

  function handleRegister(values) {
    addComplain(values, uploadedImg);
  }

  // Validation
  let validationSchema = yup.object({
    Name: yup
      .string()
      .required("Name is required")
      .min(5, "Name must be more than 5 characters")
      .max(20, "Name must be less than 20 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Example: exa@gmail.com"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^(010|011|012|015)[0-9]{8}$/, "Number must be Egyptian number"),
    message: yup.string().required("Message is required").min(10),
    place: yup.string().required("Place is required").min(5),
  });

  // Formik
  let formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      message: "",
      place: "",
    },
    onSubmit: handleRegister,
    validationSchema,
  });

  const handleImageUpload = useCallback((e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setUploadedImg(fileReader.result);
    };
  }, []);

  // handle payment and bills
  const [selectedName, setSelectedName] = useState("");
  const [selectedFees, setSelectedFees] = useState("");

  const openModelPay = (name, fees) => {
    setSelectedName(name);
    setSelectedFees(fees);
  };

  // // handle complain form
  // const [errors, setErrors] = useState({
  //   nameError: "",
  //   phoneError: "",
  //   placeError: "",
  //   messageError: "",
  //   uploadedImgError: "",
  // })

  // const [newFeedBack, setNewFeedback] = useState({
  //   // id: "",
  //   name: "",
  //   phone: "",
  //   place: "",
  //   message: "",
  //   uploadedImg: "",
  // });

  // const handleChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setNewFeedback({ ...newFeedBack, [name]: value });
  //   if (newFeedBack.name === "") {
  //     setErrors({ ...errors, nameError: "Title is required" })
  //   } else {
  //     setErrors({ ...errors, nameError: "" })
  //   }
  // }, [newFeedBack, errors]);

  // const handleSubmit = useCallback((e) => {
  //   e.preventDefault();
  //   setNewFeedback({
  //     name: "",
  //     phone: "",
  //     place: "",
  //     message: "",
  //     uploadedImg: "",
  //   })
  // }, []);

  return (
    <>
      <div className="container-fluid lightGreyBg py-3">
        <h2 className="lightGreenColor text-center m-0"> {t("PAYMENT")}</h2>
      </div>
      <div className="container">
        <div
          className="row mt-5"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            // marginRight: i18n.language === "ar" ? "80px" : null
          }}
        >
          <h2 className="text-center mb-4 fw-bold">
            {t("One place for your all bills and subscriptions")}
          </h2>

          {PayArr &&
            PayArr.map((type, index) => (
              <div key={uuid()} className="col-lg-6 col-12">
                <div
                  className="d-flex flex-column shadow-sm rounded-3 w-100 my-3 p-4"
                  style={{ height: 250 }}
                  key={uuid()}
                >
                  <div>
                    <h3 className="text-center fw-bold">{t(type.name)}</h3>
                  </div>
                  <div className="mx-auto">
                    {(() => {
                      switch (type.name) {
                        case "City Maintenance Bills":
                          return (
                            <i
                              className="fa-solid fa-screwdriver-wrench mainColor my-3"
                              style={{ fontSize: 70 }}
                              key={uuid()}
                            ></i>
                          );
                        case "El-Rehab club subscription":
                          return (
                            <i
                              className="fa-solid fa-futbol mainColor my-3"
                              style={{ fontSize: 70 }}
                              key={uuid()}
                            ></i>
                          );

                        case "Water Bills":
                          return (
                            <i
                              className="fa-solid fa-droplet mainColor my-3"
                              style={{ fontSize: 70 }}
                              key={uuid()}
                            ></i>
                          );

                        case "Car Washing subscription":
                          return (
                            <i
                              className="fa-solid fa-car mainColor my-3"
                              style={{ fontSize: 70 }}
                              key={uuid()}
                            ></i>
                          );
                        default:
                          return null;
                      }
                    })()}
                  </div>

                  <div
                    key={uuid()}
                    className="d-flex justify-content-evenly mt-auto"
                  >
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
              </div>
            ))}

          {/** Bills Popup */}
          <div
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
                    {selectedName !== "" && t(selectedName)}
                  </h1>
                </div>
                <div className="modal-body d-flex flex-column align-items-center">
                  <p className="fw-bold fs-5 text-center">
                    {userData === null ? null : userData.name}, {t("Your")}
                    {selectedName !== "" && t(selectedName).toLocaleLowerCase()}
                    {t("amount is")} {selectedFees !== "" && t(selectedFees)}
                    {t("EGP")}
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
                    {t("Pay")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/** Payment Popup */}
          <div
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
                    {t(selectedName)} {t(selectedFees)} {t("EGP")}
                  </h1>
                  <button
                    type="button"
                    className={`btn-close ${i18n.language === "ar" && "ms-0"}`}
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

          {/*Feedback */}
          <div className="d-flex flex-column align-items-center mt-5">
            <h3 className="text-center">
              {t(
                "If you have any inquiries, feedback, or complaints, we are glad to hear it"
              )}
            </h3>
            <button
              className="btn dark-btn w-25 p-2 mt-4"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              {t("Inquiry")}
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
                    {t("Complain")}
                  </h1>
                  <button
                    type="button"
                    className={`btn-close ${i18n.language === "ar" && "ms-0"}`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="d-flex flex-md-row flex-column-reverse">
                      <div className=" d-flex align-items-center  mx-auto">
                        <form
                          onSubmit={formik.handleSubmit}
                          className="d-flex flex-wrap"
                        >
                          {/* Error */}
                          <div className="d-block w-100">
                            {errorMsg ? (
                              <div className="alert p-2 alert-danger text-center">
                                {errorMsg}
                              </div>
                            ) : null}
                          </div>

                          {/* Name */}
                          <div className="w-100">
                            <label htmlFor="Name">Name</label>
                            <input
                              className=" w-100 form-control mb-2 form-input"
                              type="name"
                              name="Name"
                              id="Name"
                              value={formik.Name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.Name && formik.touched.Name ? (
                              <span className=" opacity-100 text-danger ps-1">
                                
                                {formik.errors.Name}
                              </span>
                            ) : (
                              <span className=" opacity-0"> lorem </span>
                            )}
                          </div>

                          {/* Email */}
                          <div className="w-100">
                            <label htmlFor="name">Email</label>
                            <input
                              className=" w-100 form-control mb-2 form-input"
                              type="email"
                              name="email"
                              id="email"
                              value={formik.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email ? (
                              <span className=" opacity-100 text-danger ps-1">
                                
                                {formik.errors.email}
                              </span>
                            ) : (
                              <span className=" opacity-0"> lorem </span>
                            )}
                          </div>

                          {/* Phone */}
                          <div className="w-100">
                            <label htmlFor="name">Phone</label>
                            <input
                              className=" w-100 form-control mb-2 form-input"
                              type="tel"
                              name="phone"
                              id="phone"
                              value={formik.phone}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.phone && formik.touched.phone ? (
                              <span className=" opacity-100 text-danger ps-1">
                                
                                {formik.errors.phone}
                              </span>
                            ) : (
                              <span className=" opacity-0"> lorem </span>
                            )}
                          </div>

                          {/* Feed Back TO */}
                          <div className="w-100 ">
                            <label htmlFor="place">Place of incident</label>
                            <input
                              className="w-100 mb-2 form-control form-input"
                              type="text"
                              name="place"
                              id="place"
                              value={formik.place}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            ></input>
                            {formik.errors.place && formik.touched.place ? (
                              <span className=" opacity-100 text-danger ps-1">
                                
                                {formik.errors.place}
                              </span>
                            ) : (
                              <span className=" opacity-0"> lorem </span>
                            )}
                          </div>

                          {/* Messsage */}
                          <div className="w-100">
                            <label htmlFor="message">Message</label>
                            <textarea
                              rows={"5"}
                              className={` form-control mb-2 form-input`}
                              type="text"
                              name="message"
                              id="message"
                              value={formik.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              style={{ resize: "none" }}
                            />
                            {formik.errors.message && formik.touched.message ? (
                              <span className=" opacity-100 text-danger ps-1">
                                
                                {formik.errors.message}
                              </span>
                            ) : (
                              <span className=" opacity-0"> lorem </span>
                            )}
                          </div>

                          <div className="w-100">
                            <label htmlFor="Photo" className="col-form-label">
                              {t("Upload Photo")}:
                            </label>
                            <input
                              accept="image/*"
                              style={{}}
                              id="Photo"
                              multiple
                              type="file"
                              className=" w-100 form-control mb-2 form-input"
                              onChange={handleImageUpload}
                            />
                          </div>

                          <button
                            className=" btn dark-btn w-100 mt-3"
                            data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            disabled={!(formik.isValid && formik.dirty)}
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
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
                  <p className="my-2 fs-4 fw-bolder text-center">
                    {t("We received your Complain, within 48 hours will be solved.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
