import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/homeImages/Cinema.png";
import img2 from "../../assets/homeImages/bank2.jpg";
import img3 from "../../assets/homeImages/hos2.jpg";
import img4 from "../../assets/homeImages/images.jpeg";
import img5 from "../../assets/homeImages/school5.jpg";
import img6 from "../../assets/homeImages/payment_3.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";
import '../../App.css'
import styles from "./Home.module.css";

export default function Home() {
  const { t, i18n } = useTranslation();


  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])

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
          centerPadding: 0,
        },
      },
    ],
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <>
      {/* Slider */}
      <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      <div style={{ overflowX: "hidden", overflowY: "hidden" }} className="position-relative vh-100">
        <div className={`${styles.layer} `}></div>

        <div className="home ">
          <video autoPlay muted loop width={"100%"}>
            <source src="/videos/video1.mp4" type="video/mp4" />
          </video>
        </div>

        <section className={`${styles.sliderText} w-100`} >
          <div className=""
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              marginRight: i18n.language === "ar" ? "80px" : null
            }}
          >
            <h3 className={`position-absolute ms-3 mt-2 text-white ${i18n.language === "ar" && "me-4"}`}>
              {t("Leave Your Fingerprint")}
            </h3>
            <div className={`${styles.bar} `}> </div>
            <h3 className={`position-absolute ms-3 mt-2 text-white ${i18n.language === "ar" && "me-4"}`}>
              {t("Explore New Places and Discover")}
            </h3>
            <div className={`${styles.bar} `}> </div>
            <h3 className={`position-absolute ms-3 mt-2 text-white ${i18n.language === "ar" && "me-4"}`}>
              {t("Feedback in Al Rehab, Cairo, Egypt")}
            </h3>
            <div className={`${styles.bar} `}> </div>
          </div>
        </section>
      </div>


      {/* Services */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="lightGreenColor ">
        <h5 className="text-center  fw-bold fs-2 py-3 lightGreyBg">{t("Services")}</h5>
        <div className="container">
          <div className="row m-3">




            {/* Banks */}
            <div className={` col-md-6 col-lg col-md-6 col-lg-4 `}>
              <div className="p-3 scale" >
                <div className={`${styles.dFlex} ${styles.font} ${styles.catOP}  position-relative `} style={{ backgroundImage: `url(${img2})`, backgroundSize: "100% 100%", height: "200px" }} >
                  <div className={`${styles.layer}  `}>
                    <Link
                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  "
                      to="/banks"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }} >
                      <h4 className="position-absolute top-50 mt-5">{t("Banks")}</h4>
                    </Link>
                  </div>
                </div>
              </div>


            </div>



            {/* Markets */}
            <div className="col-md-6 col-lg-4 ">
              <div className="p-3  ">

                <div className={`${styles.dFlex} ${styles.font} ${styles.catOP} position-relative`} style={{ backgroundImage: `url(${img4})`, backgroundSize: "100% 100%", height: "200px", }} >

                  <div className={`${styles.layer}`}>
                    <Link

                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0 markets "
                      to="/markets" style={{ textDecoration: "none" }}
                      onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }} >
                      <h4 className="position-absolute top-50 mt-5">{t("Markets")}</h4>
                    </Link>
                  </div>

                </div>
              </div>
            </div>





            {/* Hospitals */}
            <div className="col-md-6 col-lg-4">
              <div className="p-3 ">
                <div
                  className={`${styles.dFlex} ${styles.font} ${styles.catOP} position-relative`}
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "100% 100%",
                    height: "200px",
                  }}
                >

                  <div className={`${styles.layer}`}>
                    <Link
                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  "
                      to="/hospitals"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      <h4 className="position-absolute top-50 mt-5">{t("Hospitals")}</h4>
                    </Link>
                  </div>

                </div>
              </div>
            </div>


            {/* Education */}
            <div className="col-md-6 col-lg-4">
              <div className="p-3 ">
                <div
                  className={`${styles.dFlex} ${styles.font} ${styles.catOP} position-relative`}
                  style={{
                    backgroundImage: `url(${img5})`,
                    backgroundSize: "100% 100%",
                    height: "200px",
                  }}
                >
                  <div className={`${styles.layer}`}>
                    <Link
                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  "
                      to="/Education"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      <h4 className="position-absolute top-50 mt-5">{t("Education")}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>




            {/* Cinema */}
            <div className="col-md-6 col-lg-4">
              <div className="p-3">
                <div
                  className={`${styles.dFlex} ${styles.font} ${styles.catOP} position-relative`}
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "100% 100%",
                    height: "200px",
                  }}
                >
                  <div className={`${styles.layer}`}>
                    <Link
                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  "
                      to="/cinema"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      <h4 className="position-absolute top-50 mt-5">{t("Cinema")}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>





            {/* Payment */}
            <div className="col-md-6 col-lg-4">
              <div className="p-3 ">
                <div
                  className={`${styles.dFlex} ${styles.font} ${styles.catOP} position-relative`}
                  style={{
                    backgroundImage: `url(${img6})`,
                    backgroundSize: "100% 100%",
                    height: "200px",
                  }}
                >
                  <div className={`${styles.layer}`}>
                    <Link
                      className="p-3 text-white fs-3 position-absolute top-0 bottom-0 start-0 end-0  "
                      to="/payment"
                      style={{ textDecoration: "none" }}
                      onClick={() => {
                        window.scroll({ top: 0, left: 0, behavior: "smooth" });
                      }}
                    >
                      <h4 className="position-absolute top-50 mt-5">
                        {t("Payment & Complain")}
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////////////////////////////////////////////////////////// */}
      {/* Categories */}
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="">
        <h5 className="text-center fw-bold fs-2 py-3 lightGreenColor lightGreyBg ">{t("Categories")}</h5>
        <div className="container  ">



          <div className="row g-3 my-3">





            {/* Restaurants */}

            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="text-decoration-none p-5 w-100" to={"/restaurants"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-utensils fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("Restaurants")}</div>
                </div>
              </Link>
            </div>


            {/* Shopping */}
            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/shopping"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-cart-shopping fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("Shopping")}</div>
                </div>
              </Link>
            </div>


            {/* Fashion */}
            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/fashion"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-shirt  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("Fashion")}</div>
                </div>
              </Link>
            </div>

          </div>




          {/* Row 2 */}
          {/* Health */}
          <div className="row g-3 my-3">
            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/health"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-heart-pulse  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("Health")}</div>
                </div>
              </Link>
            </div>








            {/* Sports */}
            <div className={`${styles.card} col-md-3 offset-1 mx-auto  shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/Sports"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-table-tennis-paddle-ball  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("Sports")}</div>
                </div>
              </Link>
            </div>





            {/* Maintenance */}
            <div className={`${styles.card} col-md-3 offset-1 mx-auto  shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/maintenance"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-wrench  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("maintenance")}</div>
                </div>
              </Link>
            </div>
          </div>



          {/* Row 4 */}
          {/* Home Services */}
          <div className="row g-3 my-3">
            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/homeServices"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-house-laptop fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("homeServices")}</div>
                </div>
              </Link>
            </div>


            {/* Transportations */}
            <div className={`${styles.card} col-md-3 offset-1 mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/transportation"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-truck-plane  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("transportation")}</div>
                </div>
              </Link>
            </div>



            {/* Banks */}
            <div className={`${styles.card} col-md-3 offset-1  mx-auto shadow-sm d-flex text-center align-items-center`}>
              <Link className="  text-decoration-none p-5 w-100" to={"/banks"} onClick={() => { window.scroll({ top: 0, left: 0, behavior: "smooth" }); }}>
                <div className={` mx-auto`}>
                  <i className={`fa-solid fa-building-columns  fs-1 mainColor `} ></i>
                  <div className="mainColor ">{t("banks")}</div>
                </div>
              </Link>
            </div>
          </div>


        </div>
      </section>
      </div>
    </>
  );
}
