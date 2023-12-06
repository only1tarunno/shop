import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import FAQPage from "../pages/FAQ/FAQ";
import Error404 from "../pages/Error404/Error404";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetail from "../pages/productDetail/ProductDetail";
import PvtRoute from "./PvtRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Cart from "../pages/Dashboard/UserPages/Cart/Cart";
import UserDashboard from "../pages/Dashboard/UserPages/UserDashboard/UserDashboard";
import UserProfile from "../pages/Dashboard/UserPages/UserProfile/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faq",
        element: <FAQPage></FAQPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PvtRoute>
        <DashboardLayout></DashboardLayout>
      </PvtRoute>
    ),
    children: [
      {
        path: "/dashboard/userDashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/dashboard/profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);

export default router;
