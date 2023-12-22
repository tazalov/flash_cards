import checkEmail from '@/common/assets/images/checkEmail.svg'
import { TypographyVariant } from '@/common/enums'
import { Avatar } from '@/common/ui/Avatar'
import { Button } from '@/common/ui/Button'
import { Card } from '@/common/ui/Card'
import { Typography } from '@/common/ui/Typography'
import cn from 'classnames'

import s from './CheckEmail.module.scss'

interface Props {
  className?: string
  email: string
}
export const CheckEmail = ({ className, email }: Props) => {
  return (
    <Card className={cn(s.form, className)}>
      <Typography as="h2" className={s.headerText} variant={TypographyVariant.large}>
        Check Email
      </Typography>
      <Avatar className={s.image} src={checkEmail} title="" />
      <Typography
        className={s.descriptionText}
        textAlign="center"
        variant={TypographyVariant.body2}
      >
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button as="a" className={s.signInNav} fullWidth>
        Back to Sign In
      </Button>
    </Card>
  )
}
