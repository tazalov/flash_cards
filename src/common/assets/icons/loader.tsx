import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  { height, width, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    height={height}
    viewBox="0 0 100 100"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    ref={ref}
  >
    <circle cx="84" cy="50" fill="#bea6ff" r="10">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="0.5s"
        keySplines="0 0.5 0.5 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="15;0"
      ></animate>
      <animate
        attributeName="fill"
        begin="0s"
        calcMode="discrete"
        dur="2s"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="#bea6ff;#382766;#704ecc;#a280ff;#bea6ff"
      ></animate>
    </circle>
    <circle cx="16" cy="50" fill="#bea6ff" r="10">
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;15;15;15"
      ></animate>
      <animate
        attributeName="cx"
        begin="0s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="50" cy="50" fill="#a280ff" r="10">
      <animate
        attributeName="r"
        begin="-0.5s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;15;15;15"
      ></animate>
      <animate
        attributeName="cx"
        begin="-0.5s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="84" cy="50" fill="#704ecc" r="10">
      <animate
        attributeName="r"
        begin="-1s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;15;15;15"
      ></animate>
      <animate
        attributeName="cx"
        begin="-1s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
    <circle cx="16" cy="50" fill="#382766" r="10">
      <animate
        attributeName="r"
        begin="-1.5s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="0;0;15;15;15"
      ></animate>
      <animate
        attributeName="cx"
        begin="-1.5s"
        calcMode="spline"
        dur="2s"
        keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
        keyTimes="0;0.25;0.5;0.75;1"
        repeatCount="indefinite"
        values="16;16;16;50;84"
      ></animate>
    </circle>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
