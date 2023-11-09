import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, RouterProvider} from "react-router-dom";
import Router from './router.jsx';
import { ContextProvider } from './ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Router} />
     </ContextProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Router/>
//     </BrowserRouter>
//   </React.StrictMode>
// );