import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/common/ui/Button'

export const LangSwitcher = memo(() => {
  const { i18n, t } = useTranslation()

  const toggleLanguage = async () => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')

  return <Button onClick={toggleLanguage}>{t('Lang')}</Button>
})
