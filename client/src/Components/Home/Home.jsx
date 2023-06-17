import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import img1 from '../../assets/homeImages/Cinema.png';
import img2 from '../../assets/homeImages/bank2.jpg';
import img3 from '../../assets/homeImages/hos2.jpg';
import img4 from '../../assets/homeImages/images.jpeg';
import img5 from '../../assets/homeImages/school5.jpg';
import img6 from '../../assets/homeImages/payment_3.jpg';
import sliderImg1 from '../../assets/homeImages/slider/slider1.jpg';
import sliderImg2 from '../../assets/homeImages/slider/slider2.jpg';
import sliderImg3 from '../../assets/homeImages/slider/slider3.jpg';
import sliderImg4 from '../../assets/homeImages/slider/slider4.jpg';
import sliderImg5 from '../../assets/homeImages/slider/slider5.jpg';
import sliderImg6 from '../../assets/homeImages/slider/slider6.jpg';
import sliderImg7 from '../../assets/homeImages/slider/slider7.jpg';
import sliderImg8 from '../../assets/homeImages/slider/slider8.jpg';
import sliderImg9 from '../../assets/homeImages/slider/slider9.jpg';
import sliderImg10 from '../../assets/homeImages/slider/slider10.jpg';
import sliderImg11 from '../../assets/homeImages/slider/slider11.jpg';
import Slider from 'react-slick';


export default function Home() {
    // Slider Setting
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: 0
                }
            }
        ],
        pauseOnHover: false,
        arrows: false
    };

    return (
        <>

            {/* Slider */}
            <div style={{ overflowX: 'hidden' }} className='position-relative '>
                <div className={`${styles.layer} p-2 mb-1`}></div>
                <Slider {...settings} >
                    <div>
                        <img src={sliderImg1} className='' style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg2} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg3} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg4} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg5} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg6} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg7} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg8} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg9} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg10} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                    <div>
                        <img src={sliderImg11} style={{ width: '100%', height: '100vh', objectFit: 'fill' }} alt='sliderImg'/>
                    </div>
                </Slider>

                <section className={`${styles.sliderText} w-100`}>
                    <div className='position-relative'>
                        <h3 className='position-absolute ms-3 mt-2 text-white'> Leave Your Fingerprint</h3>
                        <div className={`${styles.bar} `}>  </div>
                        <h3 className='position-absolute ms-3 mt-2 text-white'> Explore New Places and Discover </h3>
                        <div className={`${styles.bar} `}>  </div>
                        <h3 className='position-absolute ms-3 mt-2 text-white'> Feedback in Al Rehab, Cairo, Egypt </h3>
                        <div className={`${styles.bar} `}>  </div>

                    </div>
                </section>
            </div>



            {/* Services */}
            <section className='my-5'>
                <h5 className='text-center fw-bold fs-1 pb-5'>Services</h5>
                <div className="container">
                    <div className="row m-3">

                        <div className="col-md-6 col-lgcol-md-6 col-lg-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img2})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/banks" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Banks</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img4})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/markets" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Markets</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img3})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/hospitals" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Hospital</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img5})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/Education" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Education</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4">
                            <div className='p-3'>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img1})`, backgroundSize: "100% 100%", height: '200px' }} >
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/cinema" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Cinema</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6 col-lg-4">
                            <div className='p-3 '>
                                <div className={`${styles.dFlex} ${styles.font} position-relative`} style={{ backgroundImage: `url(${img6})`, backgroundSize: "100% 100%", height: '200px' }}>
                                    <Link className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  " to="/payment" style={{ textDecoration: 'none' }} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                        <h4 className='position-absolute top-50 mt-5'>Payment & Complain</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Categories */}
            <section className=''>
                <div className='container '>
                    <h5 className='text-center pb-5 fw-bold fs-1 my-4 '>Categories</h5>
                    <div className='row'>
                        <div className='col-sm-6 col-md-4 col-lg-3  text-center '>
                            <Link className='text-decoration-none text-dark' to={'/restaurants'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-utensils fs-1"></i>
                                    <div className=''>Restaurants</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/shopping'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-cart-shopping fs-1"></i>
                                    <div className=''>Shopping</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/fashion'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-shirt fs-1"></i>
                                    <div className=''>Fashion</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/health'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-heart-pulse fs-1"></i>
                                    <div className=''>Health</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/sports'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-table-tennis-paddle-ball fs-1"></i>
                                    <div className=''>Sports</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/maintenance'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-wrench fs-1"></i>
                                    <div className=''>Maintenance</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                            <Link className='text-decoration-none text-dark' to={'/homeServices'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-house-laptop fs-1"></i>
                                    <div className=''>Home Services</div>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-6 col-md-4 col-lg-3 text-center '>
                            <Link className='text-decoration-none text-dark' to={'/transportation'} onClick={() => {window.scroll({ top: 0,left: 0,behavior: "smooth",});}}>
                                <div className='p-4 shadow  m-2 bg-white rounded w-75 mx-auto'>
                                    <i className="fa-solid fa-truck-plane fs-1"></i>
                                    <div className=''>Transportation</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

