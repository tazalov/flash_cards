import { z } from 'zod'

export const ALLOWED_IMAGES_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
export const MAX_SIZE_IMAGE = 1000000

export const COVER_SCHEMA = z
  .instanceof(File)
  .refine(
    file => file.size <= MAX_SIZE_IMAGE,
    `Max image size is 1MB. The file will not be uploaded.`
  )
  .refine(
    file => ALLOWED_IMAGES_FORMATS.includes(file.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
  )

export const ON_SUBMIT_SB = () => Promise.resolve({ error: null, fieldErrors: null })
