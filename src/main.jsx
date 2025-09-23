import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';

// Import Context Provider
import { UserProvider } from './contexts/UserContext';
import { LocaleProvider } from './contexts/LocaleContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </UserProvider>
  </StrictMode>
);
