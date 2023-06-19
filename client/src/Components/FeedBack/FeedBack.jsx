import React, { useContext, useEffect, useState } from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styles from './FeedBack.module.css'
import style from '../../App.css'





const FeedBack = ({ message }) => {



    console.log(message)
    const [isLoading, setisLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')
    const navigate = useNavigate()

    function handleRegister(values) {
        axios.post(`http://localhost:3005/feedback`, { ...values, feedBackTo: message })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }



    let validationSchema = yup.object({
        name: yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: yup.string().required('Email is required').email('Example: exa@gmail.com'),
        phone: yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}$/, "Number must be Egyptian number"),
        message: yup.string().required('Message is required').min(10)

    })


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

                            <div className='d-block w-100'>
                                {errorMsg ? <div className="alert p-2 alert-danger text-center">{errorMsg}</div> : null}
                            </div>


                            <input value={message} className='mb-4 form-control form-input lightGreenBackgroudColor'></input>

                            {/* Name */}
                            <div className='d-block w-100'>
                                <label htmlFor='name'>Name</label>
                                <input className='form-control mb-2 form-input' type="name" name='name' id='name' value={formik.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.name && formik.touched.name ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.name}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Email */}
                            <div className='d-block w-100'>
                                <label htmlFor='name'>Email</label>
                                <input className='form-control mb-2 form-input' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Phone */}
                            <div className='d-block w-100'>
                                <label htmlFor='name'>Phone</label>
                                <input className='form-control mb-2 form-input' type="tel" name='phone' id='phone' value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.phone && formik.touched.phone ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.phone}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>




                            {/* Messsage */}
                            <div className='d-block w-100'>
                                <label htmlFor='message'>Message</label>
                                <textarea rows={'10'} className={`${styles.resize} form-control mb-2 form-input`} type="text" name='message' id='message' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.message && formik.touched.message ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.message}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>



                            {isLoading ? <button type='button' className='btn btn-success w-100 mt-3'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn btn-success w-100 mt-3">Submit</button>}
                        </form>
                    </div>


                </div>
            </div>
        </div >
    );
}

export default FeedBack;
