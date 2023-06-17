import React, { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/Data";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateForm() {
  // const {updateBank,bank} = useContext(DataContext)
  const { ...ExchangedData } = useContext(DataContext);
  const navigate = useNavigate()

  const { type, id } = useParams();
  const [updateObj, setUpdateObj] = useState({});

  useEffect(() => {
    switch (type) {
      case "Banks":
        const selectedBank = ExchangedData.bank.find((ele) => +ele.id === +id);
        setUpdateObj(selectedBank);
        break;
      case "Markets":
        const selectedMarket = ExchangedData.markets.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedMarket);
        break;
      case "Medical_Centers":
        const selectedCenter = ExchangedData.Centers.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedCenter);
        break;
      case "Pharmacies":
        const selectedPharmacy = ExchangedData.Pharmacies.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedPharmacy);
        break;
      case "Schools":
        const selectedSchool = ExchangedData.Schools.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedSchool);
        break;
      case "Kindergartens":
        const selectedKindergarten = ExchangedData.Kindergarten.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedKindergarten);
        break;
      case "Cinema":
        const selectedMovie = ExchangedData.movies.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedMovie);
        break;
      case "shawarma":
        const selectedShRes = ExchangedData.ShawarmaRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedShRes);
        break;
      case "fried":
        const selectedFrRes = ExchangedData.FriedRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedFrRes);
        break;
      case "pizza":
        const selectedPzRes = ExchangedData.PizzaRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedPzRes);
        break;
      case "seafood":
        const selectedSfRes = ExchangedData.SeaFoodRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedSfRes);
        break;
      case "fastfood":
        const selectedFaRes = ExchangedData.FastFoodRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedFaRes);
        break;
      case "orientalfood":
        const selectedOtRes = ExchangedData.OrientalFoodRes.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedOtRes);
        break;
      case "Shopping":
        const selectedMall = ExchangedData.shopping.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedMall);
        break;
      case "Fashion":
        const selectedFashion = ExchangedData.fashion.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedFashion);
        break;
      case "Sports":
        const selectedSports = ExchangedData.gyms.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedSports);
        break;
      case "Maintenance":
        const selectedMaintenance = ExchangedData.maintenance.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedMaintenance);
        break;
      case "Home_Services":
        const selectedHomeServices = ExchangedData.homeServices.find(
          (ele) => +ele.id === +id
        );
        setUpdateObj(selectedHomeServices);
        break;
      case "Transportation":
        const selectedBus = ExchangedData.buses.find((ele) => +ele.id === +id);
        setUpdateObj(selectedBus);
        break;

      default:
        return null;
    }
  }, [
    ExchangedData.Centers,
    ExchangedData.FastFoodRes,
    ExchangedData.FriedRes,
    ExchangedData.Kindergarten,
    ExchangedData.OrientalFoodRes,
    ExchangedData.Pharmacies,
    ExchangedData.PizzaRes,
    ExchangedData.Schools,
    ExchangedData.SeaFoodRes,
    ExchangedData.ShawarmaRes,
    ExchangedData.bank,
    ExchangedData.buses,
    ExchangedData.fashion,
    ExchangedData.gyms,
    ExchangedData.homeServices,
    ExchangedData.maintenance,
    ExchangedData.markets,
    ExchangedData.movies,
    ExchangedData.shopping,
    id,
    type,
  ]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUpdateObj({ ...updateObj, [name]: value });
    },
    [updateObj]
  );

  const handlelogoUpload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdateObj({ ...updateObj, logo: fileReader.result });
      };
    },
    [updateObj]
  );

  const handleimgUpload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdateObj({ ...updateObj, img: fileReader.result });
      };
    },
    [updateObj]
  );

  const handleimg1Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdateObj({ ...updateObj, img1: fileReader.result });
      };
    },
    [updateObj]
  );

  const handleimg2Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdateObj({ ...updateObj, img2: fileReader.result });
      };
    },
    [updateObj]
  );
  const handleimg3Upload = useCallback(
    (e) => {
      // console.log(e.target.files);
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => {
        setUpdateObj({ ...updateObj, img3: fileReader.result });
      };
    },
    [updateObj]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      switch (type) {
        case "Banks":
          ExchangedData.updateBank(id, updateObj);
          break;
        case "Markets":
          ExchangedData.updateMarket(id, updateObj);
          break;
        case "Medical_Centers":
          ExchangedData.updateCenters(id, updateObj);
          break;
        case "Pharmacies":
          ExchangedData.updatePharmacies(id, updateObj);
          break;
        case "Schools":
          ExchangedData.updateSchool(id, updateObj);
          break;
        case "Kindergartens":
          ExchangedData.updatekindergarten(id, updateObj);
          break;
        case "Cinema":
          ExchangedData.updateMovie(id, updateObj);
          break;
        case "shawarma":
          ExchangedData.updateShawarmaRes(id, updateObj);
          break;
        case "fried":
          ExchangedData.updateFriedRes(id, updateObj);
          break;
        case "pizza":
          ExchangedData.updatePizzaRes(id, updateObj);
          break;
        case "seafood":
          ExchangedData.updateSeaFoodRes(id, updateObj);
          break;
        case "fastfood":
          ExchangedData.updateFastFoodRes(id, updateObj);
          break;
        case "orientalfood":
          ExchangedData.updateOrientalFoodRes(id, updateObj);
          break;
        case "Shopping":
          ExchangedData.updateShopping(id, updateObj);
          break;
        case "Fashion":
          ExchangedData.updateFashion(id, updateObj);
          break;
        case "Sports":
          ExchangedData.updateSports(id, updateObj);
          break;
        case "Maintenance":
          ExchangedData.updateMaintenance(id, updateObj);
          break;
        case "Home_Services":
          ExchangedData.updateHome_services(id, updateObj);
          break;
        case "Transportation":
          ExchangedData.updateBuses(id, updateObj);
          break;

        default:
          return null;
      }
      alert("Update Successfully")
      navigate(-1)
    },
    [ExchangedData, id, type, updateObj]
  );

  if (updateObj) {
    if (type === "Transportation") {
      return (
        <>
          <h2 className="text-center my-5">Update Form</h2>
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
                value={updateObj.name}
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
                value={updateObj.location}
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
                value={updateObj.dur}
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
                value={updateObj.line1}
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
                value={updateObj.line2}
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
                value={updateObj.line3}
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
                value={updateObj.line4}
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
                value={updateObj.line5}
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
                value={updateObj.line6}
                onChange={handleChange}
              />
            </div>
            <div className="w-50 mx-auto my-3">
              <label htmlFor="img1" className="form-label">
                img1:
              </label>
              <img src={updateObj.img1} width={200} alt="" />
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
              <img src={updateObj.img2} width={200} alt="" />
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
              <button type="submit" className="btn btn-primary w-50 mt-5">
                Update
              </button>
            </div>
          </form>
        </>
      );
    } else if (type === "Cinema") {
      return (
        <>
          <h2 className="text-center my-5">Update Form</h2>
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
                value={updateObj.name}
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
                value={updateObj.type}
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
                value={updateObj.language}
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
                value={updateObj.country}
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
                value={updateObj.Rating}
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
                value={updateObj.actors}
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
                value={updateObj.overview}
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
                  checked={updateObj.adults === 'true'}
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
                  id="false"
                  value="true"
                  checked={updateObj.adults === 'false'}
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
                  checked={updateObj.soon === 'true'}
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
                  value="true"
                  checked={updateObj.soon === 'false'}
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
              <img src={updateObj.img} width={200} alt="" />
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
              <button type="submit" className="btn btn-primary w-50 mt-5">
                Update
              </button>
            </div>
          </form>
        </>
      );
    } else {
      return (
        <>
          <h2 className="text-center my-5">Update Form</h2>
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
                value={updateObj.name}
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
                value={updateObj.Rating}
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
                value={updateObj.location}
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
                value={updateObj.website}
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
                value={updateObj.address}
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
                value={updateObj.number}
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
                value={updateObj.workinghours}
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
                value={updateObj.overview}
                onChange={handleChange}
              />
            </div>
            <div className="w-50 mx-auto my-3">
              <label htmlFor="logo" className="form-label">
                logo:
              </label>
              <img src={updateObj.logo} width={200} alt="" />
              <input
                accept="image/*"
                style={{}}
                id="logo"
                multiple
                type="file"
                className="form-control"
                onChange={handlelogoUpload}
              />
            </div>
            <div className="w-50 mx-auto my-3">
              <label htmlFor="img1" className="form-label">
                img1:
              </label>
              <img src={updateObj.img1} width={200} alt="" />
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
              <img src={updateObj.img2} width={200} alt="" />
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
              <img src={updateObj.img3} width={200} alt="" />
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
              <button type="submit" className="btn btn-primary w-50 mt-5">
                Update
              </button>
            </div>
          </form>
        </>
      );
    }
  } else {
    return (
      <>
        <div className="text-center">Loading...</div>
      </>
    );
  }

  // return (
  //   <>
  //     <h2 className="text-center my-5">Update Form</h2>
  //     {updateObj ? (
  //       type !== "Transportation" ? (
  //         <form className="" onSubmit={handleSubmit}>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="name" className="form-label">
  //               Name:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="name"
  //               name="name"
  //               value={updateObj.name}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="Rating" className="form-label">
  //               Rating:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="Rating"
  //               name="Rating"
  //               value={updateObj.Rating}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="location" className="form-label">
  //               location:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="location"
  //               name="location"
  //               value={updateObj.location}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="website" className="form-label">
  //               website:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="website"
  //               name="website"
  //               value={updateObj.website}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="address" className="form-label">
  //               address:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="address"
  //               name="address"
  //               value={updateObj.address}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="number" className="form-label">
  //               number:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="number"
  //               name="number"
  //               value={updateObj.number}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="workinghours" className="form-label">
  //               workinghours:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="workinghours"
  //               name="workinghours"
  //               value={updateObj.workinghours}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="overview" className="form-label">
  //               overview:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="overview"
  //               name="overview"
  //               value={updateObj.overview}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="logo" className="form-label">
  //               logo:
  //             </label>
  //             <img src={updateObj.logo} width={200} height={200} alt="" />
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="logo"
  //               type="file"
  //               multiple
  //               className="form-control"
  //               onChange={handlelogoUpload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="img1" className="form-label">
  //               img1:
  //             </label>
  //             <img src={updateObj.img1} width={200} alt="" />
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="img1"
  //               multiple
  //               type="file"
  //               className="form-control"
  //               onChange={handleimg1Upload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="img2" className="form-label">
  //               img2:
  //             </label>
  //             <img src={updateObj.img2} width={200} alt="" />
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="img2"
  //               multiple
  //               type="file"
  //               className="form-control"
  //               onChange={handleimg2Upload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="img3" className="form-label">
  //               img3:
  //             </label>
  //             <img src={updateObj.img3} width={200} alt="" />
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="img3"
  //               type="file"
  //               multiple
  //               className="form-control"
  //               onChange={handleimg3Upload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto text-center">
  //             <button type="submit" className="btn btn-primary w-50 mt-5">
  //               Update
  //             </button>
  //           </div>
  //         </form>
  //       ) : (
  //         <form className="" onSubmit={handleSubmit}>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="name" className="form-label">
  //               Name:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="name"
  //               name="name"
  //               value={updateObj.name}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="location" className="form-label">
  //               location:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="location"
  //               name="location"
  //               value={updateObj.location}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="dur" className="form-label">
  //               Duration:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="dur"
  //               name="dur"
  //               value={updateObj.dur}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line1" className="form-label">
  //               line 1:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line1"
  //               name="line1"
  //               value={updateObj.line1}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line2" className="form-label">
  //               line 2:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line2"
  //               name="line2"
  //               value={updateObj.line2}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line3" className="form-label">
  //               line 3:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line3"
  //               name="line3"
  //               value={updateObj.line3}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line4" className="form-label">
  //               line 4:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line4"
  //               name="line4"
  //               value={updateObj.line4}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line5" className="form-label">
  //               line 5:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line5"
  //               name="line5"
  //               value={updateObj.line5}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="line6" className="form-label">
  //               line 6:
  //             </label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               id="line6"
  //               name="line6"
  //               value={updateObj.line6}
  //               onChange={handleChange}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="img1" className="form-label">
  //               img1:
  //             </label>
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="img1"
  //               multiple
  //               type="file"
  //               className="form-control"
  //               onChange={handleimg1Upload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto my-3">
  //             <label htmlFor="img2" className="form-label">
  //               img2:
  //             </label>
  //             <input
  //               accept="image/*"
  //               style={{}}
  //               id="img2"
  //               multiple
  //               type="file"
  //               className="form-control"
  //               onChange={handleimg2Upload}
  //             />
  //           </div>
  //           <div className="w-50 mx-auto text-center">
  //             <button type="submit" className="btn btn-success w-50 mt-5">
  //               Add
  //             </button>
  //           </div>
  //         </form>
  //       )
  //     ) : (
  //       <div className="text-center">Loading...</div>
  //     )}
  //   </>
  // );
}
