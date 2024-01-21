import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { AppOutletContext } from '@/common/hooks/useAppOutletContext'
import { useLogoutMutation, useMeQuery } from '@/features/auth'
import { Header } from '@/layout/Header'

import s from './MainLayout.module.scss'

type Props = Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const MainLayout = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const [logout, {}] = useLogoutMutation()

  const { data, isError, isLoading } = useMeQuery()

  const isAuth = !isError

  if (isLoading) {
    return <div>loading layout</div>
  }

  return (
    <div ref={ref} {...props}>
      <Header
        data={
          data && {
            avatar: data.avatar,
            email: data.email,
            username: data.name,
          }
        }
        isAuth={isAuth}
        logout={logout}
      />
      <main className={s.main}>
        <Outlet context={{ isAuth } satisfies AppOutletContext} />
      </main>
    </div>
  )
})
