import { type ReactNode } from "react"

interface Props {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    className?: string
    children: ReactNode
}

export function Button({onClick, className, children}: Props) {
  return (
    <button 
    onClick={onClick}
    className={className}>
        {children}
    </button>
  )
}

