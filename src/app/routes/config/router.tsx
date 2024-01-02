import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layout/MainLayout'
import { CardsList } from '@/pages/CardsList'
import { DecksList } from '@/pages/DecksList'

import { ProtectedAuth } from '../ui/ProtectedAuth'

const publicRoutes: RouteObject[] = []

const privateRoutes: RouteObject[] = [
  { element: <DecksList />, path: '/' },
  { element: <CardsList />, path: '/:deckId/cards' },
]

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
