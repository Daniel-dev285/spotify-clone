import { type PlaylistProps } from '../SidebarCard/SidebarCard'
import { CardPlayButton } from '@components/molecules/CardPlayButton'
import { useCardPlayButton } from '@/hooks/useCardPlayButton'
import { AddToFav } from '@/components/atoms/Icon/AddToFav'

export function ActionBar({playlist}: PlaylistProps) {
    const {isPlayingPlaylist: isPlaying, handleClick} = useCardPlayButton(playlist?.id)
    return (
        <div 
        style={{ background: `linear-gradient(to bottom, ${playlist?.color.transparent}, #12121200)` }} 
        className='flex items-center gap-5 p-5'>
            <CardPlayButton 
            isPlaying={isPlaying}
            onClick={handleClick}
            />
            <button className='flex bg-transparent cursor-pointer '>
                <AddToFav className='size-8 fill-secondary-foreground'/>
            </button>
        </div>
    )
}
