import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from "./App"
import {Hero} from './Herosection'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Hero/>
  </React.StrictMode>,
)
