import { Page } from '@/common/ui/Page'
import { useMeQuery } from '@/features/auth'
import { PersonalInformation, useUpdateProfileMutation } from '@/features/profile'

export const Profile = () => {
  const { data } = useMeQuery()

  const [updateProfile, {}] = useUpdateProfileMutation()

  return (
    <Page>
      <PersonalInformation
        data={
          data && {
            avatar: data.avatar,
            email: data.email,
            username: data.name,
          }
        }
        handleLogout={() => console.log('logout')}
        handleUpdate={updateProfile}
      />
    </Page>
  )
}
