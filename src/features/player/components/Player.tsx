import { useRef, type RefObject } from 'react'
import { PlayerSongCard } from './PlayerSongCard'
import { PlayerVolume } from './PlayerVolume'
import { PlayerControls } from './PlayerControls'

export function Player() {
    const audioRef = useRef<HTMLAudioElement>(null) as RefObject<HTMLAudioElement>

    return (
        <div className='flex justify-between p-1.5'>
            <audio ref={audioRef} ></audio>
            <PlayerSongCard />
            <PlayerControls audioRef={audioRef} />
            <PlayerVolume audioRef={audioRef} />
        </div>
    )
}