import { PlayBtnLogo } from '@/Icon/PlayBtnIco'
import { PauseIco } from '@/Icon/PauseIco'

interface Props {
    isPlaying: boolean
    className?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function CardPlayButton({ isPlaying, onClick, className = ''}: Props) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center cursor-pointer ${className}`}>
            {isPlaying ? <PauseIco className='size-7' /> : <PlayBtnLogo className='size-8'/>}
        </button>
    )
}