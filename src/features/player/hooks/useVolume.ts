import { useState, useEffect, useRef } from "react"

import { type RefObject } from "react"

export function useVolume(audioRef: RefObject<HTMLAudioElement>) {
    const [volume, setVolume] = useState(100)
    const [isMuted, setIsMuted] = useState(false)

    const lastVolumeRef = useRef(100)

    // Inicializa el volumen del audio
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
        }
    }, [])

    const toggleMute = () => {
        setIsMuted(prev => !prev)
        if (isMuted) {
            if (lastVolumeRef.current === 0) {
                lastVolumeRef.current = 1
            }
            setVolume(lastVolumeRef.current)
            audioRef.current.volume = lastVolumeRef.current / 100
        } else {
            setVolume(0)
            audioRef.current.volume = 0
        }
    }

    const setAudioVolume = (volume: number) => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
            lastVolumeRef.current = volume
            setVolume(volume)
            setIsMuted(volume === 0)
        }
    }

    return {
        isMuted,
        volume,
        toggleMute,
        setAudioVolume
    }
}