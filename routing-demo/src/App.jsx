import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Technologies from './components/Technologies'
import Java from './components/Java'
import Node from './components/Node'
import Vue from './components/Vue'

function App() {

  //routing configuration
    //create browser router object
    const browserRouterObject=createBrowserRouter([
      {
        path:'/',
        element:<RootLayout />,
        children:[
          {
            path:"",
            element:<Home />
          },
          {
            path:"register",
            element:<Register />
          },
          {
            path:"login",
            element:<Login />
          },
          {
            path:"technologies",
            element:<Technologies />,
            children:[
              {
                index:true,
                element:<Node />
              },
              {
                path:"java",
                element:<Java />
              },
              {
                path:"node",
                element:<Node />
              },
              {
                path:"vue",
                element:<Vue />
              }
            ]
          }
        ]
      }
    ])


  return (
    <RouterProvider router={browserRouterObject} />
  )
}

export default App