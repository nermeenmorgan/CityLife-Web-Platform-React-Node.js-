import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import FeedBack from '../FeedBack/FeedBack'
import { Link } from "react-router-dom";
import FeedBackPopSuccess from "../FeedBack/FeedBackPopSuccess";
export default function Sports() {
  // States
  const { gyms } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState('')
  const [showModal, setShowModal] = useState(false);
  // Functions
  const handleShowModal = () => {
    setShowModal(!showModal);
  };


  const handleCall = useCallback((number) => {
    window.location.href = `tel:${number}`;
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

      {/* New  Design */}
      {/* Page Title */}
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className='lightGreenColor text-center m-0'>{t("Sports")}</h2>
      </div>

      <div className='row gy-4 p-0 m-0 w-75 mx-auto'>



        {/* Card */}
        {gyms ? gyms.map((ele) =>
          <div key={ele.id} className='col-md-5 mx-auto px-0'>
            <div className='shadow-sm'>
              <div className="rounded-top-3 p-0 m-0 position-relative w-100 " style={{ height: 300 }}>
                <div className='layer rounded-top-3 '></div>
                <Slider  {...settings}>
                  <div className=" rounded-top-3 ">
                    <img height={300} className="w-100 rounded-top-3 " src={ele.img1} alt="Photos galley" />
                  </div>
                  <div className="rounded-top-3">
                    <img height={300} className="w-100 rounded-top-3" src={ele.img2} alt="Photos galley" />
                  </div>
                  <div className="rounded-top-3">
                    <img height={300} className="w-100 rounded-top-3" src={ele.img3} alt="Photos galley" />
                  </div>
                </Slider>
              </div>
              <div className=''>
                <div className='container pt-3'>
                  <h4 className='text-center mainColor' >{t(ele.name)}</h4>
                  <p className='text-center'>{t(ele.overview)}</p>
                </div>
                <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                  <div className='d-flex justify-content-around align-items-center py-3 container'>
                    <p className='m-0'> {ele.Rating} <i className="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                    <p className='m-0'><Link to={ele.location} className='text-decoration-none text-white'> {t("Location")} </Link></p>
                    {/* <span> Phone: {ele.number}</span> */}
                    <Link to={ele.website} className="text-decoration-none text-white" target='_blank'>{t("Website")} </Link>
                    <Link className="text-decoration-none text-white" onClick={() => { const whatsappURL = `https://wa.me/${ele.number}`; window.location.href = whatsappURL; }} ><p className='m-0'> {t("Phone")} </p></Link>

                  </div>
                  <div className='text-center pb-3 '>
                    <button  data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                      onClick={() => {
                        handleShowModal()
                        setMessage(ele.name)
                      }}
                      className={i18n.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor"}
                    >
                      {t("Feedback")}

                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>) : <h4>Loading ...</h4>}


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

      <FeedBackPopSuccess></FeedBackPopSuccess>

      
      </div>

    </>
  );
}
