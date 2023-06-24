import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function RestaurantsNavbar() {
  const { t } = useTranslation()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-between  mx-lg-5 mt-lg-0 align-items-center align-content-center">
        <ul className="navbar-nav w-100 d-flex justify-content-between justify-content-sm-evenly flex-row mx-2 ">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              exact='true'
              to="/restaurants"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/alldishes.png"
                  alt="All Restaurants"
                />
                <div style={{ fontSize: 12 }} className="fw-bold  ">{t("All Restaurants")}</div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/restaurants/seafood"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/seafood.png"
                  alt="Seafood"
                />
                <div style={{ fontSize: 12 }} className="fw-bold ">{t("Seafood")}</div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/restaurants/fastfood"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/fastfood.png"
                  alt="Fast Food"
                />
                <div style={{ fontSize: 12 }} className="fw-bold ">{t("Fast Food")}</div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/restaurants/fried"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/fired.png"
                  alt="Fried Chicken"
                />
                <div style={{ fontSize: 12 }} className="fw-bold ">{t("Fried Chicken")}</div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/restaurants/shawarma"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/shawarma.png"
                  alt="Shawarma"
                />
                <div style={{ fontSize: 12 }} className="fw-bold ">{t("Shawarma")}</div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeclassname="active"
              to="/restaurants/oriental"
            >
              <div className="nav-item-wrapper text-center">
                <img
                  style={{
                    border: "2px solid black",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="rounded-circle p-2"
                  src="/images/oriental.png"
                  alt="Oriental Food"
                />
                <div style={{ fontSize: 12 }} className="fw-bold ">{t("Oriental Food")}</div>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
