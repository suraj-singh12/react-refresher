import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Auth from './Auth';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth />
    },
]);

export default router;