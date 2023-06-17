import React from "react";
import RestaurantsNavbar from "./RestaurantsNavbar";
import { Outlet } from "react-router-dom";
import Offers from "./offers";

export default function RestaurantLayout() {
  return (
    <>
      <RestaurantsNavbar />
      {/* <div className='d-flex '> */}
      <div className="container">
        <div className="row ">
          <div className="d-flex flex-row">
            <div className="col-md-10 col-12">
              <Outlet></Outlet>
            </div>
            <div className="col-lg-2 d-lg-block d-none">
              <Offers></Offers>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
