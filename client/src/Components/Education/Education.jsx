import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/Data";
import "./Education.css";
import { v4 as uuid } from "uuid";
import Schools from "./schools";
import Kindergarten from "./kindergarten";

export default function Education() {
  const { AllEducation } = useContext(DataContext);
  const [schoolsArr, setSchoolsArr] = useState([]);

  // useEffect(() => {
  //   if (AllEducation) {
  //     const images = AllEducation.map((e) => [e.img3]);
  //     setSchoolsArr(images);
  //   }
  // }, [AllEducation]);
  const [TopNav, setTopNav] = useState("All");

  const handleClickTopNav = (val) => {
    setTopNav(val);
  };

  return (
    <>
      <div>
        <div className="mt-4 ">
          <div className="text-center">
            <div
              className="container p-5"
              style={{
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                borderRadius: 20,
              }}
            >
              <h1
                className="text-center offset-3 fw-bold w-50 p-3 mb-5"
                style={{
                  backgroundColor: "#CEE9D8",
                  borderRadius: 10,
                  boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                }}
              >
                {" "}
                Education in Rehab
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <h2>Experience Excellence in Education</h2>
                  <p>
                    Discover the best schools in Rehab Egypt and give your child
                    the gift of quality education. Our featured schools are
                    dedicated to providing exceptional learning experiences and
                    helping students achieve their full potential. Explore the
                    slider to find the perfect school for your child.
                  </p>
                  <div className="d-flex  mb-3">
                    <i
                      className="fa-solid fa-school fa-3x me-3"
                      style={{ color: "black" }}
                    ></i>
                    <h2>About Campus</h2>
                  </div>
                  <div>
                    The campuses of the schools in Al Rehab City are
                    well-designed and spacious, with modern facilities and
                    amenities. They are equipped with state-of-the-art
                    classrooms, laboratories, libraries, sports facilities, and
                    other resources that support learning and development. The
                    schools in Al Rehab City offer a high-quality education that
                    is based on a well-rounded curriculum that emphasizes
                    academic rigor, critical thinking, creativity, and
                    innovation. They promote a culture of excellence,
                    intellectual curiosity, and social responsibility, and
                    provide students with a supportive and nurturing learning
                    environment that fosters personal growth and development.
                    Overall, the schools in Al Rehab City provide students with
                    an exceptional educational experience that prepares them for
                    success in the global marketplace and in their personal
                    lives.
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="container-fluid position-relative">
                    <div className="row">
                      <div className="col-12 p-0  position-relative w-100 h-100">
                        <div className="d-flex justify-content-start me-5">
                          <img
                            src="images/educationImg.png"
                            className="img-fluid mx-auto h-100 mb-5"
                            alt="Cover Image"
                          />
                        </div>

                        <div className="row justify-content-around ">
                          <div className="d-flex">
                            <button
                              style={{
                                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                color: "white",
                              }}
                              type="button"
                              onClick={() => handleClickTopNav("Schools")}
                              className="btn ms-5 btn-success  w-50 hoverEff text-center fs-3 fw-bold"
                            >
                              Schools
                            </button>
                            <button
                              style={{
                                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                                color: "white",
                              }}
                              type="button"
                              onClick={() => handleClickTopNav("Kindergarten")}
                              className="btn ms-5 btn-success hoverEff w-50 text-center fs-3 fw-bold"
                            >
                              Kindergarten
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {TopNav === "Schools" ? (
              <Schools key={uuid()}></Schools>
            ) : TopNav === "Kindergarten" ? (
              <Kindergarten key={uuid()}></Kindergarten>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
