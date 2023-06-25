import React from 'react'
import styles from './FeedBack.module.css'
import { useTranslation } from "react-i18next";
import '../../App.css'

export default function FeedBackPopSuccess() {
    const { t, i18n } = useTranslation();

  return (
           <div
           className="modal fade"
           id="exampleModalToggle3"
           aria-hidden="true"
           aria-labelledby="exampleModalToggleLabel3"
           tabIndex="-1"
       >
           <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                   <div className="modal-header">

                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                   </div>
                   <div className="modal-body d-flex flex-column align-items-center">
                       <i
                           className="fa-sharp fa-regular fa-circle-check text-center"
                           style={{ color: "#14992a", fontSize: 80 }}
                       ></i>
                       <p className="my-2 fs-4 fw-bolder">
                           {t("We received your feedback, Thanks.")}
                       </p>
                   </div>
               </div>
           </div>
       </div>
  )
}
