import { PlayBtnLogo } from '../../icons/PlayBtnIco'
import { PauseIco } from '../../icons/PauseIco'
import { usePlayerStore } from '../../store/playerStore'
import { type PlayerStore } from '../../store/playerStore'
import { playlists } from '../../lib/data'

interface Props {
    id: string | undefined
}

export function CardPlayButton({ id }: Props) {
    const { isPlaying,
        currentPlaylist,
        setIsPlaying,
        setCurrentPlaylist,} = usePlayerStore(state => state) as PlayerStore

    const playlist = playlists.find(playlist => playlist.id === id)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (currentPlaylist?.id !== id) {
            if (playlist) {
                setCurrentPlaylist(playlist)
                setIsPlaying(true)
                e.stopPropagation()
            }
        } else {
            if (playlist) {
                setCurrentPlaylist(playlist)
                setIsPlaying(!isPlaying)
                e.stopPropagation()
            }
        }
    }

    const isPlayingPlaylist = isPlaying && currentPlaylist?.id === id

    return (
        <button
            onClick={handleClick}
            className={`${isPlayingPlaylist ? 'active:opacity-100 -translate-y-1.25 ' : ' opacity-0'}
            bg-button-background rounded-full flex items-center justify-center w-13 h-13 absolute bottom-15 right-5 group-hover:opacity-100 group-hover:-translate-y-1.25 transition-all hover:scale-105 hover:bg-green-400 cursor-pointer `}>
            {isPlayingPlaylist ? <PauseIco className='w-7' /> : <PlayBtnLogo className='w-8' />}
        </button>
    )
}