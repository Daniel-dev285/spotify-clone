import { type PlaylistProps } from '@/lib/types'
import { Button } from '@/components/ui/atoms/Button'
import { AddToFav } from '@/components/ui/atoms/Icons/AddToFav'
import { PauseIco } from '@/components/ui/atoms/Icons/PauseIco'
import { PlayBtnLogo } from '@/components/ui/atoms/Icons/PlayBtnIco'
import { ActionBarUI } from '@/components/ui/molecules/ActionBarUI'
import { useCardPlayButton } from '../hooks/useCardPlayButton'

export function ActionBar({ playlist }: PlaylistProps) {
    const { isPlayingPlaylist: isPlaying, handlePlayPause } = useCardPlayButton(playlist?.id)

    return (
        <ActionBarUI
            style={{ 
                background: `linear-gradient(
                to bottom,
                ${playlist?.color.transparent},
                #12121200)
                `}}
            >
            <Button
                onClick={handlePlayPause}
                className={"bg-button-background rounded-full size-13 transition-all hover:scale-105 hover:bg-green-400"}
                size='lg'
                icon={isPlaying 
                    ? <PauseIco /> 
                    : <PlayBtnLogo />}
            />
            <Button 
            size='lg'
            icon={<AddToFav className='fill-secondary-foreground' />}
            className='bg-transparent transition-transform hover:scale-105'>
            </Button>
        </ActionBarUI>
    )
}
