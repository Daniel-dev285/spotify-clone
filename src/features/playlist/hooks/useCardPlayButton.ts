import { usePlayerStore } from '@/features/player/store/playerStore'
import { type PlayerStore } from '@/features/player/store/playerStore'
import { playlists } from '@/lib/data'

export function useCardPlayButton(id: string) {
    const { isPlaying,
        currentPlaylist,
        setIsPlaying,
        setCurrentPlaylist, } = usePlayerStore(state => state) as PlayerStore

    const playlist = playlists.find(playlist => playlist.id === id)
    
    const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()

        if (!playlist) return 

        if (currentPlaylist?.id !== id) {
            setCurrentPlaylist(playlist)
            setIsPlaying(true)
            return
        } 
        
        setIsPlaying(!isPlaying)
    }

    const isPlayingPlaylist = isPlaying && currentPlaylist?.id === id

    return {
        isPlayingPlaylist,
        handlePlayPause
    }
}