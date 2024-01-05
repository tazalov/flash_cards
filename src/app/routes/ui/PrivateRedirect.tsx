import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/common/hooks/useAppOutletContext'

export const PrivateRedirect = () => {
  const isAuth = useAppOutletContext()

  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />
}
