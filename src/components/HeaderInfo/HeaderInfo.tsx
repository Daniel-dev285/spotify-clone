import { type PlaylistProps } from '../SidebarCard/SidebarCard'
import { useCustomNav } from '../../hooks/useCustomNav'
import { GoBackBtn } from '../../icons/GoBackBtn'
import { motion } from 'framer-motion'

export function HeaderInfo({ playlist, id }: PlaylistProps) {
    const { goBack } = useCustomNav()

    return (
        <header style={{background: `linear-gradient(to bottom, ${playlist?.color.accent}, ${playlist?.color.dark})`}} className='flex flex-col gap-5 px-5 py-4'>
            <button 
            onClick={() => goBack()} 
            className='flex items-center justify-center w-8 h-8 rounded-full bg-black cursor-pointer p-1.5 hover:scale-105 group transition-all duration-60'>
                <GoBackBtn className='stroke-icon-2 stroke-[1.5px] group-hover:stroke-icon-1'/>
            </button>
            <div className='flex gap-5'>
                <motion.picture
                    className='flex w-50 h-50 shadow-xl'
                    layoutId={`playlist-image-${id}`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <img className='rounded-sm w-full h-full object-cover'
                        src={playlist?.cover}
                        alt={playlist?.title} />
                </motion.picture>
                <div className='flex flex-col justify-end gap-0.5'>
                    <span className='opacity-80'>Playlist</span>
                    <h1 className='text-4xl font-bold'>{playlist?.title}</h1>
                    <span className='opacity-60'>{playlist?.artists.join(', ')}</span>
                    <span className='text-sm opacity-60'>{playlist?.songs.length} songs, {playlist?.playlistDuration}</span>
                </div>
            </div>
        </header>
    )
}