import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Detail from './detail.jsx'
import Todo from './todo.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  }, 
  {
    path: "/todo",
    element: <Todo />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)





// input to write a task
// button to add a task
// div to display tasks in a list of li

// const [tasks, setTasks] = useState([]);
//