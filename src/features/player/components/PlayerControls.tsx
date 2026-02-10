import { type RefObject } from 'react'
import { PrevBtn } from '@/components/ui/atoms/PrevBtn';
import { NextBtn } from '@/components/ui/atoms/NextBtn';
import { PlayPauseBtn } from '@/components/ui/atoms/PlayPauseBtn';
import { NextPrevStyle } from '@/styles/NextPrevStyle';
import { whitePlayPause } from '@/styles/PlayPauseStyle';
import { usePlayerControls } from '../hooks/usePlayerControls'
import { useAudioSync } from '../hooks/useAudioSync'
import { SongProgress } from './SongProgress'


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
    } = usePlayerControls(audioRef)

    useAudioSync({currentPlaylist, currentSongIndex, isPlaying, audioRef})

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='mb-2 flex gap-4'>
                <PrevBtn
                prevSong={prevSong}
                className={NextPrevStyle} />

                <PlayPauseBtn 
                isPlaying={isPlaying}
                onClick={togglePlayPause}
                className={whitePlayPause}
                icoSize='md'/>

                <NextBtn
                nextSong={nextSong}
                className={NextPrevStyle}  />
            </div>
            <SongProgress audioRef={audioRef} />
        </div>
    )
}