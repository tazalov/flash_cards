import React from 'react'
import { Provider } from 'react-redux'
import { Bounce, ToastContainer } from 'react-toastify'

import { AppRouter } from '@/app/routes'
import { store } from '@/app/store'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable={false}
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover
        position="bottom-left"
        rtl={false}
        theme="dark"
        transition={Bounce}
      />
    </Provider>
  </React.StrictMode>
)
