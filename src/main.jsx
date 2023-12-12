import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayout/MainLayOut';
import Home from './Pages/Home/Home';
import Contact from './component/Navbar/Contact';
import About from './component/Navbar/About';
import Card from './component/Card/Card';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('../public/data.json')
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/card',
        element: <Card></Card>,
        loader: ()=> fetch('../public/data.json')
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=' max-w-6xl mx-auto'>
   <RouterProvider router={router} />
   </div>

  </React.StrictMode>,
)
