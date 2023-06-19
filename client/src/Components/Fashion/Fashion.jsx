import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
export default function Banks() {

    const { fashion } = useContext(DataContext)
    const { t, i18n } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('')

    const handleShowModal = () => {
        setShowModal(!showModal);
    };


    return <>
        <div className="container mt-3">
            <div className="row">
                {fashion.map((ele) => <div key={ele.id} className='d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4'
                    style={{
                        direction: i18n.language === "ar" ? "rtl" : "",
                        textAlign: i18n.language === "ar" ? "right" : "",

                    }}
                >

                    <div className='col-md-6'>

                        <div className='d-flex align-items-center mb-3'>
                            <img src={ele.logo} alt={ele.name}
                                className='rounded-circle shadow'
                                style={{ width: "80px", height: "80px" }}
                            />
                            <h2 className={i18n.language === 'en' ? 'ms-5' : "me-5"} >{t(ele.name)}</h2>
                        </div>
                        <p className='opacity-75'>{t(ele.overview)}</p>
                        <p> {t("Call Center:")} <span className=' fw-bold'>{ele.number}</span></p>
                        <h6>{t("website :")} <Link to={ele.website} style={{ textDecoration: 'none' }}>  {t("Visit website")} </Link></h6>
                        <div className='d-sm-block d-md-flex justify-content-between'>
                            <div className='d-flex'>
                                <p>{t(ele.address)}</p>
                                <Link to={t(ele.location)} className='ms-2'><i class="fa-solid fa-location-dot"> </i></Link>
                            </div>
                        </div>
                        <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal"

                            onClick={() => {
                                handleShowModal()
                                setMessage(ele.name)
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

                    <div className='col-md-6 mt-5'>
                        <img src={ele.img2} alt="" style={{ height: "300px" }} className='w-75 rounded-4 float-end d-none d-md-block' />
                    </div>

                </div>)}



                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
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
}


