import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonVariant } from '@/common/enums'
import { Button } from '@/common/ui/Button'

import s from './LangSwitcher.module.scss'

export const LangSwitcher = memo(() => {
  const { i18n, t } = useTranslation()

  const toggleLanguage = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

  return (
    <Button className={s.switcher} onClick={toggleLanguage} variant={ButtonVariant.link}>
      {t('Lang')}
    </Button>
  )
})
