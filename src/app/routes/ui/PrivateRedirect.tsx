import { Navigate, Outlet, useOutletContext } from 'react-router-dom'

export const PrivateRedirect = () => {
  const isAuth = useOutletContext()

  return isAuth ? <Outlet /> : <Navigate to="/sign-in" />
}
