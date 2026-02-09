import { type RefObject } from 'react'
import { usePlayerControls } from '../hooks/usePlayerControls'
import { PlayBtnLogo } from '@/Icon/PlayBtnIco'
import { NextSongLogo } from '@/Icon/NextSongLogo'
import { PrevSongIco } from '@/Icon/PrevSongIco'
import { PauseIco } from '@/Icon/PauseIco'
import { SongProgress } from './SongProgress'
import { useAudioSync } from '../hooks/useAudioSync'

interface PlayerControlsProps {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerControls({ audioRef }: PlayerControlsProps) {
    const { isPlaying,
        currentPlaylist,
        currentSongIndex,
        togglePlayPause,
        nextSong,
        prevSong
    } = usePlayerControls(audioRef)

    useAudioSync({currentPlaylist, currentSongIndex, isPlaying, audioRef})


    return (
        <div className='flex flex-col'>
            <div className='mb-2 flex items-center justify-center gap-4'>
                <button
                    onClick={prevSong}
                    className='bg-transparent flex items-center justify-center w-8 h-8 cursor-pointer fill-icon-2 p-2 hover:scale-105 hover:fill-icon-1 transition-all active:opacity-40'>
                    <PrevSongIco className='' />
                </button>
                <button onClick={togglePlayPause} className='bg-background flex items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:scale-105 transition-transform  active:scale-100 active:opacity-80'>
                    {isPlaying
                        ? <PauseIco className='fill-icon-black w-5 stroke-icon-black' />
                        : <PlayBtnLogo className='fill-icon-black w-6 stroke-icon-black' />
                    }
                </button>
                <button onClick={nextSong}
                    className='bg-transparent flex items-center justify-center w-8 h-8 cursor-pointer fill-icon-2 p-2 hover:scale-105 hover:fill-icon-1 transition-all active:opacity-40'>
                    <NextSongLogo />
                </button>
            </div>
            <audio ref={audioRef} ></audio>
            <SongProgress audioRef={audioRef} />
        </div>
    )
}