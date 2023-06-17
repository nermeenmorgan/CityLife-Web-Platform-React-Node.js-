import React, { useContext } from 'react';
import { DataContext } from '../../Context/Data';
const Profile = () => {
    let { allUserData } = useContext(DataContext)




    return (<>
        <section>
            <div>
                <h1 className='text-center'>Profile</h1>
                <div className='row my-5 mx-0 '>
                    <div className='col-md-4  border border-1 shadow-lg mx-auto'>
                        {allUserData ? <div className='mx-3 my-5 '>
                            <h5 className='my-5'><i class="fa-solid fa-signature me-3"></i> {allUserData.name}</h5>
                            <h5 className='my-5'><i class="fa-solid fa-envelope me-3"></i> {allUserData.email}</h5>
                            <h5 className='my-5'>  <i class="fa-solid fa-phone me-3"></i>   {allUserData.phone}</h5>
                            <h5 className='my-5'> <i class="fa-solid fa-lock me-3"></i> {allUserData.password}</h5>
                            <h5 className='my-5'> <i class="fa-solid fa-calendar-days me-3"></i> {allUserData.dob}</h5>
                            <h5 className='my-5'><i class="fa-solid fa-user me-3"></i> {allUserData.userName}</h5>
                        </div> : ''}
                    </div>
                </div>

            </div>
        </section>






    </>

    );
}

export default Profile;
