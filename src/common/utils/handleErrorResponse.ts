import { toast } from 'react-toastify'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface FieldError {
  field: string
  message: string
}

interface ErrorData {
  errorMessages?: FieldError[]
  message?: string
}

export interface CatchingData {
  error: null | string
  fieldErrors: FieldError[] | null
}

//TODO JSDOC

export const handleErrorResponse = (
  error?: FetchBaseQueryError | SerializedError
): CatchingData | undefined => {
  if (!error) {
    return
  }

  switch (true) {
    case 'error' in error: {
      const errorMsg = `${error.status} - ${error.error}`

      toast.error(errorMsg)

      return {
        error: errorMsg,
        fieldErrors: null,
      }
    }
    case 'message' in error: {
      const errorMsg =
        `${error.code} - Serialized error:` + (error.message || 'error message was not received')

      toast.error(errorMsg)

      return {
        error: errorMsg,
        fieldErrors: null,
      }
    }
    case 'data' in error: {
      const errorData = error.data as ErrorData

      const errorMsg = `${error.status} - ${errorData.message || 'Request error'}`

      if (error.status !== 400) {
        toast.error(errorMsg)
      }

      return {
        error: errorMsg,
        fieldErrors: errorData.errorMessages || null,
      }
    }
    default: {
      const errorMsg = 'Unknown error: error message and status error was not received'

      toast.error(errorMsg)

      return {
        error: 'Unknown error: error message and status error was not received',
        fieldErrors: null,
      }
    }
  }
}
