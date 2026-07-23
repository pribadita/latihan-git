import "./App.css";
import "./style.css";
import MainRoutes from "./routes/mainRoutes";

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <MainRoutes></MainRoutes>
    </>
  );
}

export default App;
