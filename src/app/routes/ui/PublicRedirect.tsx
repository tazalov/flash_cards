import { Navigate, Outlet } from 'react-router-dom'

import { useAppOutletContext } from '@/common/hooks/useAppOutletContext'

export const PublicRedirect = () => {
  const isAuth = useAppOutletContext()

  return isAuth ? <Navigate to="/" /> : <Outlet />
}
