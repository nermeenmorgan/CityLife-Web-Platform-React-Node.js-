import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../Context/Data';
import styles from './Profile.module.css'
import { useTranslation } from "react-i18next";

const Profile = () => {
    // States
    const { allUserData } = useContext(DataContext)
    const { t, i18n } = useTranslation();

    // Functions
    function handleImage(e) {
        e.target.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }

    return (<>
          <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <section>
            <div>
                <div className='row my-3 mx-0'>
                    <div className='col-sm-10  col-md-6 col-xl-5 col-xxl-4  border border-1 rounded-4 shadow-lg mx-auto' style={{ backgroundColor: '#CEE9D8' }}>
                        {allUserData ? <div className=' mx-3  '>
                            <h2 className=' my-5 ms-3 text-center'>{allUserData.name}'s Profile</h2>
                            <img src={allUserData.image} onError={(e) => handleImage(e)} className={`${styles.resizeImg} w-75  rounded-4 d-block mx-auto`} alt='Img'></img>
                            <div className='w-75 mx-auto'>
                                <h3 className='my-5 '><i className="fa-sharp fa-solid fa-signature me-3"></i>{t(allUserData.name)}</h3>
                                <h4 className='my-5'><i className="fa-solid fa-envelope me-3"></i> {t(allUserData.email)}</h4>
                                <h4 className='my-5'>  <i className="fa-solid fa-phone me-3"></i>   {t(allUserData.phone)}</h4>
                                <h4 className='my-5'><i className="fa-solid fa-user me-3"></i> {t(allUserData.userName)}</h4>
                                <h4 className='my-5'> <i className="fa-solid fa-calendar-days me-3"></i> {t(allUserData.dob)}</h4>
                            </div>
                        </div> : <h1 className='text-center'>{t("Loading...")}</h1>}
                    </div>
                </div>

            </div>
        </section>





</div>
    </>

    );
}

export default Profile;
