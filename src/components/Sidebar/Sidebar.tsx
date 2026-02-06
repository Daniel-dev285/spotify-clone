import { CreateLogo } from '../../icons/CreateLogo'
import { LibraryLogo } from '../../icons/LibraryLogo'
import { playlists } from '../../lib/data' 
import { SidebarCard } from '../SidebarCard/SidebarCard'

export function Sidebar() {
    return (
        <>
            <header className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <LibraryLogo className='w-5 fill-icon-1'/>
                    <span className='whitespace-nowrap'>Your Library</span>
                </div>
                <button className='flex items-center gap-2  bg-primary opacity-80 px-2 py-1.5 hover:opacity-100 transition rounded-full
                cursor-pointer'>
                    <CreateLogo className='w-5'/>
                    <span>Create</span>
                </button>
            </header>
            <main className='flex flex-col px-2'>
                {playlists.map(playlist => {
                    return (
                        <SidebarCard key={playlist.id} playlist={playlist}/>
                    )
                })}
            </main>
        </>
    )
}