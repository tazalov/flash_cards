import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layout/MainLayout'
import { SignIn } from '@/pages/Auth/SignIn'
import { CardsList } from '@/pages/CardsList'
import { DecksList } from '@/pages/DecksList'
import { Profile } from '@/pages/Profile'

import { PrivateRedirect } from '../ui/PrivateRedirect'
import { PublicRedirect } from '../ui/PublicRedirect'

const publicRoutes: RouteObject[] = [{ element: <SignIn />, path: '/sign-in' }]

const privateRoutes: RouteObject[] = [
  { element: <DecksList />, path: '/' },
  { element: <CardsList />, path: '/:deckId/cards' },
  { element: <Profile />, path: '/profile' },
]

const appRoutes: RouteObject[] = [
  { children: privateRoutes, element: <PrivateRedirect /> },
  { children: publicRoutes, element: <PublicRedirect /> },
]

export const router = createBrowserRouter([
  {
    children: appRoutes,
    element: <MainLayout />,
  },
])
