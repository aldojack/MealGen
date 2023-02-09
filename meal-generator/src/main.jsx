import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import meals from "./data/meals.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App meals={meals.slice(7)}/>
  </React.StrictMode>,
)
