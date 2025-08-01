import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store.ts'
import App from './App.tsx'
import './i18next/i18next.ts'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <React.Suspense fallback="Loading">
        <App />
      </React.Suspense>
    </PersistGate>
  </Provider>
)
