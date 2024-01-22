import { useNavigate } from 'react-router-dom'

import Error404 from '@/common/assets/images/404.png'
import { Button } from '@/common/ui/Button'

import s from './NotFound.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={s.root}>
      <img alt="404" className={s.img} src={Error404} />
      <div className={s.buttons}>
        <Button onClick={() => navigate('/')}>To main</Button>
        <Button onClick={() => navigate(-1)}>To previous page</Button>
      </div>
    </div>
  )
}
