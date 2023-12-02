import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: "ll",
    errorElement: "ll",
    children: [
      {
        path: "/",
        element: "ll",
      },
    ],
  },
]);

export default router;
