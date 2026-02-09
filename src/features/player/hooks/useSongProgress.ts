import { useEffect, useState, type RefObject } from "react";

export function useSongProgress(audioRef: RefObject<HTMLAudioElement>) {
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateTime = () => setCurrentTime(audio.currentTime)
        const updateDuration = () => setDuration(audio.duration)

        audio.addEventListener('timeupdate', updateTime)
        audio.addEventListener('loadedmetadata', updateDuration)

        return () => {
            audio.removeEventListener('timeupdate', updateTime)
            audio.removeEventListener('loadedmetadata', updateDuration)
        }
    }, [audioRef])

    const seek = (time: number) => {
        if (audioRef.current) audioRef.current.currentTime = time
    }

    return {
        currentTime,
        duration,
        seek
    }

}