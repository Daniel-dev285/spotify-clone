import { PlaylistCard } from '@/features/playlist'
import { playlists } from '@/lib/data'
import { useCustomNav } from '@/features/navigation/hooks/useCustomNav'

export function Home() {
    const { goToPath } = useCustomNav()

    return (
        <section className='pl-5 pt-4 overflow-hidden '>
            <h3 className='px-3'>Made for you</h3>
            <div className='flex mt-2.5'>
            {playlists.map(playlist => {
                return (
                    <PlaylistCard key={playlist.id} playlist={playlist} onClick={(id) => goToPath(`/playlist?id=${id}`) }  />
                )
            })}
            </div>
        </section>
    )
}