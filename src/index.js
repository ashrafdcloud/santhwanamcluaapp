
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//importing the routerlayout
import RootLayout from "./routes/RootLayout";
import AboutPage from "./routes/AboutPage";
import EmployeePage from "./routes/EmployeePage";
import BatchPage, { loader as batchPageLoader } from "./routes/BatchPage";
import HomePage, { loader as homePageLoader } from "./routes/HomePage";
import StudentPage, { loader as StudentPageLoader } from "./routes/StudentPage";
import EmployeeDetail from "./components/EmployeeDetail";
import ProductPage from './routes/ProductPage';
import ProdcutDetail from './components/ProdcutDetail';
import ProductList from './components/ProductList';







const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path: "/",
        element: <HomePage/>,
        loader: homePageLoader
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: '/',
        element: <BatchPage/>,
        loader: batchPageLoader
      },
      {
        path: "/student",
        element: <StudentPage/>,
        loader: StudentPageLoader
      },
      {
        path: "/employee",
        element: <EmployeePage/>
      },
      {
        path: "/employee/:id",
        element: <EmployeeDetail/>
      },
      {
        path: "/product/products",
        element: <ProductList/>
      },
      {
        path: "/product/products/:id",
        element: <ProdcutDetail/>
      },
    ]
  }
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
