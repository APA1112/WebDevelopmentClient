import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { IndiceProvider } from './components/IndiceProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <IndiceProvider>
    <App />
  </IndiceProvider>,
)
