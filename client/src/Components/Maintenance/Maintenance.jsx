import React, { useContext, useState } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'
import FeedBack from '../FeedBack/FeedBack'
import i18next, { t } from 'i18next'
export default function Banks() {
    // States
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('')


    // Functions
    const handleShowModal = () => {
        setShowModal(!showModal);
    };

    const { maintenance } = useContext(DataContext)

    return <>
        {/* New  Design */}
        <div className='container-fluid lightGreyBg py-3'>
            <h2 className='lightGreenColor text-center m-0'>Maintenance</h2>
        </div>
        <div className='row gy-4 p-0 m-0 w-75 mx-auto'>
            {maintenance.map((ele) =>
                <div key={ele.id} className='col-md-5 mx-auto px-0'>
                    <div className='shadow-sm'>
                        <div className='position-relative'>
                            <div className='layer rounded-top-3'></div>
                            <img src={ele.img1} alt="" style={{ width: '100%', height: '300px' }} className='rounded-top-3' />
                        </div>
                        {/* Data */}
                        <div className=''>
                            <div className='container pt-3'>
                                <h4 className='text-center mainColor' >{ele.name}</h4>
                                <p className='text-center'>{ele.overview}</p>
                            </div>
                            <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                                <div className='d-flex justify-content-around align-items-center py-3 container'>
                                    <p className='m-0'> {ele.Rating} <i className="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
                                    <p className='m-0'><Link to={ele.location} className='text-decoration-none text-white'> Location </Link></p>
                                    <Link to={ele.website} className='text-white text-decoration-none'>Website</Link>
                                    <Link className="text-decoration-none text-white" onClick={() => { const whatsappURL = `https://wa.me/${ele.number}`; window.location.href = whatsappURL; }} ><p className='m-0'> Phone </p></Link>
                                </div>
                                <div className='text-center pb-3 '>
                                    <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => {
                                        handleShowModal()
                                        setMessage(ele.name)
                                    }}
                                        data-whatever="@mdo"
                                        className={i18next.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor"}
                                    >
                                        {t("Feedback")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>

        {/* Modal */}
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
    </>
}
