import React, { useState } from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import axios from 'axios'
import styles from './FeedBack.module.css'
import i18next, { t } from "i18next";
import '../../App.css'




const FeedBack = ({ message }) => {
    // Stated
    const [isLoading, setisLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    // Functions
    function handleRegister(values) {
        axios.post(`http://localhost:3005/feedback`, { ...values, feedBackTo: message })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    // Validation
    let validationSchema = yup.object({
        name: yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: yup.string().required('Email is required').email('Example: exa@gmail.com'),
        phone: yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}$/, "Number must be Egyptian number"),
        message: yup.string().required('Message is required').min(10)

    })


    // Formik
    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        onSubmit: handleRegister,
        validationSchema,
    })



    return (
        <div>
            <h1 className='text-center'>FeedBack</h1>
            <div className="row">

                <div className='d-flex flex-md-row flex-column-reverse'>


                    <div className=' d-flex align-items-center  mx-auto'>
                        <form onSubmit={formik.handleSubmit} className='d-flex flex-wrap'>

                            {/* Error */}
                            <div className='d-block w-100'>
                                {errorMsg ? <div className="alert p-2 alert-danger text-center">{errorMsg}</div> : null}
                            </div>


                            {/* Feed Back TO */}
                            <div className='w-100 '>
                                <label htmlFor='feedBackTo'>Feedback to</label>
                                <input defaultValue={message} className='text-center w-100 mb-4 form-control form-input lightGreenBackgroudColor ' id='feedBackTo' disabled></input>

                            </div>

                            {/* Name */}
                            <div className='w-100'>
                                <label htmlFor='name'>Name</label>
                                <input className=' w-100 form-control mb-2 form-input' type="name" name='name' id='name' value={formik.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.name && formik.touched.name ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.name}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Email */}
                            <div className='w-100'>
                                <label htmlFor='name'>Email</label>
                                <input className=' w-100 form-control mb-2 form-input' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Phone */}
                            <div className='w-100'>
                                <label htmlFor='name'>Phone</label>
                                <input className=' w-100 form-control mb-2 form-input' type="tel" name='phone' id='phone' value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.phone && formik.touched.phone ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.phone}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Messsage */}
                            <div className='w-100'>
                                <label htmlFor='message'>Message</label>
                                <textarea rows={'10'} className={`${styles.resize} form-control mb-2 form-input`} type="text" name='message' id='message' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.message && formik.touched.message ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.message}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>



                            {isLoading ? <button type='button' className='btn dark-btn w-100 mt-3'><i className='fas fa-spinner fa-spin'></i></button> :
                                <button className=" btn dark-btn w-100 mt-3" data-bs-dismiss="modal" aria-label="Close" disabled={!(formik.isValid && formik.dirty)} type="submit">Submit</button>}
                        </form>
                    </div>


                </div>
            </div>







            {/* Success Popup */}
            {/* <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
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






        </div>
    );
}

export default FeedBack;
