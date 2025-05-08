import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from "./components/Home/Home"
// import Signup from './components/SIgnup/Signup';
// import Signin from './components/Signin/Signin';
// import Technologies from './components/Technologies/Technologies';
// import RootLayout from './components/RootLayout/RootLayout';
// import Angular from './components/Angular/Angular';
// import ReactCompo from './components/ReactCompo/ReactCompo';
// import Vue from './components/Vue/Vue';
import RootLayout from './components/Assignment-10/RootLayout/RootLayout';
import Register from './components/Assignment-10/Register/Register';
import Login from './components/Assignment-10/Login/Login';
import UserDashBoard from './components/Assignment-10/UserDashBoard/UserDashBoard';
import Home from './components/Assignment-10/Home/Home';
import './App.css'


function App() {

  // let router=createBrowserRouter([
  //   {
  //     path:"",
  //     element:<RootLayout/>,
  //     children:[
  //       {
  //         path:"/",
  //         element:<Home/> 
  //       },
  //       {
  //         path:"signup",
  //         element:<Signup/>
  //       },
  //       {
  //         path:"signin",
  //         element:<Signin/>
  //       },
  //       {
  //         path:"technologies",
  //         element:<Technologies/>,
  //         children:[
  //           {
  //             path:"angular",
  //             element:<Angular/>
  //           },
  //           {
  //             path:"vue",
  //             element:<Vue/>
  //           },
  //           {
  //             path:"react",
  //             element:<ReactCompo/>
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ])
  let router=createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"user-dashboard/:username",
          element:<UserDashBoard/>
        }

      ]
    }
  ])
  return (
    <div>

      {/* <RouterProvider router={router}></RouterProvider> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
