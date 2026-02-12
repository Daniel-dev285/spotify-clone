import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ActionBarUIProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function ActionBarUI({
  children,
  className,
  style,
}: ActionBarUIProps) {
  return (
    <div
      style={style}
      className={cn(
        'flex items-center gap-5 p-5',
        className
      )}
    >
      {children}
    </div>
  )
}
