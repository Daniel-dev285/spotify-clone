import { Slider } from "../Slider/slider";
import { useEffect, type RefObject, useState } from "react";

interface SongProgressProps {
    audioRef: RefObject<HTMLAudioElement>
}

export function SongProgress({ audioRef }: SongProgressProps) {
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', updateTime)
        return () => audioRef.current?.removeEventListener('timeupdate', updateTime)
    }, [])

    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const formatTime = (seconds: number) => {
        if (seconds) {
            let minutes = Math.floor(seconds / 60)
            let secs = Math.floor(seconds % 60)
            return `${minutes}:${secs < 10 ? 0 : ""}${secs}`
        } else {
            return "0:00"
        }
    }

    return (
        <div className='flex items-center gap-2.5 h-5'>
            <span className='text-xs opacity-60 select-none w-6'>{formatTime(audioRef.current?.currentTime)}</span>
            <Slider
                defaultValue={[0]}
                max={audioRef.current?.duration}
                min={0}
                value={[currentTime]}
                className="w-100 cursor-pointer h-5"
                onValueChange={(value) => {
                    const [time] = value
                    audioRef.current.currentTime = time
                }} />
            <span className='text-xs opacity-60 select-none w-6'>
                {formatTime(audioRef.current?.duration)}
            </span>
        </div>);
}