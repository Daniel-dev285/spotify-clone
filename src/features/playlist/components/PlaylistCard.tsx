import { type Playlist } from '@/lib/types'
import { Button } from '@/components/ui/atoms/Button'
import { useCardPlayButton } from '../hooks/useCardPlayButton'
import { green } from '@components/styles/ButtonStyles'
import { motion } from 'framer-motion'
import { PauseIco } from '@/components/ui/atoms/Icons/PauseIco'
import { PlayBtnLogo } from '@/components/ui/atoms/Icons/PlayBtnIco'

interface Props {
    playlist: Playlist
    onClick: (playlistId: string) => void
}

export function PlaylistCard({ playlist, onClick }: Props) {
    const { isPlayingPlaylist: isPlaying, handlePlayPause } = useCardPlayButton(playlist?.id)

    return (
        <motion.div
            onClick={() => onClick(playlist.id)}
            className='flex flex-col gap-1.5 p-3 cursor-pointer relative group hover:bg-primary rounded-sm  transition-all'
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >

            <motion.picture
                className='size-40 relative'
                layoutId={`playlist-image-${playlist.id}`}
            >
                <Button
                    onClick={handlePlayPause}
                    className={`${green} ${isPlaying ? 'active:opacity-100 -translate-y-1.25 ' : ' opacity-0'}`}
                    size='lg'
                    icon={isPlaying ? <PauseIco /> : <PlayBtnLogo />}
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