import { type ReactNode } from "react"

interface Props {
    left?: ReactNode
    center?: ReactNode
    right?: ReactNode
    children?: ReactNode
}

export function PlayerBarUI({
    left, 
    center, 
    right,
    children
}: Props) {
    return (
        <div className='flex  justify-between p-1.5'>
            {left}
            {center}
            {right}
            {children}
        </div>
    )
}