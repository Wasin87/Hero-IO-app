import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import HomeData from '../pages/HomeData/HomeData';
 

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,  
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
         loader: () => fetch('/Data/homeData.json'),
        Component: Home
      },
      {
        index:true,
        
        Component: HomeData
      },
      {
        path: '/apps',
        loader: () => fetch('/Data/allData.json'),
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      }
    ],
  },
]);
