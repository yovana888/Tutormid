import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router/Router'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './context/auth.context';

import { ToastContainer, toast } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <>
        <Router/>
        <ToastContainer/>
       </>
    </AuthProvider>
  </React.StrictMode>
)
