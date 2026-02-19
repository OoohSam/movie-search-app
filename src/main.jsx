import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Authentication from '../Context/Authentication.jsx';
import { useAuth } from '../Context/Authentication.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
    <App /> 
    </Authentication>
  </StrictMode>
)
