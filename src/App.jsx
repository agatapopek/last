import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import DefaultPage from './views/DefaultPage'
import SecondPage from './views/SecondPage'
import ThirdPage from './views/ThirdPage'



const router = createBrowserRouter([
  {
    path: "/last/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element:<DefaultPage/>
      },
      {
        index: "first",
        element:<SecondPage/>
      },
      {
        index: "second",
        element:<ThirdPage/>
      }
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
