import React, { useContext } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'

export default function Banks() {

    const { homeServices } = useContext(DataContext)

    return <>
        <div className="container mt-3">
            <div className="row">


                {homeServices.map((ele) => <div key={ele.id} className='d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4'>

                    <div className='col-md-6'>

                        <div className='d-flex align-items-center mb-3'>
                            <img src={ele.logo} alt={ele.name}
                                className='rounded-circle shadow'
                                style={{ width: "80px", height: "80px" }}
                            />
                            <h2 className='ms-5' >{ele.name}</h2>
                        </div>
                        <p className='opacity-75'>{ele.overview}</p>
                        <p> Call Center: <span className=' fw-bold'>{ele.number}</span></p>
                        <h6> website : <Link to={ele.website} style={{ textDecoration: 'none' }}>  Visit website </Link></h6>
                        <div className='d-sm-block d-md-flex justify-content-between'>
                            <div className='d-flex'>
                                <p>{ele.address}</p>
                                <Link to={ele.location} className='ms-2'><i class="fa-solid fa-location-dot"> </i></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 mt-5'>
                        <img src={ele.img2} alt="" className='w-75 rounded-4 float-end d-none d-md-block' />
                    </div>

                </div>)}





            </div>
        </div>
    </>
}
