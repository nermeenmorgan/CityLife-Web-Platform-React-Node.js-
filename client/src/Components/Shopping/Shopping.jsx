import React, { useContext } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'

export default function Banks() {

    const { shopping } = useContext(DataContext)

    return <>
        <div className="container">
            <div className="row">

                {shopping.map((ele) => <div key={ele.id} className="w-75 mx-auto d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4">

                    <div className='col-sm-12 col-lg-6'>
                        <h2 >{ele.name}</h2>
                        <p> Stores: <span className=' fw-bold'>{ele.storesNum}</span></p>
                        <div className='d-flex'>
                            <p>{ele.address}</p>
                            <Link to={ele.location} target='_blank' className='ms-2'><i class="fa-solid fa-location-dot"></i></Link>
                        </div>
                    </div>

                    <div className='col-sm-12 col-lg-6'>
                        <img src={ele.img1} alt="" className='w-75 rounded-4 float-end d-sm-none d-md-block' />
                    </div>

                </div>)}

            </div>
        </div>

        {/* <div className="card">
            <img className="card-img-top" src={ele.img1} alt="" />
            <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p> Stores: <span className=' fw-bold'>{ele.storesNum}</span></p>
                <div className='d-flex'>
                    <p>{ele.address}</p>
                    <Link to={ele.location} target='_blank' className='ms-2'><i class="fa-solid fa-location-dot"></i></Link>
                </div>
            </div>
        </div> */}
    </>
}