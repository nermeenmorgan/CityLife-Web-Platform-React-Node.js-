import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './hospitals.css';
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
import FeedBackPopSuccess from "../FeedBack/FeedBackPopSuccess";
export default function Hospitals() {
  const { Centers } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('')

  const handleShowModal = () => {
    setShowModal(!showModal);
  };


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
      {/* New Design */}



      {/* Page Title */}
      <div className='container-fluid lightGreyBg py-3'>
        <h2 className='lightGreenColor text-center m-0'>Hospitals</h2>
      </div>




      <div className='row gy-4 p-0 m-0 w-75 mx-auto'>
        <h3 className="mt-5 text-center "> In our medical centers, you will find all specialties</h3>


        {/* Card */}
        {Centers ? Centers.map((ele) =>
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
                  <h4 className='text-center mainColor' >{ele.name}</h4>
                  <p className='text-center'>{ele.overview}</p>
                </div>
                <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                  <div className='d-flex justify-content-around align-items-center py-3 container'>
                    <p className='m-0'> {ele.Rating} <i className="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                    <p className='m-0'><Link to={ele.location} className='text-decoration-none text-white'> Location </Link></p>
                    {/* <span> Phone: {ele.number}</span> */}
                    <Link to={ele.website} className="text-decoration-none text-white" target='_blank'>Website </Link>
                    <Link className="text-decoration-none text-white" onClick={() => { const whatsappURL = `https://wa.me/${ele.number}`; window.location.href = whatsappURL; }} ><p className='m-0'> Phone </p></Link>

                  </div>
                  <div className='text-center pb-3 '>
                    <button data-bs-target="#exampleModalToggle4" data-bs-toggle="modal"
                      onClick={() => {
                        handleShowModal()
                        setMessage(ele.name)
                      }}
                      data-whatever="@mdo"
                      className={i18next.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor"}
                    >
                      {t("Feedback")}

                    </button>
                    <button className="btn my-2 lightGreyBg lightGreenColor d-block mx-auto w-50 btn-mainColor " data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => { handleCenterName(ele.name); }} >
                      Book a clinic </button>
                  </div>
                </div>
              </div>
            </div>
          </div>) : <h4>Loading ...</h4>}



        {/* Handle Booking Data */}
        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1" >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header lightGreenBackgroudColor lightGreyBg ">
                <h4 className="modal-title  lightGreenColor w-100  text-center" id="exampleModalToggleLabel2 "   >
                  Your appointment details
                </h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClear} ></button>
              </div>

              <div className="modal-body d-flex flex-column align-items-center ">
                {appointDetails ? (
                  <>
                    <p className=" fs-5 text-center">
                      Name: {appointDetails.name}
                    </p>
                    <p className=" fs-5 text-center">
                      Date: {appointDetails.date}
                    </p>
                    <p className=" fs-5 text-center">
                      Time: {appointDetails.time}
                    </p>
                    <p className=" fs-5 text-center">
                      Specialty: {appointDetails.specialty}
                    </p>
                    <p className=" fs-5 text-center">
                      in {appointDetails.centerName}
                    </p>
                  </>
                ) : null}
              </div>

            </div>
          </div>
        </div>




        {/* Pop up */}
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header text-white lightGreenBackgroudColor ">
                <h1 className="modal-title fs-5 w-100 text-center  " id="exampleModalToggleLabel" > Clinic appointment </h1>
                <button type="button" className="btn-close btn-close-white " data-bs-dismiss="modal" aria-label="Close" style={{ color: 'white' }}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <label className="form-label" htmlFor="name"> Your Name: </label>
                  <input className="form-control" type="name" name="name" value={appointDetails.name} onChange={handleChange} id="name" ></input>
                  <label className="form-label" htmlFor="date">
                    Choose Date:
                  </label>
                  <input className="form-control" type="date" name="date" value={appointDetails.date} onChange={handleChange} id="date" ></input>
                  <label className="form-label" htmlFor="time">
                    Choose time:
                  </label>
                  <input className="form-control" type="time" name="time" value={appointDetails.time} onChange={handleChange} id="time" step="1800" ></input>
                  <label htmlFor="exampleDataList" className="form-label" >
                    Specialty:
                  </label>
                  <input name="specialty" value={appointDetails.specialty} onChange={handleChange} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
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
                <div className="modal-footer w-100 ">
                  <button
                    className="btn dark-btn mx-auto text-center w-50 rounded-1 "
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal" >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


        {/* FeedBack */}
        <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
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

      <FeedBackPopSuccess></FeedBackPopSuccess>


      {/* <div
           className="modal fade"
           id="exampleModalToggle3"
           aria-hidden="true"
           aria-labelledby="exampleModalToggleLabel3"
           tabIndex="-1"
       >
           <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                   <div className="modal-header">

                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
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
       </div> */}

    </>

  );
}

