// main.jsx or main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css'; // Import your global styles
import { Layout } from './Layout.jsx';
import { Landing } from './components/Landing.jsx';
import { Aboutus } from './components/Aboutus.jsx';
import { Consultation } from './components/Consultation.jsx';
import { SurveyComponent } from './components/SurveyComponent';

import { Login } from './components/Login';
import { Signup } from './components/Signup';
// Create the root element for React

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Landing />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/consultation' element={<Consultation />} />
      <Route path='/surveycomponent' element={<SurveyComponent/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Landing/>} />
      {/* <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
