import { StrictMode } from 'react' // Strict Mode for Displaying the Errors with Future Compatible Versions 
import { createRoot } from 'react-dom/client' //Rendering App Element using Create Root
import './index.css' // Main Element CSS
import App from './pages/App.jsx' // Importing the Main Element to Render 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
