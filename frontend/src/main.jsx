import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter
} from "react-router-dom";

import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

      <AuthProvider>
        <Toaster />
        <App />

      </AuthProvider>

    </BrowserRouter>

  </React.StrictMode>,
)