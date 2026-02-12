import { Slider } from '@/components/ui/atoms/Slider'
import { useVolume } from '../hooks/useVolume'
import { type RefObject } from 'react'
import { Button } from '@/components/ui/atoms/Button'
import { MuteIco, VolumeIco } from '@/components/ui/atoms/Icons/VolumeIco'

interface Props {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerVolume({ audioRef }: Props) {
    const { isMuted, volume, toggleMute, setAudioVolume } = useVolume(audioRef)

    const Icon = isMuted ? MuteIco : VolumeIco

    return (
        <div className='flex items-center justify-end w-full'>
            <div className='flex items-center group'>
                <Button
                    onClick={toggleMute}
                    className='p-2 group-first: fill-icon-2 hover:fill-icon-1 hover:scale-105 transition-all'>
                    {<Icon className='size-4.5' />}
                </Button>
                <Slider
                    value={[volume]}
                    min={0}
                    max={100}
                    className={"w-25"}
                    onValueChange={([value]) => setAudioVolume(value)}
                />
            </div>
        </div>
    )
}