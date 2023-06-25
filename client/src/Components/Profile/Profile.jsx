import React, { useContext, useState } from 'react';
import { DataContext } from '../../Context/Data';
import styles from './Profile.module.css'
const Profile = () => {

    // States
    const { allUserData, setAllUserData } = useContext(DataContext)
    const [userImage, setUserImage] = useState(null)
    const [updateDone, setUpdateDone] = useState(false)
    const [test, setTest] = useState(false)



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
        <section>
            <div>
                <div className='row my-3 mx-0'>
                    <div className={`${styles.test}`}>
                        {allUserData ? <div className='mx-3'>

                            {!updateDone ?
                                <div className='row  shadow-sm mx-auto w-75'>
                                    {console.log(updateDone)}

                                    <h1 className=' text-center mainColor mt-4 fw-bold  '>{allUserData.name}'s Profile</h1>

                                    <div className='col-md-6 col-xxl-4 d-flex flex-column justify-content-center ms-auto'>
                                        <img src={allUserData.image} className={`${styles.resizeImg} w-100 d-block mx-auto`} alt='Img'
                                            onError={(e) => handleImage(e)} >
                                        </img>
                                    </div>

                                    <div className='col-md-6 col-xxl-4 d-flex flex-column justify-content-center me-auto '>
                                        <label htmlFor='name'>Name</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor ' name='name' id='name' type="text" defaultValue={allUserData.name} disabled />
                                        <label htmlFor='email'>Email</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='email' id='email' type="text" defaultValue={allUserData.email} disabled />
                                        <label htmlFor='phone'>Phone</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='phone' id='phone' type="text" defaultValue={allUserData.phone} disabled />
                                        <label htmlFor='userName'>User Name</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='userName' id='userName' type="text" defaultValue={allUserData.userName} disabled />
                                        <label htmlFor='dob'>Date Of Birth</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='dob' id='dob' type="date" defaultValue={allUserData.dob} disabled />
                                        <div className='text-center  mb-3'>
                                            <button className='btn dark-btn w-100 mt-3' onClick={() => submitUserData(true)}>Edit</button>
                                        </div>
                                    </div>

                                </div>


                                :


                                <div className='row shadow-sm mx-auto w-75'>
                                    <h3 className=' my-3 ms-3 text-center mainColor'>{allUserData.name}'s Profile</h3>
                                    {console.log(updateDone)}
                                    <div className='col-md-6 d-flex flex-column justify-content-center'>
                                        <img src={allUserData.image} className={`${styles.resizeImg} w-100 d-block mx-auto rounded-2`} alt='Img'
                                            onError={(e) => handleImage(e)} >
                                        </img>
                                    </div>

                                    <div className='col-md-6 d-flex flex-column justify-content-center '>
                                        <input className='form-control w-100 my-4 lightGreyBg lightGreenColor' type="file" onChange={(e) => {
                                            handleProfileImage(e)
                                            handleInputChange("image", e)
                                        }} />
                                        <label htmlFor='name'>Name</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor ' name='name' id='name' type="text" defaultValue={allUserData.name} onChange={(e) => handleInputChange("name", e)} />
                                        <label htmlFor='email'>Email</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='email' id='email' type="text" defaultValue={allUserData.email} onChange={(e) => handleInputChange("email", e)} />
                                        <label htmlFor='phone'>Phone</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='phone' id='phone' type="text" defaultValue={allUserData.phone} onChange={(e) => handleInputChange("phone", e)} />
                                        <label htmlFor='userName'>User Name</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='userName' id='userName' type="text" defaultValue={allUserData.userName} onChange={(e) => handleInputChange("userName", e)} />
                                        <label htmlFor='dob'>Date Of Birth</label>
                                        <input className='form-control w-100 my-3 lightGreyBg lightGreenColor' name='dob' id='dob' type="date" defaultValue={allUserData.dob} onChange={(e) => handleInputChange("dob", e)} />
                                        <div className='text-center  mb-3'>
                                            <button className='btn dark-btn w-100 mt-3' onClick={() => submitUserData(false)}>Update</button>
                                        </div>
                                    </div>
                                </div>

                            }




                        </div> : <h1 className='text-center'>Loading...</h1>}
                    </div>
                </div>
            </div>
        </section>
    </>

    );
}

export default Profile;
