import React, { useCallback, useContext, useState } from "react";
import { DataContext } from "../../Context/Data";
import { v4 as uuid } from 'uuid';
import ItemSection from "./ItemSection";
import { useTranslation } from "react-i18next";


export default function DashBoard() {

  const { ...ExchangedData } = useContext(DataContext);
  const [selectedItem, setSelectedItem] = useState("");
  const { t, i18n } = useTranslation();
  const [showData,setShowData] = useState("feedback")

  const handleChange = useCallback((e) => {
    setSelectedItem(e.target.value);
  }, []);

  const handleDelete = useCallback(
    (ID) => {
      switch (selectedItem) {
        case "Banks":
          ExchangedData.deleteBank(ID);
          break;
        case "Markets":
          ExchangedData.deleteMarket(ID);
          break;
        case "Medical_Centers":
          ExchangedData.deleteCenters(ID);
          break;
        case "Pharmacies":
          ExchangedData.deletePharmacies(ID);
          break;
        case "Schools":
          ExchangedData.deleteSchool(ID);
          break;
        case "Kindergartens":
          ExchangedData.deletekindergarten(ID);
          break;
        case "Cinema":
          ExchangedData.deleteMovie(ID);
          break;
        case "shawarma":
          ExchangedData.deleteShawarmaRes(ID);
          break;
        case "fried":
          ExchangedData.deleteFriedRes(ID);
          break;
        case "pizza":
          ExchangedData.deletePizzaRes(ID);
          break;
        case "seafood":
          ExchangedData.deleteSeaFoodRes(ID);
          break;
        case "fastfood":
          ExchangedData.deleteFastFoodRes(ID);
          break;
        case "orientalfood":
          ExchangedData.deleteOrientalFoodRes(ID);
          break;
        case "Shopping":
          ExchangedData.deleteShopping(ID);
          break;
        case "Fashion":
          ExchangedData.deleteFashion(ID);
          break;
        case "Sports":
          ExchangedData.deleteSports(ID);
          break;
        case "Maintenance":
          ExchangedData.deleteMaintenance(ID);
          break;
        case "Home_Services":
          ExchangedData.deleteHome_services(ID);
          break;
        case "Transportation":
          ExchangedData.deleteBuses(ID);
          break;

        default:
          return null;
      }
    },
    [ExchangedData, selectedItem]
  );

  const handleDeleteFeed = useCallback((ID)=>{
    ExchangedData.deleteFeed(ID)
  },[ExchangedData])
  return (
    <>
    <div         style={{
          direction: i18n.language === "ar" ? "rtl" : "",

        }}>
     <div className="d-flex justify-content-center w-50 mx-auto mt-4">
     <button className="btn btn-primary w-50 mx-3" onClick={()=> setShowData("feedback")}>{t("FeedBacks and Complains")}</button>
     <button className="btn btn-primary w-50 mx-3" onClick={()=> setShowData("data")}>{t("Edit website data")}</button>
     </div>
      {/*  Feedback */}
      {showData === "feedback" && <div className="my-4 mx-auto " style={{overflowX:"auto",width:"90%"}}>
        <h2>{t("FeedBacks and Complains")}:</h2>
        <table className="table table-hover table-bordered mx-auto">
          <thead>
            <tr className="text-center">
              <th scope="col">{t("ID")}</th>
              <th scope="col">{t("Name")}</th>
              <th scope="col">{t("Email")}</th>
              <th scope="col">{t("Phone")}</th>
              <th scope="col">{t("Place")}</th>
              <th scope="col">{t("Message")}</th>
              <th scope="col">{t("Photo")}</th>
              <th scope="col">{t("Type")}</th>
              <th scope="col">{t("Delete")}</th>
            </tr>
          </thead>
          <tbody className="text-center">

            {ExchangedData.dashBoardFeedback && ExchangedData.dashBoardFeedback.map((ele) =>
              <tr key={uuid()}>
                <th scope="row">{ele.id}</th>
                <td>{ele.Name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.place}</td>
                <td>{ele.message}</td>
                <td>{ele.photo && <img src={ele.photo} alt="complain img" width={100} height={100}></img>}</td>
                <td style={{backgroundColor: ele.type === "FeedBack" ? "lightgreen" : ele.type === "Complain"? "lightpink" :"lightyellow" }}>{ele.type}</td>
                <td><button className="btn btn-danger" onClick={()=>handleDeleteFeed(ele.id)}>{t("Delete")}</button></td>
              </tr>)}
          </tbody>
        </table>

      </div>}




      {showData === "data" && <>
      <div className="w-50 mx-auto mt-5"

      >
        <span className="fw-bold fs-5">{t("Choose Service or Category")}: </span>
        <select
          className="form-select mt-3"
          aria-label="Default select example2"
          onChange={handleChange}
          value={selectedItem}
        >
          <option value="" disabled>
            {t("Choose")}...
          </option>
          <option value="Banks">{t("Banks")}</option>
          <option value="Markets">{t("Markets")}</option>
          <option value="Medical_Centers">{t("Medical Centers")}</option>
          <option value="Pharmacies">{t("Pharmacies")}</option>
          <option value="Schools">{t("Schools")}</option>
          <option value="Kindergartens">{t("Kindergartens")}</option>
          <option value="Cinema">{t("Cinema")}</option>
          <optgroup label={t("Restaurants")}>
            <option value="shawarma">{t("Shawarma")}</option>
            <option value="fried">{t("Fried")}</option>
            <option value="pizza">{t("Pizza")}</option>
            <option value="seafood">{t("Seafood")}</option>
            <option value="fastfood">{t("Fast Food")}</option>
            <option value="orientalfood">{t("Oriental Food")}</option>
          </optgroup>
          <option value="Shopping">{t("Shopping")}</option>
          <option value="Fashion">{t("Fashion")}</option>
          <option value="Sports">{t("Sports")}</option>
          <option value="Maintenance">{t("Maintenance")}</option>
          <option value="Home_Services">{t("Home Services")}</option>
          <option value="Transportation">{t("Transportation")}</option>
        </select>
      </div>
      <ItemSection
        selectedItem={selectedItem}
        itemType="Banks"
        addButtonLabel="Bank"
        data={ExchangedData?.bank}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Markets"
        addButtonLabel="Market"
        data={ExchangedData?.markets}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Medical_Centers"
        addButtonLabel="Medical Center"
        data={ExchangedData?.Centers}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Pharmacies"
        addButtonLabel="Pharmacies"
        data={ExchangedData?.Pharmacies}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Schools"
        addButtonLabel="School"
        data={ExchangedData?.Schools}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Kindergartens"
        addButtonLabel="Kindergarten"
        data={ExchangedData?.Kindergarten}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Cinema"
        addButtonLabel="Movie"
        data={ExchangedData?.movies}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="shawarma"
        addButtonLabel="shawarma restaurant"
        data={ExchangedData?.ShawarmaRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="fried"
        addButtonLabel="fried restaurant"
        data={ExchangedData?.FriedRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="pizza"
        addButtonLabel="pizza restaurant"
        data={ExchangedData?.PizzaRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="seafood"
        addButtonLabel="seafood restaurant"
        data={ExchangedData?.SeaFoodRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="fastfood"
        addButtonLabel="fast food restaurant"
        data={ExchangedData?.FastFoodRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="orientalfood"
        addButtonLabel="oriental food restaurant"
        data={ExchangedData?.OrientalFoodRes}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Shopping"
        addButtonLabel="Mall"
        data={ExchangedData?.shopping}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Fashion"
        addButtonLabel="Shop"
        data={ExchangedData?.fashion}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Sports"
        addButtonLabel="Gym"
        data={ExchangedData?.gyms}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Maintenance"
        addButtonLabel="Maintenance"
        data={ExchangedData?.maintenance}
        handleDelete={handleDelete}
      />
      <ItemSection
        selectedItem={selectedItem}
        itemType="Home_Services"
        addButtonLabel="Home Service"
        data={ExchangedData?.homeServices}
        handleDelete={handleDelete}
      />

      <ItemSection
        selectedItem={selectedItem}
        itemType="Transportation"
        addButtonLabel="Transportation Line"
        data={ExchangedData?.buses}
        handleDelete={handleDelete}
      /> </>}
      </div>
    </>
  );
}
