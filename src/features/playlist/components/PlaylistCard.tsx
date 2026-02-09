import { type Playlist } from '@/lib/types'
import { CardPlayButton } from '@components/ui/CardPlayButton'
import { useCardPlayButton } from '../hooks/useCardPlayButton'
import { motion } from 'framer-motion'

interface Props {
    playlist: Playlist
    onClick: (playlistId: string) => void
}

export function PlaylistCard({ playlist, onClick }: Props) {
    if (!playlist) return

    const {isPlayingPlaylist: isPlaying, handlePlayPause} = useCardPlayButton(playlist?.id)
    
    return (
        <motion.div
            layoutId={`container-${playlist.id}`}  
            onClick={() => onClick(playlist.id)} 
            className='flex flex-col gap-1.5 p-3 cursor-pointer relative group hover:bg-primary rounded-sm  transition-all'
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
           
            <motion.picture 
                className='size-40 relative'
                layoutId={`playlist-image-${playlist.id}`}
            >
                 <CardPlayButton 
                    isPlaying={isPlaying}
                    onClick={handlePlayPause}
                    className={`bg-button-background rounded-full size-13 group-hover:opacity-100 group-hover:-translate-y-1.25 transition-all hover:bg-green-400  ${isPlaying ? 'active:opacity-100 -translate-y-1.25 ' : ' opacity-0'} absolute bottom-1 right-2`}
                    />
                <img className='w-full h-full object-cover rounded-sm'
                    src={playlist.cover}
                    alt={playlist.title}
                />
            </motion.picture>
            <div className='flex max-w-40 '>
                <span className=' line-clamp-2 overflow-hidden text-ellipsis text-sm opacity-60' >{playlist.artists.join(", ")}</span>
            </div>
        </motion.div>
    )
}