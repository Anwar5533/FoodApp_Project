import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AboutUs from './Components/AboutUs.jsx';
import './index.css';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import ContactUs from './Components/ContactUs.jsx';
import Error from './Components/Error.jsx';

const appRouter = createBrowserRouter([
  { path: '/', element: <App />, errorElement:<Error/> },
  { path: '/about', element: <AboutUs /> },
  { path: '/contact', element: <ContactUs/> }

]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
