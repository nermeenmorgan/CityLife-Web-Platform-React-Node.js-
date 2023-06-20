import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


// Component for rendering the item section
const ItemSection = ({ selectedItem, itemType, addButtonLabel, data, handleDelete }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <div className='mx-auto mt-4 text-center my-3'
            style={{
              width:"60%",
              direction: i18n.language === "ar" ? "rtl" : "ltr",
            }}
    >
      {selectedItem === itemType && (
        <>
          <Link to={`addform/${selectedItem}`}>
            <button className='btn btn-success'>{t("Add")} {t(addButtonLabel)}</button>
          </Link>
          {data.map((res, index) => (
            <div key={res.id} className='rounded-2 p-0 text-center p-4 d-flex flex-md-row justify-content-md-between flex-column '>
              <span className='fs-5 fw-semibold'>{t("Name")} {t(res.name)}</span>
              <div className='d-flex justify-content-center'>
              <Link to={`updateform/${selectedItem}/${res.id}`}>
                <button className='btn btn-primary mx-3'>{t("update")}</button>
              </Link>
              <Link>
              <button className='btn btn-danger mx-3' onClick={() => { handleDelete(res.id) }}>
                {t("delete")}
              </button>
              </Link>
              </div>
            </div>
          ))}
        </>
      )}
      </div>
    </>
  );
};
export default memo(ItemSection);