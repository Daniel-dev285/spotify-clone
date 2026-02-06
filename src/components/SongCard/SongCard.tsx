import { type Song } from '@/lib/data'

export interface SongProps {
    song: Song
}

export function SongCard({ song }: SongProps) {
    return (
        <div className='py-1.5 px-4 gap-3 items-center grid grid-cols-[16px_2fr_2fr_0.5fr] hover:bg-primary h-14 rounded-sm'>
            <span className='text-sm opacity-60'>{song.id}</span>
            <div className='flex items-center gap-2.5'>
                <picture className='flex items-center'>
                    <img className='rounded-sm object-cover size-10' src={song.image} alt={song.title} />
                </picture>
                <div className='flex flex-col'>
                    <span className='text-sm'>{song.title}</span>
                    <span className='text-[.8rem] opacity-60'>{song.artists.join(", ")}</span>
                </div>
            </div>
            <span className='text-sm opacity-60'>{song.album}</span>
            <span className='text-sm opacity-60'>{song.duration}</span>
        </div>
    )
}