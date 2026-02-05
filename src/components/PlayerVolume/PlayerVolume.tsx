import { VolumeIco, MuteIco } from '../../icons/VolumeIco'
import { useEffect, useRef, useState } from 'react'
import { Slider } from '../Slider/slider'
import { type RefObject } from 'react'

interface PlayerVolumeProps {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerVolume({ audioRef }: PlayerVolumeProps) {
    const [volume, setVolume] = useState(100)
    const [isMuted, setIsMuted] = useState(false)
    const Icon = volume > 0 ? VolumeIco : MuteIco

    const lastVolumeRef = useRef(100)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
        }
    }, [])

    const mute = () => {
        setIsMuted(prev => !prev)
        if (isMuted) {
            if (lastVolumeRef.current === 0){
                lastVolumeRef.current = 1
            }
            setVolume(lastVolumeRef.current)    
            audioRef.current.volume = lastVolumeRef.current / 100
        } else {
            setVolume(0)
            audioRef.current.volume = 0
        }

    }

    return (
        <div className='flex h-8 group'>
            <button onClick={mute} className='cursor-pointer w-8 p-1.5 flex justify-center fill-icon-2 hover:fill-icon-1 hover:scale-105 transition-all'>
                {<Icon className=' w-4.5' />}
            </button>

            <Slider
                value={[volume]}
                min={0}
                max={100}
                className="w-25"
                onValueChange={(value) => {
                    const [newVolume] = value
                    if (audioRef.current) {
                        audioRef.current.volume = newVolume / 100
                        lastVolumeRef.current = newVolume
                        setVolume(newVolume)
                        setIsMuted(newVolume === 0)
                    }

                }}
            />
        </div>
    )
}