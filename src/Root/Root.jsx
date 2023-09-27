import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import CardInfo from "../Components/CardInfo/CardInfo";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const createdRoot = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/info/:id",
        element: <CardInfo></CardInfo>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default createdRoot;
