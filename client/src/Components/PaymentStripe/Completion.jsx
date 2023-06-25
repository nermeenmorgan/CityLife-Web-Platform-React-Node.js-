import React, { useContext } from "react";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Completion() {
  // States
  const { userData } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()

  return (
    <>

{/* <div className='container-fluid lightGreyBg py-3'>
            <h2 className='lightGreenColor text-center m-0'>{t('Banks')}</h2>
        </div> */}

{userData === null ? 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">{t("Loading...")}</span>
          </div>
        </div>:
 <div className='row gy-4 p-0 m-0 w-75 mx-auto'>
                <div  className='col-md-5 mx-auto px-0'>
                    <div className='shadow-sm'>
                        <div className='position-relative'>
                            <div className='layer rounded-top-3'></div>
                        </div>
                        <div className=''>
                            <div className='text-center container pt-3'>
                              <i
                               className=" text-center fa-sharp fa-regular fa-circle-check"
                               style={{ color: "#14992a", fontSize: 180 }}
                             ></i>
                                <h4 className='text-center mainColor fs-2 my-3' > {t("Payment Success")}, {t(userData.name)}</h4>
                                {/* <p className='text-center'>{t("asdasd")}</p> */}
                            </div>
                            <div className='lightGreenBackgroudColor text-white  rounded-bottom-3'>
                                <div className='text-center pb-3'>
                                    <button onClick={()=>navigate(-1)}
                                        className={i18n.language === 'en' ? "btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor mt-3" : " btn lightGreyBg lightGreenColor text-center w-50 rounded-1 btn-mainColor mt-3 "}
                                    >
                                         {t('Back')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>}

          {/* <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      {userData === null ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">{t("Loading...")}</span>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <i
              className="fa-sharp fa-regular fa-circle-check text-center"
              style={{ color: "#14992a", fontSize: 180 }}
            ></i>
            <h1 className="text-center" style={{ fontSize: 80 }}>
              {t("Payment Success")}, {t(userData.name)}
            </h1>
          </div>
        </div>
      )}
      </div> */}
    </>
  );
}
