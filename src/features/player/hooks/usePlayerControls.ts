import { useEffect, type RefObject } from "react";
import { usePlayerStore, type PlayerStore } from "../store/playerStore";

export function usePlayerControls(audioRef: RefObject<HTMLAudioElement>) {
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

    useEffect(() => {
        if (!currentPlaylist) return

        const song = currentPlaylist.songs[currentSongIndex]
        if (!song || !audioRef.current) return

        const src = `/audio/${currentPlaylist.id}/0${song.id}.mp3`
        audioRef.current.src = src
        audioRef.current.play()

    }, [currentPlaylist, currentSongIndex])

    useEffect(() => {
        if (isPlaying && currentPlaylist) {
            audioRef.current?.play()
        }
        else {
            audioRef.current?.pause()
        }
    }, [isPlaying])


    return {
        isPlaying,
        currentPlaylist,
        currentSongIndex,
        togglePlayPause,
        nextSong,
        prevSong
    }
}