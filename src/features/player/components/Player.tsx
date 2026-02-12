import { useRef, type RefObject } from 'react'
import { PlayerBarUI } from '@/components/ui/organisms/PlayerBarUI'
import { PlayerSongCard } from './PlayerSongCard'
import { PlayerVolume } from './PlayerVolume'
import { PlayerControls } from './PlayerControls'

export function Player() {
    const audioRef = useRef<HTMLAudioElement>(null) as RefObject<HTMLAudioElement>
    
    return (
        <PlayerBarUI 
            left={<PlayerSongCard />}
            center={<PlayerControls audioRef={audioRef} />}
            right={<PlayerVolume audioRef={audioRef} />}
            >
            <audio ref={audioRef} ></audio>
        </PlayerBarUI>
    )
}