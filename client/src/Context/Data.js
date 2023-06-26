import React, { createContext, useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {v4 as uuid} from 'uuid'
export const DataContext = createContext();

export default function Data(props) {
  // Images About Slider
  const ImgsArr = useMemo(
    () => [
      "https://www.talaatmoustafa.com/Upload/75rehab%201.jpg",
      "https://www.talaatmoustafa.com/Upload/8rehab%202.jpg",
      "https://www.talaatmoustafa.com/Upload/72rehab%203.jpg",
      "https://www.talaatmoustafa.com/Upload/27rehab%208.jpg",
      "https://www.talaatmoustafa.com/Upload/4rehab%204.jpg",
      "https://www.talaatmoustafa.com/Upload/21rehab%205.jpg",
      "https://www.talaatmoustafa.com/Upload/16rehab%206.jpg",
      "https://www.talaatmoustafa.com/Upload/10rehab%209.jpg",
      "https://www.talaatmoustafa.com/Upload/80rehab%2010.jpg",
      "https://www.talaatmoustafa.com/Upload/14rehab%2011.jpg",
      "https://www.talaatmoustafa.com/Upload/23rehab%2015.jpg",
      "https://www.talaatmoustafa.com/Upload/77rehab%2014.jpg",
      "https://www.talaatmoustafa.com/Upload/54rehab%2013.jpg",
      "https://www.talaatmoustafa.com/Upload/35rehab%2019.jpg",
      "https://www.talaatmoustafa.com/Upload/15rehab%2017.jpg",
      "https://www.talaatmoustafa.com/Upload/3rehab%2020.jpg",
      "https://www.talaatmoustafa.com/Upload/85rehab%2018.jpg",
      "https://www.talaatmoustafa.com/Upload/61rehab%2021.jpg",
      "https://www.talaatmoustafa.com/Upload/41rehab%2023.jpg",
      "https://www.talaatmoustafa.com/Upload/0rehab%2022.jpg",
    ],
    []
  );

  // Cinema movies Data Management
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/cinema").then((res) => {
      setMovies(res.data);
    });
  }, []);

  const deleteMovie = useCallback((ID) => {
    axios.delete(`http://localhost:3005/cinema/${ID}`);
    setMovies(movies.filter((movie) => +movie.id !== +ID));
  }, [movies]);

  const addMovie = useCallback((AddedObj) => {
    axios.post("http://localhost:3005/cinema", AddedObj);
    setMovies([...movies, AddedObj]);
  }, [movies]);
  const updateMovie = useCallback((ID, updatedObj) => {
    axios.patch(`http://localhost:3005/cinema/${ID}`, updatedObj);
    setMovies(
      movies.map((movie) => {
        if (+movie.id === +ID) {
          return updatedObj;
        } else {
          return movie;
        }
      })
    );
  }, [movies]);

  // Sign in and sign up token management
  const [userData, setUserData] = useState(null);

  const saveUserData = useCallback(() => {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, [saveUserData]);

  const DeleteUserData = useCallback(() => {
    localStorage.removeItem("userToken");
    setUserData(null);
  }, []);

  // Restaurant Data Management
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [ShawarmaRes, setShawarmaRes] = useState([]);
  const [SeaFoodRes, setSeaFoodRes] = useState([]);
  const [OrientalFoodRes, setOrientalFoodRes] = useState([]);
  const [PizzaRes, setPizzaRes] = useState([]);
  const [FriedRes, setFriedRes] = useState([]);
  const [FastFoodRes, setFastFoodRes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/shawarma").then((res) => {
      setShawarmaRes(res.data);
    });
    axios.get("http://localhost:3005/fried").then((res) => {
      setFriedRes(res.data);
    });
    axios.get("http://localhost:3005/pizza").then((res) => {
      setPizzaRes(res.data);
    });
    axios.get("http://localhost:3005/seafood").then((res) => {
      setSeaFoodRes(res.data);
    });
    axios.get("http://localhost:3005/fastfood").then((res) => {
      setFastFoodRes(res.data);
    });
    axios
      .get("http://localhost:3005/orientalfood")
      .then((res) => {
        setOrientalFoodRes(res.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  useEffect(() => {
    setAllRestaurants([
      ...ShawarmaRes,
      ...SeaFoodRes,
      ...OrientalFoodRes,
      ...PizzaRes,
      ...FriedRes,
    ]);
  }, [ShawarmaRes, SeaFoodRes, OrientalFoodRes, PizzaRes, FriedRes]);

  const deleteShawarmaRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/shawarma/${ID}`);
      setShawarmaRes(ShawarmaRes.filter((ele) => +ele.id !== +ID));
    },
    [ShawarmaRes]
  );

  const addShawarmaRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/shawarma", AddedObj);
      setShawarmaRes([...ShawarmaRes, AddedObj]);
    },
    [ShawarmaRes]
  );
  const updateShawarmaRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/shawarma/${ID}`, updatedObj);
      setShawarmaRes(
        ShawarmaRes.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [ShawarmaRes]
  );

  const deleteSeaFoodRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/fried/${ID}`);
      setSeaFoodRes(SeaFoodRes.filter((movie) => +movie.id !== +ID));
    },
    [SeaFoodRes]
  );

  const addSeaFoodRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/fried", AddedObj);
      setSeaFoodRes([...SeaFoodRes, AddedObj]);
    },
    [SeaFoodRes]
  );
  const updateSeaFoodRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/fried/${ID}`, updatedObj);
      setSeaFoodRes(
        SeaFoodRes.map((movie) => {
          if (+movie.id === +ID) {
            return updatedObj;
          } else {
            return movie;
          }
        })
      );
    },
    [SeaFoodRes]
  );

  const deleteOrientalFoodRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/orientalfood/${ID}`);
      setOrientalFoodRes(OrientalFoodRes.filter((ele) => +ele.id !== +ID));
    },
    [OrientalFoodRes]
  );

  const addOrientalFoodRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/orientalfood", AddedObj);
      setOrientalFoodRes([...OrientalFoodRes, AddedObj]);
    },
    [OrientalFoodRes]
  );
  const updateOrientalFoodRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/orientalfood/${ID}`, updatedObj);
      setOrientalFoodRes(
        OrientalFoodRes.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [OrientalFoodRes]
  );

  const deletePizzaRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/pizza/${ID}`);
      setPizzaRes(PizzaRes.filter((ele) => +ele.id !== +ID));
    },
    [PizzaRes]
  );

  const addPizzaRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/pizza", AddedObj);
      setPizzaRes([...PizzaRes, AddedObj]);
    },
    [PizzaRes]
  );
  const updatePizzaRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/pizza/${ID}`, updatedObj);
      setPizzaRes(
        PizzaRes.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [PizzaRes]
  );

  const deleteFriedRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/fried/${ID}`);
      setFriedRes(FriedRes.filter((ele) => +ele.id !== +ID));
    },
    [FriedRes]
  );

  const addFriedRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/fried", AddedObj);
      setFriedRes([...FriedRes, AddedObj]);
    },
    [FriedRes]
  );
  const updateFriedRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/fried/${ID}`, updatedObj);
      setFriedRes(
        FriedRes.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [FriedRes]
  );

  const deleteFastFoodRes = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/fastfood/${ID}`);
      setFastFoodRes(FastFoodRes.filter((ele) => +ele.id !== +ID));
    },
    [FastFoodRes]
  );

  const addFastFoodRes = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/fastfood", AddedObj);
      setFastFoodRes([...FastFoodRes, AddedObj]);
    },
    [FastFoodRes]
  );
  const updateFastFoodRes = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/fastfood/${ID}`, updatedObj);
      setFastFoodRes(
        FastFoodRes.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [FastFoodRes]
  );

  // Sports Data Management
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/sports").then((res) => {
      setGyms(res.data);
    });
  }, []);

  const deleteSports = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/sports/${ID}`);
      setGyms(gyms.filter((ele) => +ele.id !== +ID));
    },
    [gyms]
  );

  const addSports = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/sports", AddedObj);
      setGyms([...gyms, AddedObj]);
    },
    [gyms]
  );
  const updateSports = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/sports/${ID}`, updatedObj);
      setGyms(
        gyms.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [gyms]
  );

  // Transportation Data Management
  const [buses, setBuses] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3005/transportation").then((res) => {
      setBuses(res.data);
    });
  }, []);

  const deleteBuses = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/transportation/${ID}`);
      setBuses(buses.filter((ele) => +ele.id !== +ID));
    },
    [buses]
  );

  const addBuses = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/transportation", AddedObj);
      setBuses([...buses, AddedObj]);
    },
    [buses]
  );
  const updateBuses = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/transportation/${ID}`, updatedObj);
      setBuses(
        buses.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [buses]
  );

  //Bank Data Management
  const [bank, setBank] = useState([]);
  function getBanks() {
    axios.get("http://localhost:3005/banks").then((res) => setBank(res.data));
  }
  useEffect(() => {
    getBanks();
  }, []);

  const deleteBank = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/banks/${ID}`);
      setBank(bank.filter((bank) => +bank.id !== +ID));
    },
    [bank]
  );
  const addBank = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/banks", AddedObj);
      setBank([...bank, AddedObj]);
    },
    [bank]
  );
  const updateBank = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/banks/${ID}`, updatedObj);
      setBank(
        bank.map((bank) => {
          if (+bank.id === +ID) {
            return updatedObj;
          } else {
            return bank;
          }
        })
      );
    },
    [bank]
  );

  //Shopping Data Management
  const [shopping, setShopping] = useState([]);
  function getShopping() {
    axios
      .get("http://localhost:3005/shopping")
      .then((res) => setShopping(res.data));
  }
  useEffect(() => {
    getShopping();
  }, []);

  const deleteShopping = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/shopping/${ID}`);
      setShopping(shopping.filter((mall) => +mall.id !== +ID));
    },
    [shopping]
  );

  const addShopping = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/shopping", AddedObj);
      setShopping([...shopping, AddedObj]);
    },
    [shopping]
  );
  const updateShopping = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/shopping/${ID}`, updatedObj);
      setShopping(
        shopping.map((mall) => {
          if (+mall.id === +ID) {
            return updatedObj;
          } else {
            return mall;
          }
        })
      );
    },
    [shopping]
  );
  //Fashion Data Management
  const [fashion, setfashion] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/fashion")
      .then((response) => setfashion(response.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteFashion = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/fashion/${ID}`);
      setfashion(fashion.filter((ele) => +ele.id !== +ID));
    },
    [fashion]
  );

  const addFashion = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/fashion", AddedObj);
      setfashion([...fashion, AddedObj]);
    },
    [fashion]
  );
  const updateFashion = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/fashion/${ID}`, updatedObj);
      setfashion(
        fashion.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [fashion]
  );

  // Markets Context [BOYKA]
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/markets")
      .then((res) => {
        setMarkets(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteMarket = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/markets/${ID}`);
      setMarkets(markets.filter((Market) => +Market.id !== +ID));
    },
    [markets]
  );
  const addMarket = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/markets", AddedObj);
      setMarkets([...markets, AddedObj]);
    },
    [markets]
  );
  const updateMarket = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/markets/${ID}`, updatedObj);
      setMarkets(
        markets.map((Market) => {
          if (+Market.id === +ID) {
            return updatedObj;
          } else {
            return Market;
          }
        })
      );
    },
    [markets]
  );

  // End OF Markets Context

  //homeServices Data Management
  const [homeServices, setHomeServices] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/home_services")
      .then((res) => {
        setHomeServices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHome_services = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/home_services/${ID}`);
      setHomeServices(homeServices.filter((ele) => +ele.id !== +ID));
    },
    [homeServices]
  );

  const addHome_services = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/home_services", AddedObj);
      setHomeServices([...homeServices, AddedObj]);
    },
    [homeServices]
  );
  const updateHome_services = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/home_services/${ID}`, updatedObj);
      setHomeServices(
        homeServices.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [homeServices]
  );

  //maintenance Data Management
  const [maintenance, setMaintenance] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3005/maintenance")
      .then((res) => {
        setMaintenance(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteMaintenance = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/maintenance/${ID}`);
      setMaintenance(maintenance.filter((ele) => +ele.id !== +ID));
    },
    [maintenance]
  );

  const addMaintenance = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/maintenance", AddedObj);
      setMaintenance([...maintenance, AddedObj]);
    },
    [maintenance]
  );
  const updateMaintenance = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/maintenance/${ID}`, updatedObj);
      setMaintenance(
        maintenance.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [maintenance]
  );

  //health Data Managment
  const [Centers, setCenters] = useState([]);
  const [Pharmacies, setPharmacies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/centers").then((response) => {
      setCenters(response.data);
    });
    axios
      .get("http://localhost:3005/pharmacy")
      .then((response) => {
        setPharmacies(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteCenters = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/centers/${ID}`);
      setCenters(Centers.filter((ele) => +ele.id !== +ID));
    },
    [Centers]
  );

  const addCenters = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/centers", AddedObj);
      setCenters([...Centers, AddedObj]);
    },
    [Centers]
  );
  const updateCenters = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/centers/${ID}`, updatedObj);
      setCenters(
        Centers.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [Centers]
  );

  const deletePharmacies = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/pharmacy/${ID}`);
      setPharmacies(Pharmacies.filter((ele) => +ele.id !== +ID));
    },
    [Pharmacies]
  );

  const addPharmacies = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/pharmacy", AddedObj);
      setPharmacies([...Pharmacies, AddedObj]);
    },
    [Pharmacies]
  );
  const updatePharmacies = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/pharmacy/${ID}`, updatedObj);
      setPharmacies(
        Pharmacies.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [Pharmacies]
  );

  //Education Data Management
  const [AllEducation, setAllEducation] = useState([]);
  const [Schools, setSchools] = useState([]);
  const [Kindergarten, setKindergarten] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3005/schools").then((res) => {
      setSchools(res.data);
    });
    axios
      .get("http://localhost:3005/kindergarten")
      .then((res) => {
        setKindergarten(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    setAllEducation([...Schools, ...Kindergarten]);
  }, [Schools, Kindergarten]);

  const deleteSchool = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/schools/${ID}`);
      setSchools(Schools.filter((ele) => +ele.id !== +ID));
    },
    [Schools]
  );

  const addSchool = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/schools", AddedObj);
      setSchools([...Schools, AddedObj]);
    },
    [Schools]
  );
  const updateSchool = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/schools/${ID}`, updatedObj);
      setSchools(
        Schools.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [Schools]
  );

  const deletekindergarten = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/kindergarten/${ID}`);
      setSchools(Kindergarten.filter((ele) => +ele.id !== +ID));
    },
    [Kindergarten]
  );

  const addkindergarten = useCallback(
    (AddedObj) => {
      axios.post("http://localhost:3005/kindergarten", AddedObj);
      setKindergarten([...Kindergarten, AddedObj]);
    },
    [Kindergarten]
  );
  const updatekindergarten = useCallback(
    (ID, updatedObj) => {
      axios.patch(`http://localhost:3005/kindergarten/${ID}`, updatedObj);
      setKindergarten(
        Kindergarten.map((ele) => {
          if (+ele.id === +ID) {
            return updatedObj;
          } else {
            return ele;
          }
        })
      );
    },
    [Kindergarten]
  );


  /////////////////////////////////////////////
  // Profile  Component
  const [profileData, setProfileData] = useState(null);
  const [allUserData, setAllUserData] = useState(null);



  function handleUserData(uData, dob, userName, image) {
    setProfileData({ ...uData, 'dob': dob, 'userName': userName, 'image': image });
  }


  useEffect(() => {
    if (profileData) {
      console.log(profileData);
      localStorage.setItem('name', profileData.name);
      localStorage.setItem('email', profileData.email);
      localStorage.setItem('phone', profileData.phone);
      localStorage.setItem('password', profileData.password);
      localStorage.setItem('dob', profileData.dob);
      localStorage.setItem('userName', profileData.userName);
      localStorage.setItem('image', profileData.image);

    }


    if (localStorage.getItem('name')) {
      setAllUserData({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        password: localStorage.getItem('password'),
        dob: localStorage.getItem('dob'),
        userName: localStorage.getItem('userName'),
        image: localStorage.getItem('image')
      })

    }



  }, [profileData])

  // End Of Profile
  //////////////////////////////////////////////////





  // payment 
  const PayArr = useMemo(() => [
    { name: "City Maintenance Bills", fees: "10000" },
    { name: "El-Rehab club subscription", fees: "2000" },
    { name: "Water Bills", fees: "900" },
    { name: "Car Washing subscription", fees: "200" },
  ], []);

  //transportation feedback
  const [transfeedback, setTransfeedback] = useState(null)

  //Search Bar management
  const [All, setAll] = useState({})
  const [categoryNames, setCategoryNames] = useState([])
  const [AllName, setAllName] = useState([])
  const [AllIDs, setAllIDs] = useState([])
  const [AllIDsNames, setAllIDsNames] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/db')
      .then((res) => {
        setAll(res.data)
      })
  }, [])

  useEffect(() => {
    let NamesArr = []
    let IDsArr = []
    let NamesIDsArr = []
    setCategoryNames([...Object.keys(All)])
    for (let category of Object.values(All)) {
      for (let ele of category) {
        NamesArr.push(ele.name)
        IDsArr.push(ele.id)
        NamesIDsArr.push({ id: ele.id, name: ele.name })
      }
    }
    setAllName(NamesArr)
    setAllIDs(IDsArr)
    setAllIDsNames(NamesIDsArr)
  }, [All])









  // Dashboard [ Feed Back , Complain ]

  const [dashBoardFeedback, setDashBoardFeedback] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:3005/feedback')
      .then((res) => setDashBoardFeedback(res.data))
      .catch((err) => console.log(err))
  }, [])


  const addFeedback = useCallback(
    (AddedObj,message) => {
      let ID = uuid().slice(0,4)
      axios.post("http://localhost:3005/feedback", {...AddedObj,id: ID ,place: message, type:"FeedBack"});
      setDashBoardFeedback([...dashBoardFeedback, {...AddedObj,id: ID,place: message, type:"FeedBack"}]);
    },
    [dashBoardFeedback]
  );

  const addComplain = useCallback(
    (AddedObj,photo) => {
      let ID = uuid().slice(0,4)
      axios.post("http://localhost:3005/feedback", {...AddedObj,id: ID,photo: photo ,type:"Complain"});
      setDashBoardFeedback([...dashBoardFeedback, {...AddedObj,id: ID, photo: photo,type:"Complain"}]);
    },
    [dashBoardFeedback]
  );

  const addContact = useCallback(
    (AddedObj) => {
      let ID = uuid().slice(0,4)
      axios.post("http://localhost:3005/feedback", {...AddedObj,id: ID ,type:"Contact us"});
      setDashBoardFeedback([...dashBoardFeedback, {...AddedObj,id: ID, type:"Contact us"}]);
    },
    [dashBoardFeedback]
  );

  const deleteFeed = useCallback(
    (ID) => {
      axios.delete(`http://localhost:3005/feedback/${ID}`);
      setDashBoardFeedback(dashBoardFeedback.filter((ele) => ele.id !== ID));
    },
    [dashBoardFeedback]
  );










  const ExchangedData = {
    All,
    categoryNames,
    AllName,
    AllIDs,
    AllIDsNames,

    PayArr,
    userData,
    DeleteUserData,
    saveUserData,
    movies,
    ImgsArr,
    FastFoodRes,
    AllRestaurants,
    ShawarmaRes,
    SeaFoodRes,
    OrientalFoodRes,
    PizzaRes,
    FriedRes,
    gyms,
    buses,
    bank,
    shopping,
    fashion,
    markets,
    homeServices,
    maintenance,
    Centers,
    Pharmacies,
    Schools,
    Kindergarten,
    AllEducation,
    handleUserData,
    profileData,
    allUserData,
    setAllUserData,


    deleteMovie,
    updateMovie,
    addMovie,

    deleteBank,
    updateBank,
    addBank,

    deleteMarket,
    updateMarket,
    addMarket,

    deleteCenters,
    updateCenters,
    addCenters,

    deletePharmacies,
    updatePharmacies,
    addPharmacies,

    deleteSchool,
    updateSchool,
    addSchool,

    deletekindergarten,
    updatekindergarten,
    addkindergarten,

    deleteShawarmaRes,
    deleteSeaFoodRes,
    deleteOrientalFoodRes,
    deletePizzaRes,
    deleteFriedRes,
    deleteFastFoodRes,
    addShawarmaRes,
    addSeaFoodRes,
    addOrientalFoodRes,
    addPizzaRes,
    addFriedRes,
    addFastFoodRes,
    updateShawarmaRes,
    updateSeaFoodRes,
    updateOrientalFoodRes,
    updatePizzaRes,
    updateFriedRes,
    updateFastFoodRes,

    deleteShopping,
    updateShopping,
    addShopping,

    deleteFashion,
    updateFashion,
    addFashion,

    deleteSports,
    updateSports,
    addSports,

    deleteMaintenance,
    updateMaintenance,
    addMaintenance,

    deleteHome_services,
    updateHome_services,
    addHome_services,

    deleteBuses,
    addBuses,
    updateBuses,

    // Dashboard
    dashBoardFeedback,
    addFeedback,
    addComplain,
    deleteFeed,
    addContact
  };

  return (
    <DataContext.Provider value={ExchangedData}>
      {props.children}
    </DataContext.Provider>
  );
}
