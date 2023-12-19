import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    height={18}
    ref={ref}
    viewBox="0 0 24 24"
    width={18}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6h1Zm13.82 5.42-2.82-4a1 1 0 1 0-1.63 1.16L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 1.6 1.2l3-4a1 1 0 0 0 .02-1.18Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
