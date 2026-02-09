import { useEffect, type RefObject } from "react";
import { type Playlist } from "@/lib/types";

export interface Props {
    audioRef: RefObject<HTMLAudioElement>
    isPlaying: boolean
    currentPlaylist: Playlist | null
    currentSongIndex: number
}

export function useAudioSync({
    audioRef,
    isPlaying,
    currentPlaylist,
    currentSongIndex}: Props) {
    
    // Cambiar cancion
    useEffect(() => {
        if (!currentPlaylist) return

        const song = currentPlaylist.songs[currentSongIndex]
        if (!song || !audioRef.current) return

        const src = `/audio/${currentPlaylist.id}/0${song.id}.mp3`
        audioRef.current.src = src
        audioRef.current.play()

    }, [currentPlaylist, currentSongIndex])

    // Play / Pause
    useEffect(() => {
        if (isPlaying && currentPlaylist) {
            audioRef.current?.play()
        }
        else {
            audioRef.current?.pause()
        }
    }, [isPlaying])

    
    
}