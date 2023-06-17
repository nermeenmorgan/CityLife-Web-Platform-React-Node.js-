import React, { useState } from 'react';
import styles from './ContactUs.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
// import myImage from '../../assets/MicrosoftTeams-image.png';
export default function ContactUs() {

    const [showModal, setShowModal] = useState(false);

    // function handleSubmit() {

    // };

    let navigate = useNavigate()
    // Form Validation
    let validationSchema = Yup.object({
        name: Yup.string().required().min(3, "Name must be between 3 and 40 characters").max(40),
        email: Yup.string().required().email("Example: example@gmail.com "),
        phone: Yup.string().required().matches(/^01[0125][0-9]{8}$/, 'Phone Must Be Egyption Number'),
        message: Yup.string().required().min(5, "Message must be between 5 and 500 charcters").max(500),
    })
    // Formik
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema,
        onSubmit: () => {
            setShowModal(true)
        }
    })
    return <>

        <div className='row container mx-auto my-5 '>

            <section className='col-lg-8 px-5'>
                <div className='container'>
                    <div className='my-3'>
                        <h3>Get in touch</h3>
                        <h5 className={`${styles.lightFont}`}>We will answer your questions and problems</h5>
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>

                            {/* Name */}
                            <div className="form-group my-0">
                                <label htmlFor="name" className='mb-2'>Name</label>
                                <input onBlur={formik.handleBlur} autoComplete="off" placeholder='Enter your name ' className={`form-control mb-2  ${styles.input} ${formik.touched.name && formik.errors.name ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.name} type='text' name='name' id='name' />
                                {formik.errors.name && formik.touched.name ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.name}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {/* Email */}
                            <div className="form-group my-0">
                                <label htmlFor="email" className='mb-2'>Email</label>
                                <input onBlur={formik.handleBlur} autoComplete="off" placeholder='Enter your email' className={`form-control mb-2  ${styles.input} ${formik.touched.email && formik.errors.email ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email'></input>
                                {formik.errors.email && formik.touched.email ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.email}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {/* Phone */}
                            <div className="form-group my-0">
                                <label htmlFor="phone" className='mb-2'>Phone</label>
                                <input onBlur={formik.handleBlur} autoComplete="off" placeholder='Enter your phone number' className={`form-control mb-2  ${styles.input} ${formik.touched.phone && formik.errors.phone ? styles.alert : styles.input}`} onChange={formik.handleChange} value={formik.values.phone} type='tel' name='phone' id='phone'></input>
                                {formik.errors.phone && formik.touched.phone ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.phone}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {/* Message */}
                            <div className="form-group my-0">
                                <label htmlFor="message" className='mb-2'>Message</label>
                                <textarea onBlur={formik.handleBlur} autoComplete="off" placeholder='Leave us your message ' className={`form-control mb-2  ${styles.input} ${styles.textArea_noResize} ${formik.touched.message && formik.errors.message ? styles.alert : styles.input}`} rows={10} onChange={formik.handleChange} value={formik.values.message} type='text' name='message' id='message'></textarea>
                                {formik.errors.message && formik.touched.message ? <span className=' opacity-100 text-danger ps-3'> {formik.errors.message}</span> : <span className=' opacity-0'> lorem </span>}
                            </div>

                            {/* Submit */}
                            <button disabled={!(formik.isValid && formik.dirty)} type='submit' data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-mainColor rounded rounded-2 danger w-50 d-block mx-auto py-2 my-5">Submit</button>
                        </form>
                    </div>
                </div>
            </section>



            <section className={`${styles.contacts_section} col-lg-4 px-3 rounded rounded-4`}>
                <div className={`${styles.contact_us_shadow} container my-3`}>
                    <h4 className='text-center'>Contact us</h4>

                    {/* Email */}
                    <div className='Email-Section mb-5 mt-3'>
                        <h4>Email: </h4>
                        <h5 className={`${styles.lightFont}`}>Rehab@gmail.com </h5>
                        <h5 className={`${styles.lightFont}`}>city.hall@gmail.com</h5>
                    </div>

                    {/* Telephone */}
                    <div className='Telephone-Section my-5'>
                        <h4>Telephone: </h4>
                        <h5 className={`${styles.lightFont}`}>+20 87 48 121 </h5>
                        <h5 className={`${styles.lightFont}`}>+20 87 48 122</h5>
                        <h5 className={`${styles.lightFont}`}>+20 87 48 123</h5>
                    </div>

                    {/* Phone */}
                    <div className='Phone-Section my-5'>
                        <h4>Phone: </h4>
                        <h5 className={`${styles.lightFont}`}> +20 111 28 90765 </h5>
                        <h5 className={`${styles.lightFont}`}> +20 112 28 90765 </h5>
                        <h5 className={`${styles.lightFont}`}> +20 101 28 90765 </h5>
                    </div>

                    {/* City Hall Location */}
                    <div className='Location-Section'>
                        <h3>City Hall Location</h3>
                        <iframe className='w-100 rounded rounded-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3247936468965!2d31.48897794067131!3d30.05622321811579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145818877c6420e1%3A0x1349a9d9b21a0405!2sREHAB%20CITY!5e0!3m2!1sen!2seg!4v1686232817105!5m2!1sen!2seg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </div>


        {/* POP UP */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">


                    <div className="modal-body mx-auto fs-4">
                        Message Sent Successfully
                    </div>
                    <i className="fa-solid fa-check  fs-1 mx-auto" style={{ color: "#2aa509" }}
                    ></i>
                    <div className="modal-footer border-0 w-100">
                        <button onClick={() => navigate('/')} type="button" className="w-50 mx-auto  btn btn-primary text-white" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}
