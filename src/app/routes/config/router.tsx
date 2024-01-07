import { RouteObject, createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layout/MainLayout'
import { CreateNewPassword } from '@/pages/Auth/CreateNewPassword'
import { ForgotPassword } from '@/pages/Auth/ForgotPassword'
import { SignIn } from '@/pages/Auth/SignIn'
import { SignUp } from '@/pages/Auth/SignUp'
import { CardsList } from '@/pages/CardsList'
import { DecksList } from '@/pages/DecksList'

import { PrivateRedirect } from '../ui/PrivateRedirect'
import { PublicRedirect } from '../ui/PublicRedirect'

const publicRoutes: RouteObject[] = [
  { element: <SignIn />, path: '/sign-in' },
  { element: <SignUp />, path: '/sign-up' },
  { element: <ForgotPassword />, path: '/forgot-password' },
  { element: <CreateNewPassword />, path: '/create-new-password/:token' },
]

const privateRoutes: RouteObject[] = [
  { element: <DecksList />, path: '/' },
  { element: <CardsList />, path: '/:deckId/cards' },
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
