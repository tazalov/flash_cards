import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { ProtectedAuth } from '@/app/routes/ui/ProtectedAuth'
import { MainLayout } from '@/layout/MainLayout'

const publicRoutes: RouteObject[] = []

const privateRoutes: RouteObject[] = []

const appRoutes: RouteObject[] = [
  {
    children: privateRoutes,
    element: <ProtectedAuth />,
  },
  ...publicRoutes,
]

export const router = createBrowserRouter([
  {
    children: appRoutes,
    element: <MainLayout />,
  },
])
