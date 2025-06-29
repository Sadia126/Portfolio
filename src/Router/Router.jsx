import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/MainLayouts/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },{
            path:"/project/:id",
            element: <ProjectDetails></ProjectDetails>
        }
    ]
  },
]);