import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Data";
import Slider from "react-slick";
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Centers = () => {
  // States

  const { Centers, userData } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')
  const { t, i18n } = useTranslation();

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

  // Functions
  const handleShowModal = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      {/* Header */}
      <div className='container-fluid pt-3'>
        <h2 className="lightGreenColor text-center m-0">
          {t("Centers")}
        </h2>
      </div>

      {/* Card */}
      <div className='row gy-4 p-0 m-0 w-75 mx-auto'>
        {Centers.map((res) =>
          <div className='col-md-5 mx-auto px-0'>
            <div className='shadow-sm'>
              <div className='position-relative'>
                <div className='layer rounded-top-3'></div>
                <img src={res.img1} alt="" style={{ width: '100%', height: '300px' }} className='rounded-top-3' />
              </div>


              <div className=''>
                <div className='container pt-3'>
                  <h4 className='text-center mainColor' >{res.name}</h4>
                  <p className=''>{res.overview}</p>
                </div>
                <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                  <div className='d-flex justify-content-around align-items-center py-3 container'>
                    <p className='m-0'> {res.Rating} <i class="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                    <p className='m-0'><Link to={res.location} className='text-decoration-none text-white'> {t("Location")} </Link></p>
                    <Link to={res.website} className="text-decoration-none text-white"> Website </Link>
                    <p className='m-0' onClick={() => { const whatsappURL = `https://wa.me/${res.number}`; window.location.href = whatsappURL; }} > <Link className="text-decoration-none text-white" >Phone</Link> </p>

                  </div>
                  <div className='text-center pb-3 '>
                    <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => {
                      handleShowModal()
                      setMessage(res.name)
                    }}
                      data-whatever="@mdo"
                      className={i18next.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor "}
                    >
                      {t("Feedback")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>)}

        {/* Modal */}
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
    </>
  );
};

export default Centers;
