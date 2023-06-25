import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/Data';
import styles from './Profile.module.css'
import { useTranslation } from "react-i18next";

const Profile = () => {

    // States
    const { allUserData, setAllUserData } = useContext(DataContext)
    const [userImage, setUserImage] = useState(null)
    const [updateDone, setUpdateDone] = useState(false)
    const [test, setTest] = useState(false)




    const { t, i18n } = useTranslation();

    // Functions

    function handleInputChange(value, e) {
        let newObj = { ...allUserData };
        if (value === 'image') {
            const url = URL.createObjectURL(e.target.files[0])
            newObj[value] = url
            setTest(!test)
            console.log(newObj);
            setAllUserData({ ...newObj })

            localStorage.setItem("image", url)
        } else {
            localStorage.setItem(value, e.target.value)
            newObj[value] = e.target.value
            setTest(!test)
            console.log(newObj);
            setAllUserData({ ...newObj })
        }

    }

    function handleProfileImage(e) {
        const url = URL.createObjectURL(e.target.files[0])
        setUserImage(url)
    }

    function submitUserData(value) {
        setUpdateDone(value)
    }

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
                        <div className={`${styles.test}`}>
                            {allUserData ? <div className='mx-3'>

                                {!updateDone ?
                                    <div className='row  shadow-sm mx-auto w-75'>
                                        {console.log(updateDone)}

                                        <h1 className=' text-center mainColor mt-4 fw-bold  '>{t(allUserData.name)}'s Profile</h1>
                                        <div className={i18n.language === "en" ? 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center ms-auto' : 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center me-auto'}>
                                            <img src={allUserData.image} className={`${styles.resizeImg} w-100 d-block mx-auto`} alt='Img'
                                                onError={(e) => handleImage(e)} >
                                            </img>
                                        </div>

                                        <div className={i18n.language === "en" ? 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center me-auto' : 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center ms-auto'}>
                                            <label htmlFor='name'> {t("Name")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor ' name='name' id='name' type="text" defaultValue={t(allUserData.name)} disabled />
                                            <label htmlFor='email'>{t("Email")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='email' id='email' type="text" defaultValue={t(allUserData.email)} disabled />
                                            <label htmlFor='phone'>{t("Phone")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='phone' id='phone' type="text" defaultValue={t(allUserData.phone)} disabled />
                                            <label htmlFor='userName'>{t("User Name")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='userName' id='userName' type="text" defaultValue={t(allUserData.userName)} disabled />
                                            <label htmlFor='dob'>{t("Date Of Birth")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='dob' id='dob' type="date" defaultValue={t(allUserData.dob)} disabled />
                                            <div className='text-center  mb-3'>
                                                <button className='btn dark-btn w-100 mt-3' onClick={() => submitUserData(true)}>  {t("Edit")}</button>
                                            </div>
                                        </div>

                                    </div>


                                    :


                                    <div className='row shadow-sm mx-auto w-75'>
                                        <h3 className=' my-3 ms-3 text-center mainColor'>{allUserData.name}'s Profile</h3>
                                        {console.log(updateDone)}
                                        <div className={i18n.language === "en" ? 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center ms-auto' : 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center me-auto'}>
                                            <img src={allUserData.image} className={`${styles.resizeImg} w-100 d-block mx-auto rounded-2`} alt='Img'
                                                onError={(e) => handleImage(e)} >
                                            </img>
                                        </div>

                                        <div className={i18n.language === "en" ? 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center me-auto' : 'col-md-6 col-xxl-4 d-flex flex-column justify-content-center ms-auto'}>
                                            <input className='form-control w-100 my-4 lightGreyBg lightGreenColor' type="file" onChange={(e) => {
                                                handleProfileImage(e)
                                                handleInputChange("image", e)
                                            }} />
                                            <label htmlFor='name'>{t("Name")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor ' name='name' id='name' type="text" defaultValue={allUserData.name} onChange={(e) => handleInputChange("name", e)} />
                                            <label htmlFor='email'>{t("Email")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='email' id='email' type="text" defaultValue={allUserData.email} onChange={(e) => handleInputChange("email", e)} />
                                            <label htmlFor='phone'>{t("Phone")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='phone' id='phone' type="text" defaultValue={allUserData.phone} onChange={(e) => handleInputChange("phone", e)} />
                                            <label htmlFor='userName'>{t("User Name")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='userName' id='userName' type="text" defaultValue={allUserData.userName} onChange={(e) => handleInputChange("userName", e)} />
                                            <label htmlFor='dob'>{t("Date Of Birth")}</label>
                                            <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='dob' id='dob' type="date" defaultValue={allUserData.dob} onChange={(e) => handleInputChange("dob", e)} />
                                            <div className='text-center  mb-3'>
                                                <button className='btn dark-btn w-100 mt-3' onClick={() => submitUserData(false)}>{t("Update")}</button>
                                            </div>
                                        </div>
                                    </div>

                                }

                                {/* 
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
                        </div> : <h1 className='text-center'>{t("Loading...")}</h1>} */}


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
