import { type Playlist } from '../../lib/data'
import { useCustomNav } from '../../hooks/useCustomNav'
import { PlayBtnLogo } from '../../icons/PlayBtnIco'

export interface PlaylistProps {
    playlist: Playlist | undefined
    id?: string | null | undefined
}

export function SidebarCard({playlist}: PlaylistProps) {
    const { goToPath } = useCustomNav()

    return (
        <div 
        onClick={() => goToPath(`/playlist?id=${playlist?.id}`)}
        className='cursor-pointer p-2 flex items-center rounded-sm group hover:bg-primary'>
            <header className='flex items-center gap-2.5 '>
                <figure className='flex items-center relative'>
                    <div className='overflow-hidden absolute rounded-sm flex items-center justify-center top-0 right-0 bottom-0 left-0 p-2 bg-[#00000067] opacity-0 group-hover:opacity-100  '>
                        <PlayBtnLogo className='size-8 fill-icon-1'/>
                    </div>
                    
                    <img className='object-cover rounded-sm size-13' src={playlist?.cover} alt={playlist?.title} />
                </figure>
                
                <div className='flex flex-col'>
                    <span>{playlist?.title}</span>
                    <span className='line-clamp-1 overflow-hidden text-ellipsis text-[.8rem] opacity-60 max-w-70'>{playlist?.artists.join(", ")}</span>
                </div>
            </header>
        </div>
    )
}