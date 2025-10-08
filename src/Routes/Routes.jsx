import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import HomeData from '../pages/HomeData/HomeData';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('/Data/homeData.json'),
        Component: HomeData,
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
        path: '/appDetails/:id', // ✅ dynamic route added
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
