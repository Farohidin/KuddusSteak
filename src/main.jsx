import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/sass/main.scss'
import App from './App.jsx'
import { store } from './app/Store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basket from './Page/Basket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "/basket",
    element: <Basket/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
