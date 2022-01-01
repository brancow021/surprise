import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import App from './App'
import { Card } from './Card';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/surprise/maybel" element={<Card/>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
