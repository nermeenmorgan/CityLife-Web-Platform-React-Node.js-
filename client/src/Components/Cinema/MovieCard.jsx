import React, { useContext } from 'react';
import { DataContext } from '../../Context/Data';
import { useTranslation } from "react-i18next";

export default function MovieCard({ movie }) {
  // States
  const { t, i18n } = useTranslation();
  const { userData } = useContext(DataContext)

  return (

    <div className='col-4 my-3'
      style={{
        direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
      }} >
      <div className="" >

        <div className="card shadow-sm mx-auto ">
          <img src={movie.img} className="card-img-top" height={400} alt="..." />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title fw-bolder">{t(movie.name)}</h5>
              <p className='m-0'> {movie.Rating} <i class="fa-solid fa-star" style={{ color: '#C3801B' }}></i> </p>
            </div>
            <p className="card-text line-clamp-3">
              {t(movie.overview)}
            </p>
          </div>

          <ul className={`list-group list-group-flush ${i18n.language === "ar" && "p-0"}`}>
            <li className="list-group-item"><span className='fw-bolder'>{t("Type")}:</span> {t(movie.type)}</li>
            <li className="list-group-item d-flex justify-content-between">
              <span><span className='fw-bold'>{t("Language")}:</span> {t(movie.language)}</span>
              <span><span className='fw-bold'>{t("Country")}:</span> {t(movie.country)}</span>
            </li>
            <li className="list-group-item">
              <span className='fw-bold'>{t("Cast")}:</span>  {t(movie.actors)}
            </li>
          </ul>
          <div className="card-body text-center">
            <button
              disabled={userData === null ? true : (movie.soon ? true : false)}
              className="btn dark-btn w-50"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              {t("Ticket")}
            </button>
          </div>
        </div>
      </div>



    </div>

  )
}
