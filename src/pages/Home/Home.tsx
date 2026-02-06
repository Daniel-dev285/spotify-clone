import { PlaylistCard } from '../../components/PlaylistCard/PlaylistCard'
import { playlists } from '../../lib/data'

export function Home() {
    return (
        <section className='pl-5 pt-4 overflow-hidden '>
            <h3 className='px-3'>Made for you</h3>
            <div className='flex mt-2.5'>
                {playlists.map(playlist => {
                return(
                    <PlaylistCard key={playlist.id} playlist={playlist}/>
                )
            })}
            </div>
        </section>
    )
}