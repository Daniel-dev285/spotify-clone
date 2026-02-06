import { type PlaylistProps } from '../SidebarCard/SidebarCard'
import { CardPlayButton } from '../CardPlayButton/CardPlayButton'
import { useCustomNav } from '@/hooks/useCustomNav'
import { motion } from 'framer-motion'

export function PlaylistCard({ playlist }: PlaylistProps) {
    const { goToPath } = useCustomNav()

    return (
        <motion.div 
            onClick={() => {goToPath(`/playlist?id=${playlist?.id}`)}} 
            className='flex flex-col gap-1.5 p-3 cursor-pointer relative group hover:bg-primary rounded-sm  transition-all'
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <CardPlayButton id={playlist?.id}/>
            <motion.picture 
                className='size-40'
                layoutId={`playlist-image-${playlist?.id}`}
            >
                <img className='w-full h-full object-cover rounded-sm'
                    src={playlist?.cover}
                    alt={playlist?.title}
                />
            </motion.picture>
            <div className='flex max-w-40 '>
                <span className=' line-clamp-2 overflow-hidden text-ellipsis text-sm opacity-60' >{playlist?.artists.join(", ")}</span>
            </div>
        </motion.div>
    )
}