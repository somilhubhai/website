import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from './Layouts';
import Signup from './components/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/signup" element={ <Signup /> } />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
