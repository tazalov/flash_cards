import iconsSprite from '@/common/assets/sprites/sprite.svg'

type IconPT = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, iconId, viewBox, width }: IconPT) => {
  return (
    <svg
      className={className}
      height={height || '50'}
      viewBox={viewBox || '0 0 50 50'}
      width={width || '50'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
