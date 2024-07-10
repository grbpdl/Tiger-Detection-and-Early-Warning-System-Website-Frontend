import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER, 
  transition: transitions.SCALE,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
)

