import type { IconProps } from '@core/types/components'

export default function GridAltIcon({
  className = 'icon',
  size = 24,
  color = 'currentColor',
}: IconProps) {
  return (
    <i className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{ fill: color }}
      >
        <path d="M5 11h14v2H5z"></path>
      </svg>
    </i>
  )
}
