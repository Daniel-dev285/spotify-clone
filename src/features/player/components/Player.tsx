import { useRef, type RefObject } from 'react'
import { PlayerSongCard } from './PlayerSongCard'
import { PlayerVolume } from './PlayerVolume'
import { PlayerControls } from './PlayerControls'

export function Player() {
    const audioRef = useRef<HTMLAudioElement>(null) as RefObject<HTMLAudioElement>
    
    return (
        <div className='flex justify-between p-1.5'>
            <div className='w-full flex items-center justify-start '>
                <PlayerSongCard />
            </div>
            <div className='flex items-center justify-center'>
                <PlayerControls audioRef={audioRef} />
            </div>
            <div className='flex items-center justify-end w-full'>
                <PlayerVolume audioRef={audioRef} />
            </div>
            
        </div>
    )
}