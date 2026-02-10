import { Slider } from "@/components/ui/atoms/slider";
import { Time } from "@/components/ui/atoms/Time";
import { useSongProgress } from "@/features/player/hooks/useSongProgress";
import { type RefObject } from "react";

interface Props {
    audioRef: RefObject<HTMLAudioElement>
}

export function SongProgress({ audioRef }: Props) {
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