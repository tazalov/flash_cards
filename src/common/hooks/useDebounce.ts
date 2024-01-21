import { useEffect, useState } from 'react'
export const useDebounce = <T>(value: T, debounceTimeout: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, debounceTimeout)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, debounceTimeout])

  return debouncedValue
}
