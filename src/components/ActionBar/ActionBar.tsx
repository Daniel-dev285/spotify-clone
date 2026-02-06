import { type PlaylistProps } from '../SidebarCard/SidebarCard'
import { PlayBtnLogo } from '@/icons/PlayBtnIco'
import { AddToFav } from '@/icons/AddToFav'

export function ActionBar({playlist}: PlaylistProps) {

    return (
        <div 
        style={{ background: `linear-gradient(to bottom, ${playlist?.color.transparent}, #12121200)` }} 
        className='flex items-center gap-5 p-5'>
            <button className='playlist-controller-playbtn'>
                <PlayBtnLogo className=''/>
            </button>
            <button className='playlist-controller-addfav'>
                <AddToFav />
            </button>
        </div>
    )
}
