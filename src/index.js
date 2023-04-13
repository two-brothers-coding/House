import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


import Home from './pages/home/Home';
import About from './pages/about/About';
import Article from './pages/article/Article';
import Property from './pages/property/Property';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
 
 const router=createBrowserRouter ([
{
  path:'/',
  element: <App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/article',
      element:<Article/>
    },
    {
      path:'/property',
      element:<Property/>
    }

  
  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


