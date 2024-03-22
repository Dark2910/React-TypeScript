import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login/Login.tsx';
import Register from './components/Register/Register.tsx';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
