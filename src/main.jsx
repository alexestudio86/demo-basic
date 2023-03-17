import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, Routes } from 'react-router-dom';
import { rutas } from './router/routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>,
)
