import { useEffect, type RefObject } from 'react'
import { usePlayerStore, type PlayerStore } from '../../store/playerStore'
import { PlayBtnLogo } from '../../icons/PlayBtnIco'
import { NextSongLogo } from '../../icons/NextSongLogo'
import { PrevSongIco } from '../../icons/PrevSongIco'
import { PauseIco } from '../../icons/PauseIco'
import { SongProgress } from '../SongProgress/SongProgress'

interface PlayerControlsProps {
    audioRef: RefObject<HTMLAudioElement>
}

export function PlayerControls({ audioRef }: PlayerControlsProps) {
    const { isPlaying,
        setIsPlaying,
        currentPlaylist,
        currentSongIndex,
        setCurrentSongIndex
        } = usePlayerStore(state => state) as PlayerStore
    
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    const prevSong = () => {
        if (!currentPlaylist) return 

        setCurrentSongIndex(
            currentSongIndex === 0 
            ? currentPlaylist.songs.length - 1
            : currentSongIndex - 1
        )
        setIsPlaying(true)
        
    }

    const nextSong = () => {
        if (!currentPlaylist) return

        setCurrentSongIndex(
            currentSongIndex === currentPlaylist.songs.length - 1
            ? 0
            : currentSongIndex + 1
        )
        setIsPlaying(true)
    }

    useEffect(() => {
        if (!currentPlaylist) return
        
        const song = currentPlaylist.songs[currentSongIndex]
        if (!song || !audioRef.current) return

        const src = `/audio/${currentPlaylist.id}/0${song.id}.mp3`
        audioRef.current.src = src
        audioRef.current.play()
        
    }, [currentPlaylist, currentSongIndex])

    useEffect(() => {
        if (isPlaying && currentPlaylist) {
            audioRef.current?.play()
        }
        else {
            audioRef.current?.pause()
        }
    }, [isPlaying])



    return (
        <div className='flex flex-col'>
            <div className='mb-2 flex items-center justify-center gap-4'>
                <button 
                onClick={prevSong}
                className='bg-transparent flex items-center justify-center w-8 h-8 cursor-pointer fill-icon-2 p-2 hover:scale-105 hover:fill-icon-1 transition-all active:opacity-40'>
                    <PrevSongIco className=''/>
                </button>
                <button onClick={togglePlayPause} className='bg-background flex items-center justify-center rounded-full w-8 h-8 cursor-pointer hover:scale-105 transition-transform  active:scale-100 active:opacity-80'>
                    {isPlaying
                        ? <PauseIco className='fill-icon-black w-5 stroke-icon-black'/>
                        : <PlayBtnLogo className='fill-icon-black w-6 stroke-icon-black'/>
                    }
                </button>
                <button onClick={nextSong}
                className='bg-transparent flex items-center justify-center w-8 h-8 cursor-pointer fill-icon-2 p-2 hover:scale-105 hover:fill-icon-1 transition-all active:opacity-40'>
                    <NextSongLogo />
                </button>
            </div>
            <audio ref={audioRef} ></audio>
            <SongProgress audioRef={audioRef}/>
        </div>
    )
}