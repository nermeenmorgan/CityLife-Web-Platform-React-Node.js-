import React, { useContext } from "react";
import { DataContext } from "../../Context/Data";
import { useTranslation } from "react-i18next";

export default function Completion() {
  // States
  const { userData } = useContext(DataContext);
  const { t, i18n } = useTranslation();

  return (
    <>
          <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
      {userData === null ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">{t("Loading...")}</span>
          </div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <i
              className="fa-sharp fa-regular fa-circle-check text-center"
              style={{ color: "#14992a", fontSize: 180 }}
            ></i>
            <h1 className="text-center" style={{ fontSize: 80 }}>
              {t("Payment Success")}, {t(userData.name)}
            </h1>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
