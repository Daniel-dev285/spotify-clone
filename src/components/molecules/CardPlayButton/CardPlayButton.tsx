import { PlayBtnLogo } from '@/components/atoms/Icon/PlayBtnIco'
import { PauseIco } from '@/components/atoms/Icon/PauseIco'
import { Button } from '@/components/atoms/Button'

interface Props {
    isPlaying: boolean
    className?: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function CardPlayButton({ isPlaying, onClick, className = ''}: Props) {
    return (
        <Button
            onClick={onClick}
            className={`bg-button-background rounded-full flex items-center justify-center size-13  group-hover:opacity-100 group-hover:-translate-y-1.25 transition-all hover:scale-105 hover:bg-green-400 cursor-pointer ${className}`}>
            {isPlaying ? <PauseIco className='size-7' /> : <PlayBtnLogo className='size-8'/>}
        </Button>
    )
}