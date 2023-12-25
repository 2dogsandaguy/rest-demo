import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
/* import homePage from './routes/homePage'; */
import Menu from '../routes/Menu';
/* import OrderPage from './routes/OrderPage'; */
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
      /* {
        path: 'homePage',
        element: <homePage />,
      },
      
      {
        path: 'OrderPage',
        element: < OrderPage/>,
      }, */
      {
        path: 'Menu',
        element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route} />
);