import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {Store , persistor} from './redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <PersistGate loading="loading" persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode >
    </PersistGate>
  </Provider>,
)
