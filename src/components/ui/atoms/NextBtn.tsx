import { NextSongLogo } from '@/Icons/NextSongLogo'

interface Props {
  nextSong: () => void
  className?: string
}

export function NextBtn({nextSong, className}: Props) {
    return (
        <button 
        onClick={nextSong}
        className={className}>
            <NextSongLogo />
        </button>)
}
