import React, { useCallback, useContext } from "react";
import { DataContext } from "../../Context/Data";
import styles from "./Markets.module.css";
import { Link } from "react-router-dom";
export default function Markets() {
  let { markets } = useContext(DataContext);

  const handleCall = useCallback ((number) => {
    window.location.href = `tel:${number}`;
  },[]);
  return (
    <>
      {markets.map((market) => (
        <section
          key={market.id}
          className="row m-0 p-3 container mx-auto shadow my-4 rounded rounded-5 py-4"
        >
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <div className="d-flex align-items-center mb-4">
              <div>
                <img
                  src={market.logo}
                  className="rounded-circle shadow"
                  style={{ maxWidth: "100px", height: "auto" }}
                  alt="logo"
                />
              </div>
              <div className="offset-2">
                <h3 className="text-center">{market.name}</h3>
              </div>
            </div>
            <div id="rating">
              <p className="d-inline-block ">Rating : </p>
              <i className="fa-solid fa-star text-warning fs-6"> </i>
              <i className="fa-solid fa-star text-warning fs-6"> </i>
              <i className="fa-solid fa-star text-warning fs-6"> </i>
              <i className="fa-solid fa-star text-warning fs-6"> </i>
            </div>
            <div id="address">
              <p className="">
                Address :
                <Link className="text-decoration-none" to={market.location}>
                  {market.address}
                  <i
                    className="fa-sharp fa-solid fa-location-dot ms-2"
                    style={{ color: "#0d85fe" }}
                  ></i>
                </Link>
              </p>
            </div>
            <div id="website&call" className="d-flex">
              <p className="">
                Website :
                <Link className="text-decoration-none" to={market.website}>
                  Visit Our Website
                </Link>
              </p>
              <div className="offset-4" style={{cursor:'pointer'}}  onClick={() => handleCall(market.number)}>
                <i
                  className="fa-solid fa-phone fa-lg mainColor"
                ></i> : {market.number}
              </div>
            </div>
            <div id="overview">
              <p>
                <span className="h6">Overview: </span> {market.overview}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <img
                src={market.img1}
                className={`${styles.marketImages} rounded rounded-4`}
                alt=""
              ></img>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
