import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedAuth = () => {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
