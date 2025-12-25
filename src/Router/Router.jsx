import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])

export default Router;