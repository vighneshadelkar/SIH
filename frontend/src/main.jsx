import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter
} from "react-router-dom";
import { AuthContextProvider } from "./hooks/authContext.jsx";
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js'; 
// import LanguageSwitcher from './LanguageSwitcher'; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
        
    </AuthContextProvider>
  </React.StrictMode>
);
