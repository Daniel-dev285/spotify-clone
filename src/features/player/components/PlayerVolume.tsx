import { VolumeIco, MuteIco } from '@/Icons/VolumeIco'
import { Slider } from '@/components/ui/atoms/slider'
import { useVolume } from '../hooks/useVolume'
import { type RefObject } from 'react'

interface Props {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerVolume({ audioRef }: Props) {
    const {isMuted, volume, toggleMute, setAudioVolume} = useVolume(audioRef)

    const Icon = isMuted ? MuteIco: VolumeIco 


    return (
        <div className='flex items-center group justify-end w-full'>
            <button onClick={toggleMute} className='cursor-pointer w-8 p-1.5 flex justify-center fill-icon-2 hover:fill-icon-1 hover:scale-105 transition-all'>
                {<Icon className='size-4.5'/>}
            </button>
            <div className='h-7 flex'>
                <Slider
                    value={[volume]}
                    min={0}
                    max={100}
                    className="w-25"
                    onValueChange={([value]) => setAudioVolume(value)}
                />
            </div>
        </div>
    )
}