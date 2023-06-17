import React, { useContext } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'

export default function Banks() {

    const { bank } = useContext(DataContext)

    return <>
        <div className="container mt-3">
            <div className="row">
                {bank.map((ele) => <div key={ele.id} className='d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4'>

                    <div className='col-sm-12 col-lg-6'>

                        <div className='d-flex align-items-center mb-3'>
                        <img src={ele.logo} alt={ele.name}
                        className='rounded-circle shadow'
                        style={{ width: "80px", height: "80px" }} 
                         />
                        <h2 className='ms-5' >{ele.name}</h2>
                        </div>
                        <p className='opacity-75'>{ele.overview}</p>
                        <p> Call Center: <span className=' fw-bold'>{ele.number}</span></p>
                        <p> Website: <Link to={ele.website} target='_blank'>{ele.website}</Link></p>
                        <div className='d-sm-block d-md-flex justify-content-between'>
                            <div className='d-flex'>
                                <p>{ele.address}</p>
                                <Link to={ele.location} target='_blank' className='ms-2'><i className="fa-solid fa-location-dot"></i></Link>
                            </div>
                            <p className='pe-4'> Working hours: {ele.workinghours}</p>
                        </div>
                    </div>

                    <div className='col-sm-12 col-lg-6 mt-5'>
                        <img src={ele.img1} alt="" className='w-75 rounded-4 float-end d-none d-md-block' />
                    </div>

                </div>)}
            </div>
        </div>
    </>
}