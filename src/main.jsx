import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Detail from "./detail.jsx";
import Dashboard from "./routes/dashboard";
import Todo from "./todo.jsx";
import "./index.css";

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
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <h1>Statisque de la page</h1>
      },
     
      {
        path: "users",
        element: <App />,
      },
      {
        path: "setting",
        element: (
          <div>
            <h1>setting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio tenetur voluptates reiciendis consequuntur asperiores
              placeat, quis natus. Maxime asperiores a nobis id sed eum autem.
              Illum exercitationem incidunt architecto porro?
            </p>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// input to write a task
// button to add a task
// div to display tasks in a list of li

// const [tasks, setTasks] = useState([]);
//
