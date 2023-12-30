import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { ProtectedAuth } from '@/app/routes/ui/ProtectedAuth'
import { MainLayout } from '@/layout/MainLayout'
import { DecksList } from '@/pages/Decks/DecksList'

const publicRoutes: RouteObject[] = []

const privateRoutes: RouteObject[] = [{ element: <DecksList />, path: '/' }]

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
