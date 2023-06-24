import React from "react";
import RestaurantsNavbar from "./RestaurantsNavbar";
import { Outlet } from "react-router-dom";
import Offers from "./offers";

export default function RestaurantLayout() {
  return (
    <>
      <RestaurantsNavbar />
      {/* <div className='d-flex '> */}
      <div className="">
        <div className=" ">
          <div className="">
            <div className=" ">
              <Outlet></Outlet>
            </div>
            {/* <div className="col-lg-2 d-lg-block d-none"> */}
              {/* <Offers></Offers> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
