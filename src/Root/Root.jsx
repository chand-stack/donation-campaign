import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import CardInfo from "../Components/CardInfo/CardInfo";
import Donation from "../Components/Donation/Donation";


const createdRoot = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../../public/data.json')
            },
            {
                path: '/info/:id',
                element: <CardInfo></CardInfo>,
                loader: () => fetch('../../public/data.json')

            },
            {
                path: '/donation',
                element: <Donation></Donation>
            }
        ]
    }
])

export default createdRoot;