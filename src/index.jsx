import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PickList from './pages/pick-list';
import PickedMusic from './pages/picked-music';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/pick-list',
    element: <PickList />,
  },
  {
    path: "/picked-music/:musicId/*",
    element: <PickedMusic />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);





