import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import NotFound from "./Components/NotFound/NotFound";
import SignUp from "./Components/SignUp/SignUp";
import Data from "./Context/Data";
import Markets from "./Components/Markets/Markets";
import Banks from "./Components/Banks/Banks";
import Hospitals from "./Components/Hospitals/Hospitals";
import MaintenancePayment from "./Components/MaintenancePayment/MaintenancePayment";
import Education from "./Components/Education/Education";
import Cinema from "./Components/Cinema/Cinema";
import Shopping from "./Components/Shopping/Shopping";
import Fashion from "./Components/Fashion/Fashion";
import Health from "./Components/Health/Health";
import Transportation from "./Components/Transportation/Transportation";
import Maintenance from "./Components/Maintenance/Maintenance";
import HomeServices from "./Components/HomeServices/HomeServices";
import Sports from "./Components/Sports/Sports";
import "./App.css";
import Shawarma from "./Components/Restaurants/shawarma";
import Fried from "./Components/Restaurants/fried";
import Fastfood from "./Components/Restaurants/fastfood";
import Orientalfood from "./Components/Restaurants/orientalfood";
import Seafood from "./Components/Restaurants/seafood";
import RestaurantLayout from "./Components/Restaurants/RestaurantLayout";
import Pizza from "./Components/Restaurants/pizza";
import SignIn from "./Components/SignIn/SignIn";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Restaurants from "./Components/Restaurants/allRestaurants";
import Payment from "./Components/PaymentStripe/Payment";
import Completion from "./Components/PaymentStripe/Completion";
import DashBoard from "./Components/DashBoard/DashBoard";
import AddForm from "./Components/DashBoard/AddForm";
import DashboardLayout from "./Components/DashBoard/dashboardLayout";
import UpdateFormBanks from "./Components/DashBoard/UpdateForm";
import Profile from './Components/Profile/Profile';
import { I18nextProvider } from 'react-i18next';
// import i18n from 'i18next';
import i18n from './i18n';
import Details from "./Components/Details/Details";
import ProtectedRoutedb from "./Components/ProtectedRoute/ProtectedRoutedb.jsx";


function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'profile', element: <Profile /> },
        { path: "stripe", element: <Payment /> },
        { path: "completion", element: <Completion></Completion> },
        { path: "about", element: <About /> },
        { path: "banks", element: <Banks />},
        { path: "markets", element: <Markets /> },
        { path: "hospitals", element: <Hospitals /> },
        { path: "education", element: <Education /> },
        { path: "cinema", element: <Cinema /> },
        {
          path: "payment",
          element: (<ProtectedRoute><MaintenancePayment /></ProtectedRoute>),
        },
        {
          path: "restaurants",
          element: <RestaurantLayout />,
          children: [
            { index: true, element: <Restaurants></Restaurants> },
            { path: "fried", element: <Fried></Fried> },
            { path: "fastfood", element: <Fastfood></Fastfood> },
            { path: "oriental", element: <Orientalfood></Orientalfood> },
            { path: "pizza", element: <Pizza></Pizza> },
            { path: "seafood", element: <Seafood></Seafood> },
            { path: "shawarma", element: <Shawarma></Shawarma> },
            { path: "*", element: <NotFound></NotFound> },
          ],
        },
        { path: "shopping", element: <Shopping /> },
        { path: "fashion", element: <Fashion /> },
        { path: "health", element: <Health /> },
        { path: "sports", element: <Sports /> },
        { path: "maintenance", element: <Maintenance /> },
        { path: "homeServices", element: <HomeServices /> },
        { path: "transportation", element: <Transportation /> },
        { path: "contactus", element: <ContactUs /> },
        { path: "signin", element: <SignIn /> },
        { path: "signup", element: <SignUp /> },
        {
          path: "dashboard",
          element: <DashboardLayout></DashboardLayout>,
          children: [
            { index: true, element: <ProtectedRoutedb><DashBoard></DashBoard></ProtectedRoutedb> },
            { path: "addform/:type", element: <AddForm></AddForm> },
            { path: "updateform/:type/:id", element: <UpdateFormBanks></UpdateFormBanks> },
          ],
        },
        {path:"details/:id", element:<Details></Details> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);


  i18n.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        
        translation: require('./locales/en.json')
      },
      ar: {
        translation: require('./locales/ar.json')
      }
    }
  });
  const language = i18n.language;
  return (
    // <>
    //   <Data>
    //     <RouterProvider router={routers}></RouterProvider>
    //   </Data>
    // </>
 <>
      <Data>
        <RouterProvider router={routers}>
          <I18nextProvider i18n={i18n}>
          <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Layout />
          </div>
          </I18nextProvider>
        </RouterProvider>
      </Data>
    </>
  );
}

export default App;
