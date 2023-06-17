// import React, { useContext } from 'react'
// import { DataContext } from '../../Context/Data';
// import styles from './fashion.module.css'
// import { Link } from 'react-router-dom';
// export default function Fashion() {

//     let { fashion } = useContext(DataContext)
//     // console.log(fashion);
//     return <>
//         <section className='row m-0 '>
//             {/* {fashion.map((fashion) =>
//                 <div key={fashion.id} className='p-sm-5 col-md-6 col-lg-4 mx-auto my-4'>
//                     <div className=' bg-dark  text-white p-sm-5'>
//                         <div className='w-100 text-center mb-4'>
//                             <img className='w-25 ' src={fashion.logo} alt='' />
//                         </div>
//                         <div className='images text-center'>
//                             <h5>{fashion.name}</h5>
//                             <img src={fashion.img1} className={`${styles.fashionImages} rounded rounded-4 p-2 `} alt=''></img>
//                             <img src={fashion.img2} className={`${styles.fashionImages} rounded rounded-4 p-2 `} alt=''></img>
//                             <img src={fashion.img3} className={`${styles.fashionImages} rounded rounded-4 p-2 `} alt=''></img>
//                                                   <h5> phone:{fashion.number}</h5>

//                         </div>
//                     </div>
//                 </div>)} */}
//             {fashion.map((e) =>
//                 <div className="row p-4 shadow  m-2 bg-white rounded w-75 mx-auto">
//                     <div className="col-md-9 ">
//                         <img className={`${styles.fashionLogo} shadow `} src={e.logo} alt=''></img>
//                         <h3  className='text-center'> overview</h3>
//                         <p className={`${styles.backgroundStyle}`}>{e.overview}</p>
//                             <h6> Name : {e.name}</h6>
//                             <h6> Location :  <Link to={e.location} style={{ textDecoration: 'none' }}>  {e.address}
//                               <i className="fa-solid fa-location-dot m-2"></i>
//                             </Link></h6>
//                            <h6> website : <Link to={e.website} style={{ textDecoration: 'none' }}>  Visit website </Link></h6> 
//                            <h6 > Rating : {e.Rating} <i class="fa-solid fa-star"></i></h6>    
//                     </div>
//                     <div className="col-md-3 m-auto" >
//                         <img className={`${styles.fashionImages}`} src={e.img1} alt=''></img>
//                     </div>
//                 </div>
//             )}
//         </section>
//     </>
// }
//////////////////////////////////////////////////////

import React, { useContext } from 'react'
import { DataContext } from '../../Context/Data'
import { Link } from 'react-router-dom'

export default function Banks() {

    const { fashion } = useContext(DataContext)

    return <>
        <div className="container mt-3">
            <div className="row">
                {fashion.map((ele) => <div key={ele.id} className='d-flex flex-row justify-content-between border shadow rounded-4 my-3 p-4'>

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


