import { type Playlist } from '../../lib/data'
import { useCustomNav } from '../../hooks/useCustomNav'
import { PlayBtnLogo } from '../../icons/PlayBtnIco'
import './SidebarCard.css'

export interface PlaylistProps {
    playlist: Playlist | undefined
    id?: string | null | undefined
}

export function SidebarCard({playlist}: PlaylistProps) {
    const { goToPath } = useCustomNav()

    return (
        <div 
        onClick={() => goToPath(`/playlist?id=${playlist?.id}`)}
        className='sidebar-playlist-card'>
            <header className='sidebar-playlist-card-header'>
                <figure className='sidebar-playlist-card-figure'>
                    <div className='sidebar-playlist-card-overlay'>
                        <PlayBtnLogo />
                    </div>
                    
                    <img src={playlist?.cover} alt={playlist?.title} />
                </figure>
                
                <div className='sidebar-playlist-card-info'>
                    <span>{playlist?.title}</span>
                    <span className='sidebar-playlist-info-artists'>{playlist?.artists.join(", ")}</span>
                </div>
            </header>
        </div>
    )
}