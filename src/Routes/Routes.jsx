import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppDetails from '../pages/AppDetails/AppDetails';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,  
    children: [
      {
        path: '/',
        loader: () => fetch('/Data/homeData.json'),
        Component: Home,  
      },
      {
        path: '/apps',
        loader: () => fetch('/Data/allData.json'),
        Component: Apps,  
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/Data/allData.json'),
        Component: AppDetails,
      },
      {
        path: '*',
        Component: ErrorPage,
      },
    ],
  },
]);
