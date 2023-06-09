import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Root from "./Root/Root";
import JobsDetails from "./FeaturedJob/JobsDetails/JobsDetails";
import AppliedJobs from "./AppliedJobs.jsx/AppliedJobs";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Statistics from "./Statistics/Statistics";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobsDetails/:id",
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
