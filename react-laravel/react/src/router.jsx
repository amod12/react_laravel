import {createBrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./assets/home.jsx";
import Signup from "./assets/register.jsx";
import Notfound from "./assets/notfound.jsx";
import Items from "./assets/item.jsx";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import GuestLayout from "./layout/GuestLayout.jsx";
import Login from "./assets/login.jsx";
import Users from "./assets/Users.jsx";
import UserForm from "./assets/UserForm.jsx";

  
// const Router = () => (
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/register" element={<Register />} />
//     <Route path="/item" element={<Items />} />
//     <Route path="*" element={<Notfound />} />
//   </Routes>
// );
  
const Router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/item',
        element: <Items/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      
    ]
  },
  {
    path: "*",
    element: <Notfound/>
  }
])

export default Router
