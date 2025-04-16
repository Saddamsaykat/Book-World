
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import Root from './Component/Root';
import Home from './Component/Home/Home';
import PageToRead from './Component/PageToRead/PageToRead';
import ListedBooks from './Component/ListedBooks/ListedBooks';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import LiveCharts from './Component/LiveCharts/LiveCharts';
import BooksOfJournals from './Component/BooksOfJournals/BooksOfJournals';
import AboutUs from './Component/AboutUs/AboutUs';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

const router = new createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <AboutUs></AboutUs>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/pageRead',
        element: <PageToRead></PageToRead>
      },
      {
        path: '/bookroute/:bookrouteId',
        loader: () => fetch(`/books.json`),
        element: <PageToRead></PageToRead>
      },
      // Book List
      {
        path: '/bookList',
        element: <ListedBooks ></ListedBooks>
      },
      {
        path: '/pageReadCharts',
        element: <LiveCharts></LiveCharts>
      },
      {
        path: '/booksOfJournals',
        element: <BooksOfJournals></BooksOfJournals>
      },
      {
        path: '/signIn',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }


    ]
  }])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"

    ></ToastContainer>
  </React.StrictMode>,
)
