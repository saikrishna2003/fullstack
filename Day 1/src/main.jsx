import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store, { persistor } from './redux/Store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={false} persistor={persistor}>    <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
)
