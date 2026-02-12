import { type RefObject } from 'react'
import { white, transparent } from '@components/styles/ButtonStyles'
import { Button } from '@/components/ui/atoms/Button';
import { usePlayerControls } from '../hooks/usePlayerControls'
import { useAudioSync } from '../hooks/useAudioSync'
import { SongProgress } from './SongProgress'
import { PrevSongIco } from '@/components/ui/atoms/Icons/PrevSongIco';
import { NextSongLogo } from '@/components/ui/atoms/Icons/NextSongLogo';
import { PauseIco } from '@/components/ui/atoms/Icons/PauseIco';
import { PlayBtnLogo } from '@/components/ui/atoms/Icons/PlayBtnIco';


interface Props {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerControls({ audioRef }: Props) {
    const { isPlaying,
        currentPlaylist,
        currentSongIndex,
        togglePlayPause,
        nextSong,
        prevSong
    } = usePlayerControls()

    useAudioSync({currentPlaylist, currentSongIndex, isPlaying, audioRef})

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mb-2 flex gap-4'>
                <Button
                onClick={prevSong}
                className={transparent}
                size='sm'
                icon={<PrevSongIco/>}
                 />

                <Button 
                onClick={togglePlayPause}
                className={white}
                size='md'
                icon={isPlaying ? <PauseIco/> : <PlayBtnLogo/>}
                />

                <Button
                onClick={nextSong}
                className={transparent} 
                size='sm' 
                icon={<NextSongLogo/>}
                />
            </div>
            <SongProgress audioRef={audioRef} />
        </div>
    )
}