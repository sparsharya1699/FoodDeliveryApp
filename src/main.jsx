import { StrictMode } from "react"; // Strict Mode for Displaying the Errors with Future Compatible Versions
import { createRoot } from "react-dom/client"; //Rendering App Element using Create Root
import "./index.css"; // Main Element CSS
import App from "./App.jsx"; // Importing the Main Element to Render
import { BrowserRouter } from "react-router-dom"; //To get react router support in the app component
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
