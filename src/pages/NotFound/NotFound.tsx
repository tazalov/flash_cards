import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Error404 from '@/common/assets/images/404.png'
import { BackToPreviousPage } from '@/common/ui/BackToPreviusPage'
import { Button } from '@/common/ui/Button'

import s from './NotFound.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()

  const { t } = useTranslation()

  return (
    <div className={s.root}>
      <img alt="404" className={s.img} src={Error404} />
      <div className={s.buttons}>
        <BackToPreviousPage as={Button} handleNavigate={() => navigate('/')} title={t('To main')} />
        <BackToPreviousPage
          as={Button}
          handleNavigate={() => navigate(-1)}
          title={t('To previous page')}
        />
      </div>
    </div>
  )
}
