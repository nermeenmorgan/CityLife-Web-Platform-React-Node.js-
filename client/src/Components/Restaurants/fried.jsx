import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FeedBack from "../FeedBack/FeedBack";
import "./AllRes.css";
import i18next from "i18next";

const Fried = () => {
  // States
  const [message, setMessage] = useState('')
  const { FriedRes } = useContext(DataContext);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  // Functions
  const handleShowModal = () => {
    setShowModal(!showModal);
  };



  return (
    <>
             <div
        style={{
          direction:i18next.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className='lightGreenColor text-center m-0'>{t("Fried Chicken")}</h2>
      </div>
      <div className='row gy-4 p-0 m-0 w-75 mx-auto'>
        {/* Card */}
        {FriedRes.map((res) =>
          <div key={res.id} className='shadow-sm col-md-5 mx-auto px-0 overflow-auto rounded-top-3'>
            <div className=' text-center '>
              {/* Images */}
              <div className="d-flex ">
                <img className=" d-block w-100 rounded-top-3" style={{ height: "200px" }} src={res.img1} alt="img 1" />
                <img className=" d-block w-100" style={{ height: "200px" }} src={res.img2} alt="img 2" />
                <img className=" d-block w-100 rounded-top-3" style={{ height: "200px" }} src={res.img3} alt="img 3" />
              </div>
              {/* Header */}
              <div className='container pt-3'>
                <h4 className='text-center mainColor' >{t(res.name)}</h4>
                <p className=''>{t(res.overview)}</p>
              </div>
              {/* Data */}
              <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                <div className='d-flex justify-content-around align-items-center py-3 container'>
                  <p className='m-0'> {res.Rating} <i className="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                  <p className='m-0'><Link to={res.location} className='text-decoration-none text-white'> {t("Location")} </Link></p>
                  <Link to={res.website} className='text-white text-decoration-none'>{t("Website")}</Link>
                  <Link className="text-decoration-none text-white" onClick={() => { const whatsappURL = `https://wa.me/${res.number}`; window.location.href = whatsappURL; }} ><p className='m-0'> {t("Phone")} </p></Link>
                </div>
                <div className='text-center pb-3 '>
                  <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => {
                    handleShowModal()
                    setMessage(res.name)
                  }}
                    data-whatever="@mdo" className="btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" >
                    {t("Feedback")}
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>

      {/* Feedback Modal*/}
      <div className="modal fade " id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
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

      {/* Modal Submit FeedBack */}
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
            </div>
            <div className="modal-body d-flex flex-column align-items-center">
              <i className="fa-sharp fa-regular fa-circle-check text-center" style={{ color: "#14992a", fontSize: 80 }} ></i>
              <p className="my-2 fs-4 fw-bolder">
                {t("Thanks, We received your feedback!")}
              </p>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Fried;
