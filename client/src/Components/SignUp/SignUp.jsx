import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { DataContext } from '../../Context/Data'


export default function SignUp() {
    // States
    const [image, setImage] = useState()
    const [isLoading, setisLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')
    const [userName, setUserName] = useState('')
    const [dob, setDob] = useState('')
    const navigate = useNavigate()
    let { handleUserData } = useContext(DataContext)


    // Functions

    function handleProfileImage(e) {
        const url = URL.createObjectURL(e.target.files[0])
        setImage(url)
    }



    function handleRegister(values) {
        setisLoading(true)
        axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
            .then((res) => {
                if (res.data.message === "success") {
                    setisLoading(false)
                    navigate("/signin")
                }
            })
            .catch((err) => {
                setisLoading(false)
                seterrorMsg(err.response.data.message)
            })
    }


    let validationSchema = yup.object({
        name: yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: yup.string().required('Email is required').email('Example: exa@gmail.com'),
        phone: yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}/, "Number must be Egyptian number"),
        password: yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Password must be letters or numbers from 10 to 15 '),
        rePassword: yup.string().required('RePassword is required').oneOf([yup.ref("password", "Password doesn't match")]),
    })

    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            rePassword: ""
        },
        onSubmit: handleRegister,
        validationSchema,
    })


    return <>
        <div className="container">
            <div className="row">

                <h1 className='text-center mainColor mt-4 fw-bold'>Sign up</h1>
                <div className='d-flex flex-md-row flex-column-reverse'>


                    <div className='col-sm-12 col-md-6 d-flex align-items-center '>
                        <form onSubmit={formik.handleSubmit} className='d-flex flex-wrap'>

                            <div className='d-block w-100'>
                                {errorMsg ? <div className="alert p-2 alert-danger text-center">{errorMsg}</div> : null}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Name</label>
                                <input className='form-control mb-2 form-input' type="name" name='name' id='name' value={formik.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.name && formik.touched.name ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.name}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Email</label>
                                <input className='form-control mb-2 form-input' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Phone</label>
                                <input className='form-control mb-2 form-input' type="tel" name='phone' id='phone' value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.phone && formik.touched.phone ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.phone}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>













                            <div className='d-block w-100 pb-4'>
                                <label htmlFor='dob' >Date Of Birth</label>
                                <input className='form-control mb-2  form-input' type="date" name='dob' id='dob' onChange={(e) => setDob(e.target.value)} />
                            </div>



                            <div className='d-block w-100 pb-4'>
                                <label htmlFor='userName' >User Name</label>
                                <input className='form-control mb-2 form-input' type="text" name='userName' id='userName' onChange={(e) => setUserName(e.target.value)} />
                            </div>


                            <div className='d-block w-100 pb-4'>
                                <label htmlFor='pImage' >Personal Image</label>
                                <input className='form-control mb-2 form-input' type="file" name='pImage' id='pImage' accept='image/*' onChange={(e) => handleProfileImage(e)} />
                            </div>
















                            <div className='d-block w-100'>
                                <label htmlFor='name'>Password</label>
                                <input className='form-control mb-2 form-input' type="password" name='password' id='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.password && formik.touched.password ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.password}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Re Password</label>
                                <input className='form-control mb-2 form-input' type="password" name='rePassword' id='rePassword' value={formik.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.rePassword && formik.touched.rePassword ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.rePassword}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {isLoading ? <button type='button' className='btn dark-btn w-100 mt-3'><i className='fas fa-spinner fa-spin'></i></button> : <button onClick={() => handleUserData(formik.values, dob, userName, image)} disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn dark-btn w-100 mt-3">Submit</button>}
                        </form>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
                        <img className="w-100" src="/images/signupblue.jpeg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    </>
}