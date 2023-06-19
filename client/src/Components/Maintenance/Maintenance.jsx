import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
export default function Banks() {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('')

    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const { maintenance } = useContext(DataContext)

    return <>
        <div className="container mt-3">
            <div className="row">

                {maintenance.map((ele) => <div key={ele.id} className='d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4'>

                    <div className='col-md-6'>

                        <div className='d-flex align-items-center mb-3'>
                            <img src={ele.logo} alt={ele.name}
                                className='rounded-circle shadow'
                                style={{ width: "80px", height: "80px" }}
                            />
                            <h2 className='ms-5' >{ele.name}</h2>
                        </div>
                        <p className='opacity-75'>{ele.overview}</p>
                        <p> Call Center: <span className=' fw-bold'>{ele.number}</span></p>
                        <h6> website : <Link to={ele.website} style={{ textDecoration: 'none' }}>  Visit website </Link></h6>
                        <div className='d-sm-block d-md-flex justify-content-between'>
                            <div className='d-flex'>
                                <p>{ele.address}</p>
                                <Link to={ele.location} className='ms-2'><i class="fa-solid fa-location-dot"> </i></Link>
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
                        <img src={ele.img2} alt="" className='w-75 rounded-4 float-end d-none d-md-block' />
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
