import { RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Router from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
