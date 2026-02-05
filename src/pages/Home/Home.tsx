import { PlaylistCard } from '../../components/PlaylistCard/PlaylistCard'
import { playlists } from '../../lib/data'
import './Home.css'

export function Home() {
    return (
        <section className='main-section'>
            <h3>Made for you</h3>
            <div className='main-container'>
                {playlists.map(playlist => {
                return(
                    <PlaylistCard key={playlist.id} playlist={playlist}/>
                )
            })}
            </div>
            
            
        </section>
    )
}