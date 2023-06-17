import React from "react";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const {t} = useTranslation()
  return (
    <div
      className="d-flex-column mt-4"
      style={{
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.3)",
        borderRadius:"10px", 
        width:300,
        padding:"10%"
      }}
    >
      <div className="fs-4 mb-2 fw-bold text-center">{t("Special Offers!")}</div>
      <div className="d-flex justify-content-end flex-column">
        <img className="my-2" src="/images/offerOne.png" style={{height:150,width:200}} alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
        <img className="my-2" src="/images/offerOne.png" alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
        <img className="my-2" src="/images/offerOne.png" alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
        <img className="my-2" src="/images/offerOne.png" alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
        <img className="my-2" src="/images/offerOne.png" alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
        <img className="my-2" src="/images/offerOne.png" alt="offer img" />
        <img className="my-2" src="/images/offerTwo.png" alt="offer img" />
      </div>
    </div>
  );
};

export default Offers;
