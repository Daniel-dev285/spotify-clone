import { type RefObject } from "react";
import { usePlayerStore, type PlayerStore } from "../store/playerStore";

export function usePlayerControls() {
    const { isPlaying,
        setIsPlaying,
        currentPlaylist,
        currentSongIndex,
        setCurrentSongIndex
    } = usePlayerStore(state => state) as PlayerStore

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const prevSong = () => {
        if (!currentPlaylist) return

        setCurrentSongIndex(
            currentSongIndex === 0
                ? currentPlaylist.songs.length - 1
                : currentSongIndex - 1
        )
        setIsPlaying(true)

    }

    const nextSong = () => {
        if (!currentPlaylist) return

        setCurrentSongIndex(
            currentSongIndex === currentPlaylist.songs.length - 1
                ? 0
                : currentSongIndex + 1
        )
        setIsPlaying(true)
    }


    return {
        isPlaying,
        currentPlaylist,
        currentSongIndex,
        togglePlayPause,
        nextSong,
        prevSong
    }
}