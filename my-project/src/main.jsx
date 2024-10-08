import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AboutUs from './Components/AboutUs.jsx';
import './index.css';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx';
import Error from './Components/Error.jsx';
import Body from './Components/Body.jsx';
import RestaurantMenu from './Components/RestaurantMenu.jsx';
import { lazy, Suspense } from 'react';
import Cart from './Components/Cart.jsx';

const InstaMart = lazy(()=>{
  return import('./Components/InstaMart.jsx')
})
const appRouter = createBrowserRouter([
  { 
    path: '/', 
    element: <App />, 
    children:[
      {
        path: "/",
        element: <Body/>
      },
    { 
      path: '/about', 
      element: <AboutUs /> 
    },
    { 
      path: '/contact', 
      element: <ContactUs/>
    },
    { 
      path: '/instaMart', 
      element: (
        <Suspense fallback={<h1>Loading....</h1>}><InstaMart/></Suspense>
      )
    },
    {
      path: '/cart',
      element: <Cart/>
    },
    {
      path:'/restaurant/:resId',
      element: <RestaurantMenu/>
    },
  ],
    errorElement:<Error/> 
  },
  

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
