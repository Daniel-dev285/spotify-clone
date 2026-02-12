import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type IconSize = 'sm' | 'md' | 'lg'

const ICON_SIZES: Record<IconSize, string> = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  size?: IconSize
}

export function Button({
  icon,
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const sizeClass = ICON_SIZES[size]

  return (
    <button
      {...props}
      className={`flex items-center justify-center cursor-pointer ${className}`}
    >
      {icon && <span className={sizeClass}>{icon}</span>}
      {children}
    </button>
  )
}
