import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {Provider} from "react-redux"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import counterStore from './stores/index.js'
import { AuthProvider } from './store/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
    </AuthProvider>
  </React.StrictMode>,
)
