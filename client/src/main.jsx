import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
/* import homePage from './routes/homePage'; */
import MenuItem from "../routes/MenuItem";
import OrderPage from '../routes/OrderPage';
import AboutUs from '../routes/AboutUs';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
      {
        path: 'MenuItem',
        element: <MenuItem />,
      },
      {
        path: 'OrderPage',
        element: <OrderPage />,
      },
    ],
  },
]);

/* {
        path: 'homePage',
        element: <homePage />,
      },
      
       */
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
);