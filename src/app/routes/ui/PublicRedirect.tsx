import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export const PublicRedirect = () => {
  const isAuth = useOutletContext()

  return isAuth ? <Navigate to="/" /> : <Outlet />
}
