import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./components/Home"
import Login from "./components/Login";
import Signin from "./components/Signin";
import Logo from "./components/Logo";
import Learning from "./components/Learning";
import Mentoring from "./components/Mentoring";
import Practice from "./components/Practice";
import Jobs from "./components/Jobs";
import Courses from "./components/Courses";

function App() {
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Rootlayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/signin',
          element:<Signin/>

        },
        {
          path:'/Logo',
          element:<Logo/>
        },
        {
          path:'/Learning',
          element:<Learning/>
        },
        {
          path:'/Mentoring',
          element:<Mentoring/>
        },
        {
          path:'/Practice',
          element:<Practice/>
        },
        {
          path:'/Jobs',
          element:<Jobs/>
        },
        {
          path:'/Courses',
          element:<Courses/>
        }
      ]
    }
  ]
)
  
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
