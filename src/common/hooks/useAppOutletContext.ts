import { useOutletContext } from 'react-router-dom'

export interface AppOutletContext {
  isAuth: boolean
}

export const useAppOutletContext = () => {
  return useOutletContext<AppOutletContext>()
}
