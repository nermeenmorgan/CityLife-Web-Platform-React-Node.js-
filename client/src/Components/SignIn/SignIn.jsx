import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from "yup"
import { DataContext } from '../../Context/Data'

export default function SignIn() {

    const { saveUserData } = useContext(DataContext)

    const [isLoading, setisLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const navigate = useNavigate()
    // const history = useHistory();

    function handleLogin(values) {
        setisLoading(true)
        axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
            .then((res) => {
                if (res.data.message === "success") {
                    setisLoading(false)
                    localStorage.setItem("userToken", res.data.token)
                    saveUserData()
                    navigate(-1)
                }
            })
            .catch((err) => {
                setisLoading(false)
                seterrorMsg(err.response.data.message)
            })

    }

    let validationSchema = yup.object({
        email: yup.string().required('Email is required').email('Invalid email'),
        password: yup.string().required('Password is required').matches(/^[A-Za-z0-9-_.]{5,15}/, 'Invalid Password'),
    })

    let formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: handleLogin,
        validationSchema
    })

    return <>
        <div className="container">
            <div className="row">
                <h1 className='text-center mainColor mt-4 fw-bold'>Sign in</h1>
                <div className='d-flex flex-md-row flex-column-reverse'>
                    <div className='col-sm-12 col-md-6 d-flex align-items-center justify-content-center'>
                        <form onSubmit={formik.handleSubmit} className='d-flex flex-wrap'>

                            <div className='d-block w-100'>
                                {errorMsg ? <div className="alert p-2 alert-danger text-center">{errorMsg}</div> : null}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Email</label>
                                <input className='form-control mb-2 form-input' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            <div className='d-block w-100'>
                                <label htmlFor='name'>Password</label>
                                <input className='form-control mb-2 form-input' type="password" name='password' id='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.errors.password && formik.touched.password ? <span className=' opacity-100 text-danger ps-1'> {formik.errors.password}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {isLoading ? <button type='button' className='btn bg-main w-100 mt-3'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn bg-main text-white w-100 mt-3">Submit</button>}
                            <div className='mx-auto mt-3'>
                                <Link to='/signup'>
                                    <p>
                                        Create new account?
                                    </p>
                                </Link>
                            </div>
                        </form>

                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <img src="/images/login.jpg" alt="" className='w-100' />
                    </div>

                </div>
            </div >
        </div>
    </>
}