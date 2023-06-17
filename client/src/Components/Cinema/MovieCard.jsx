import React, { useContext } from 'react';
import { DataContext } from '../../Context/Data';


export default function MovieCard({movie}) {
  const {userData}= useContext(DataContext)
  // console.log(userData)
  return (
    <div
    className="col-lg-4 col-md-6 col-12 my-3 pe-3"
  >
    <div className="card shadow mx-auto" style={{ width: 350 }}>
      <img
        src={movie.img}
        className="card-img-top"
        height={400}
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title fw-bolder">{movie.name}</h5>
          <h6 className="card-title">
            <i
              className="fa-sharp fa-solid fa-star"
              style={{ color: "#ffdf0f" }}
            />
            {movie.Rating}
          </h6>
        </div>
        <p className="card-text line-clamp-3">
          {movie.overview}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><span className='fw-bolder'>Type:</span> {movie.type}</li>
        <li className="list-group-item d-flex justify-content-between">
          <span><span className='fw-bolder'>Language:</span> {movie.language}</span>
          <span><span className='fw-bolder'>Country:</span> {movie.country}</span>
        </li>
        <li className="list-group-item">
        <span className='fw-bolder'>Cast:</span>  {movie.actors}
        </li>
      </ul>
      <div className="card-body text-center">
        <button
          disabled={userData===null? true : ( movie.soon ? true: false)}
          className="btn btn-success w-50"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          Ticket
        </button>
      </div>
    </div>
  </div>
  )
}
