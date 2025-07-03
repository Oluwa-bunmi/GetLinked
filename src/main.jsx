import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollUp from "./components/ScrollUp";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollUp />
    <App />
    <ToastContainer />
  </BrowserRouter>
);
