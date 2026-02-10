import { type PlaylistProps } from '@/lib/types'
import { PlayPauseBtn } from '@/components/ui/atoms/PlayPauseBtn'
import { useCardPlayButton } from '@/features/playlist/hooks/useCardPlayButton'
import { AddToFav } from '@/Icons/AddToFav'

export function ActionBar({playlist}: PlaylistProps) {
    const {isPlayingPlaylist: isPlaying, handlePlayPause} = useCardPlayButton(playlist?.id)
    return (
        <div 
        style={{ background: `linear-gradient(to bottom, ${playlist?.color.transparent}, #12121200)` }} 
        className='flex items-center gap-5 p-5'>
            <PlayPauseBtn
            isPlaying={isPlaying}
            onClick={handlePlayPause}
            className={`bg-button-background rounded-full size-13 transition-all hover:scale-105 hover:bg-green-400`}
            icoSize='lg'
            />
            <button className='flex bg-transparent cursor-pointer '>
                <AddToFav className='size-8 fill-secondary-foreground'/>
            </button>
        </div>
    )
}
