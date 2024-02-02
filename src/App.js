import Admin from './Components/Dashboards/admin'
import Faculty from './Components/Dashboards/faculty'
import SuperAdmin from './Components/Dashboards/superAdmin'
import Index from './Components/Login/Index';
import './Components/Login/authenticate.json'
 import PrivateRoutes from './Components/privateRoutes'

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/Login",
  //     element: <Login></Login>
  //   },
  //   {
  //     path: "/admin",
  //     element: <admin></admin>
  //   }
  // ])
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route element = {<PrivateRoutes/>}>
        <Route element = {<Admin/>} path = "/admin"/>
        <Route element = {<Faculty/>} path = "/faculty"/>
        <Route element = {<SuperAdmin/>} path = "/super-admin"/>
      </Route> */}
      <Route element = {<Index/>} path = "/"/>
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
