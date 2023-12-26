import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/layout/Header'

import s from './MainLayout.module.scss'

type Props = Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export const MainLayout = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  return (
    <div ref={ref} {...props}>
      <Header isAuth={false} logout={() => {}} />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  )
})
