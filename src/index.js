import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
// import About from './about'
import App from './App'
import Welcome from './Welcome'
import About from './About'
import KombatPage from './KombatPage'

//React Router config
const myRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Welcome />
    },
    {
      path: "/kombatpage",
      element: <KombatPage />,
      loader: async () => fetch("http://localhost:3000/karacters").then((r) => r.json())
    },
    {
      path: "/about",
      element: <About />,
    }

  ]
}]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
