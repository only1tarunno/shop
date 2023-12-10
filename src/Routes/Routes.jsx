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
import Payment from "../pages/Dashboard/UserPages/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";
import StarRating from "../pages/Dashboard/UserPages/StarRating/StarRating";
import Updateprofile from "../pages/Dashboard/UserPages/UserProfile/Updateprofile";
import AdminDashboard from "../pages/Dashboard/Adminpages/AdminDashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import Addproduct from "../pages/Dashboard/Adminpages/AddProduct/Addproduct";
import AllProducts from "../pages/Dashboard/Adminpages/AllProducts/AllProducts";
import UpdateProduct from "../pages/Dashboard/Adminpages/Updateproduct/UpdateProduct";
import AllUsers from "../pages/Dashboard/Adminpages/AllUser/AllUsers";

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
      // user routes
      {
        path: "/dashboard/userDashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "starRating",
        element: <StarRating></StarRating>,
      },
      {
        path: "updateProfile",
        element: <Updateprofile></Updateprofile>,
      },
      // admin routes
      {
        path: "/dashboard/adminDashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <AdminRoute>
            <Addproduct></Addproduct>
          </AdminRoute>
        ),
      },
      {
        path: "allProducts",
        element: (
          <AdminRoute>
            <AllProducts></AllProducts>
          </AdminRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <AdminRoute>
            <UpdateProduct></UpdateProduct>
          </AdminRoute>
        ),
      },
      {
        path: "addCategory",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "reviews",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
