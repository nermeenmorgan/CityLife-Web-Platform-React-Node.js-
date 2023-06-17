import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../Context/Data";

export default function Details() {
  const { All } = useContext(DataContext);
  const { id } = useParams();

  for (let category of Object.values(All)) {
    for (let ele of category) {
      if (ele.name === id) {
        console.log(ele.name);
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="d-flex flex-row justify-content-between align-items-center border shadow rounded-4 my-3 p-4">
                  <div className="col-sm-12 col-lg-6">
                    <div className="d-flex align-items-center mb-3">
                      {ele.logo && (
                        <img
                          src={ele.logo}
                          alt={ele.name}
                          className="rounded-circle shadow"
                          style={{ width: "80px", height: "80px" }}
                        />
                      )}
                      <h2 className="ms-5">{ele.name}</h2>
                      {(ele.Rating || ele.rating) && (
                        <h6 className="ms-2 card-title">
                          <i
                            className="fa-sharp fa-solid fa-star me-2"
                            style={{ color: "#ffdf0f" }}
                          />
                          {ele.Rating || ele.rating}
                        </h6>
                      )}
                    </div>
                    <p className="opacity-75">{ele.overview}</p>
                    <p className="fw-bold"> {ele.dur} </p>

                    {ele.actors && (
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <span className="fw-bolder">Type:</span> {ele.type}
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                          <span>
                            <span className="fw-bolder">Language:</span>{" "}
                            {ele.language}
                          </span>
                          <span>
                            <span className="fw-bolder">Country:</span>{" "}
                            {ele.country}
                          </span>
                        </li>
                        <li className="list-group-item">
                          <span className="fw-bolder">Cast:</span> {ele.actors}
                        </li>
                      </ul>
                    )}
                    {ele.number && (
                      <p>
                        Call Center:
                        <span className=" fw-bold">{ele.number}</span>
                      </p>
                    )}
                    {ele.website && (
                      <p>
                        Website:
                        <Link to={ele.website} target="_blank">
                          {ele.website}
                        </Link>
                      </p>
                    )}
                    <div className="d-sm-block d-md-flex ">
                      {ele.location && (
                        <div className="">
                          <p>{ele.address}</p>
                          <Link
                            to={ele.location}
                            target="_blank"
                            className="ms-2"
                          >
                            <i className="fa-solid fa-location-dot fa-xl"></i>
                          </Link>
                        </div>
                      )}
                      {ele.workinghours && (
                        <p className="pe-0">
                          {" "}
                          Working hours: {ele.workinghours}
                        </p>
                      )}
                    </div>
                    {ele.line1 && (
                      <>
                        <p>
                          Line 1:
                          <span className=" fw-bold">{ele.line1}</span>
                        </p>
                        <p>
                          Line 2:
                          <span className=" fw-bold">{ele.line2}</span>
                        </p>
                        {ele.line3 && (
                          <>
                            <p>
                              Line 3:
                              <span className=" fw-bold">{ele.line3}</span>
                            </p>
                            <p>
                              Line 4:
                              <span className=" fw-bold">{ele.line4}</span>
                            </p>
                            <p>
                              Line 5:
                              <span className=" fw-bold">{ele.line5}</span>
                            </p>
                            <p>
                              Line 6:
                              <span className=" fw-bold">{ele.line6}</span>
                            </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <div className="col-sm-12 col-lg-6">
                    <img
                      src={ele.img1 || ele.img}
                      alt=""
                      className="w-75 rounded-4 float-end d-none d-md-block"
                      style={{ height: 300 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
  }
}
