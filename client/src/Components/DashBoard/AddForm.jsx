import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function AddForm() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate()
  const { type } = useParams();
  const { ...ExchangedData } = useContext(DataContext);
  const [addObj, setAddObj] = useState({
    name: "",
    Rating: "",
    location: "",
    website: "",
    address: "",
    number: "",
    workinghours: "",
    overview: "",
    logo: "",
    img1: "",
    img2: "",
    img3: "",

    line1: "",
    line2: "",
    line3: "",
    line4: "",
    line5: "",
    line6: "",
    dur: "",
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setAddObj({ ...addObj, id: `${Date.now()}`, [name]: value });
    },
    [addObj]
  );

  const handlelogoUpload = useCallback(
    (e) => {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAddObj({ ...addObj, logo: fileReader.result });
      };
    },
    [addObj]
  );

  const handleimgUpload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAddObj({ ...addObj, img: fileReader.result });
      };
    },
    [addObj]
  );

  const handleimg1Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAddObj({ ...addObj, img1: fileReader.result });
      };
    },
    [addObj]
  );

  const handleimg2Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAddObj({ ...addObj, img2: fileReader.result });
      };
    },
    [addObj]
  );
  const handleimg3Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setAddObj({ ...addObj, img3: fileReader.result });
      };
    },
    [addObj]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      switch (type) {
        case "Banks":
          ExchangedData.addBank(addObj);
          break;
        case "Markets":
          ExchangedData.addMarket(addObj);
          break;
        case "Medical_Centers":
          ExchangedData.addCenters(addObj);
          break;
        case "Pharmacies":
          ExchangedData.addPharmacies(addObj);
          break;
        case "Schools":
          ExchangedData.addSchool(addObj);
          break;
        case "Kindergartens":
          ExchangedData.addkindergarten(addObj);
          break;
        case "Cinema":
          ExchangedData.addMovie(addObj);
          break;
        case "shawarma":
          ExchangedData.addShawarmaRes(addObj);
          break;
        case "fried":
          ExchangedData.addFriedRes(addObj);
          break;
        case "pizza":
          ExchangedData.addPizzaRes(addObj);
          break;
        case "seafood":
          ExchangedData.addSeaFoodRes(addObj);
          break;
        case "fastfood":
          ExchangedData.addFastFoodRes(addObj);
          break;
        case "orientalfood":
          ExchangedData.addOrientalFoodRes(addObj);
          break;
        case "Shopping":
          ExchangedData.addShopping(addObj);
          break;
        case "Fashion":
          ExchangedData.addFashion(addObj);
          break;
        case "Sports":
          ExchangedData.addSports(addObj);
          break;
        case "Maintenance":
          ExchangedData.addMaintenance(addObj);
          break;
        case "Home_Services":
          ExchangedData.addHome_services(addObj);
          break;
        case "Transportation":
          ExchangedData.addBuses(addObj);
          break;

        default:
          return null;
      }
      alert("Added Successfully")
      navigate(-1)
    },
    [ExchangedData, addObj, type]
  );

  if (type === "Transportation") {
    return (
      <>
        <h2 className="text-center my-5">{t("Add Form for")} {t(type)}</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="name" className="form-label">
              {t("Name")}:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={addObj.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="location" className="form-label">
              location:
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={addObj.location}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="dur" className="form-label">
              Duration:
            </label>
            <input
              type="text"
              className="form-control"
              id="dur"
              name="dur"
              value={addObj.dur}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line1" className="form-label">
              line 1:
            </label>
            <input
              type="text"
              className="form-control"
              id="line1"
              name="line1"
              value={addObj.line1}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line2" className="form-label">
              line 2:
            </label>
            <input
              type="text"
              className="form-control"
              id="line2"
              name="line2"
              value={addObj.line2}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line3" className="form-label">
              line 3:
            </label>
            <input
              type="text"
              className="form-control"
              id="line3"
              name="line3"
              value={addObj.line3}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line4" className="form-label">
              line 4:
            </label>
            <input
              type="text"
              className="form-control"
              id="line4"
              name="line4"
              value={addObj.line4}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line5" className="form-label">
              line 5:
            </label>
            <input
              type="text"
              className="form-control"
              id="line5"
              name="line5"
              value={addObj.line5}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="line6" className="form-label">
              line 6:
            </label>
            <input
              type="text"
              className="form-control"
              id="line6"
              name="line6"
              value={addObj.line6}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="img1" className="form-label">
              img1:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img1"
              multiple
              type="file"
              className="form-control"
              onChange={handleimg1Upload}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="img2" className="form-label">
              img2:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img2"
              multiple
              type="file"
              className="form-control"
              onChange={handleimg2Upload}
            />
          </div>
          <div className="w-50 mx-auto text-center">
            <button type="submit" className="btn btn-success w-50 mt-5">
              Add
            </button>
          </div>
        </form>
      </>
    );
  } else if (type === "Cinema") {
    return (
      <>
        <h2 className="text-center my-5">Add Form for {type}</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={addObj.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="type" className="form-label">
              type:
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={addObj.type}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="language" className="form-label">
              language:
            </label>
            <input
              type="text"
              className="form-control"
              id="language"
              name="language"
              value={addObj.language}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="country" className="form-label">
              country:
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={addObj.country}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="Rating" className="form-label">
              Rating:
            </label>
            <input
              type="text"
              className="form-control"
              id="Rating"
              name="Rating"
              value={addObj.Rating}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="actors" className="form-label">
              Actors:
            </label>
            <input
              type="text"
              className="form-control"
              id="actors"
              name="actors"
              value={addObj.actors}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="overview" className="form-label">
              Overview:
            </label>
            <input
              type="text"
              className="form-control"
              id="overview"
              name="overview"
              value={addObj.overview}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label className="col-form-label" htmlFor="adults">
              Adults:
            </label>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="adults"
                  value="true"
                  checked={addObj.adults === 'true'}
                  onChange={handleChange}
                />
                true
              </label>
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="adults"
                  value="false"
                  checked={addObj.adults === 'false'}
                  onChange={handleChange}
                />
                false
              </label>
            </div>
          </div>
          <div className="w-50 mx-auto my-3">
            <label className="col-form-label" htmlFor="soon">
              Coming soon:
            </label>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="soon"
                  value="true"
                  checked={addObj.soon === 'true'}
                  onChange={handleChange}
                />
                true
              </label>
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="soon"
                  id="false"
                  value="false"
                  checked={addObj.soon === 'false'}
                  onChange={handleChange}
                />
                false
              </label>
            </div>
          </div>

          <div className="w-50 mx-auto my-3">
            <label htmlFor="img" className="form-label">
              img:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img"
              multiple
              type="file"
              className="form-control"
              onChange={handleimgUpload}
            />
          </div>
          <div className="w-50 mx-auto text-center">
            <button type="submit" className="btn btn-success w-50 mt-5">
              Add
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-center my-5">Add Form for {type}</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={addObj.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="Rating" className="form-label">
              Rating:
            </label>
            <input
              type="text"
              className="form-control"
              id="Rating"
              name="Rating"
              value={addObj.Rating}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="location" className="form-label">
              location:
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={addObj.location}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="website" className="form-label">
              website:
            </label>
            <input
              type="text"
              className="form-control"
              id="website"
              name="website"
              value={addObj.website}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="address" className="form-label">
              address:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={addObj.address}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="number" className="form-label">
              number:
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              name="number"
              value={addObj.number}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="workinghours" className="form-label">
              workinghours:
            </label>
            <input
              type="text"
              className="form-control"
              id="workinghours"
              name="workinghours"
              value={addObj.workinghours}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="overview" className="form-label">
              overview:
            </label>
            <input
              type="text"
              className="form-control"
              id="overview"
              name="overview"
              value={addObj.overview}
              onChange={handleChange}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="logo" className="form-label">
              logo:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="logo"
              type="file"
              multiple
              className="form-control"
              onChange={handlelogoUpload}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="img1" className="form-label">
              img1:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img1"
              multiple
              type="file"
              className="form-control"
              onChange={handleimg1Upload}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="img2" className="form-label">
              img2:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img2"
              multiple
              type="file"
              className="form-control"
              onChange={handleimg2Upload}
            />
          </div>
          <div className="w-50 mx-auto my-3">
            <label htmlFor="img3" className="form-label">
              img3:
            </label>
            <input
              accept="image/*"
              style={{}}
              id="img3"
              type="file"
              multiple
              className="form-control"
              onChange={handleimg3Upload}
            />
          </div>
          <div className="w-50 mx-auto text-center">
            <button type="submit" className="btn btn-success w-50 mt-5">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }

}
