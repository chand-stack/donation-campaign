import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";


const createdRoot = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])

export default createdRoot;