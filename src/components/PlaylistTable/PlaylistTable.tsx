import { type PlaylistProps } from '../SidebarCard/SidebarCard'
import { TimeLogo } from '@/icons/TimeLogo'
import { SongCard } from '@/components/SongCard/SongCard'

export function PlaylistTable({playlist}: PlaylistProps) {
    return (
        <div className='px-5'>
            <header className='px-4 py-1.5 grid grid-cols-[16px_2fr_2fr_0.5fr] gap-3 mb-4 border-b border-b-primary text-text-2'>
                <span>#</span>
                <span>Title</span>
                <span>Album</span>
                <span className='size-5 fill-icon-2'><TimeLogo /></span>
            </header>
            {playlist?.songs.map((song) => {
                return (
                    <SongCard key={song.id} song={song} />
                )
            })}
        </div>
    )
}
