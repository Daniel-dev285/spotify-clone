import { type Song } from '../../lib/data'
import './SongCard.css'

export interface SongProps {
    song: Song
}

export function SongCard({ song }: SongProps) {
    return (
        <div className='song-card'>
            <span className='song-number'>{song.id}</span>
            <div className='song-card-header'>
                <picture className='song-card-image'>
                    <img src={song.image} alt={song.title} />
                </picture>
                <div className='song-card-info'>
                    <span className='song-title'>{song.title}</span>
                    <span className='song-artists'>{song.artists.join(", ")}</span>
                </div>
            </div>
            <span className='song-album'>{song.album}</span>
            <span className='song-duration'>{song.duration}</span>
        </div>
    )
}