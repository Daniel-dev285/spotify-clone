import { PlayBtnLogo } from '@/Icons/PlayBtnIco'
import { PauseIco } from '@/Icons/PauseIco'

const ICON_SIZES: Record<string, string> = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
}

interface Props {
    isPlaying: boolean
    className?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    icoSize: string
}

export function PlayPauseBtn({ 
    isPlaying, 
    onClick, 
    className = '', 
    icoSize = 'md'
}: Props) {
    
    const sizeClass = ICON_SIZES[icoSize]

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center cursor-pointer ${className}`}>
            {isPlaying 
            ? <PauseIco className={sizeClass}/> 
            : <PlayBtnLogo className={sizeClass}/>}
        </button>
    )
}