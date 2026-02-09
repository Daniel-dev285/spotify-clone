import { Slider } from "@/components/ui/Slider/slider";
import { Time } from "@/components/ui/Time";
import { useSongProgress } from "@/features/player/hooks/useSongProgress";
import { type RefObject } from "react";

interface SongProgressProps {
    audioRef: RefObject<HTMLAudioElement>
}

export function SongProgress({ audioRef }: SongProgressProps) {
    const {currentTime, duration, seek} = useSongProgress(audioRef)

    return (
        <div className='flex items-center gap-2.5 h-5'>
            <Time value={currentTime}/>
            <Slider
                max={duration}
                min={0}
                value={[currentTime]}
                className="w-100 cursor-pointer h-5"
                onValueChange={([time]) => seek(time)}/>
            <Time value={duration}/>
        </div>);
}