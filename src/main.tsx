import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from '@/app/routes'
import { store } from '@/app/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
)
