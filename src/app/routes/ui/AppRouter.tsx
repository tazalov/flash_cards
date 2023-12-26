import { RouterProvider } from 'react-router-dom'

import { router } from '../config/router'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
