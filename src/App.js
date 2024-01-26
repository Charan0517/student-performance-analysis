import './Components/admin'
import Index from './Components/Login/Index';

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
      <Route path='/' element={<Index/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
