import { IconProps } from "@core/types/components";


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
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
      </svg>
    </i>
  )
}
