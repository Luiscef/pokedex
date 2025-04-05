import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Asegúrate de que esto esté importado
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/pokedex"> 
      <App />
    </Router>
  </StrictMode>
);
