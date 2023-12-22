import { ElementRef, ElementType, Ref } from 'react'

export interface PolymorphRef<T extends ElementType> {
  ref?: Ref<ElementRef<T>>
}

export interface ProfileData {
  avatar?: string
  email: string
  username: string
}
