import { CreateLogo } from '../../icons/CreateLogo'
import { LibraryLogo } from '../../icons/LibraryLogo'
import { playlists } from '../../lib/data' 
import { SidebarCard } from '../SidebarCard/SidebarCard'
import './Sidebar.css'

export function Sidebar() {

    return (
        <>
            <header className='sidebar-header'>
                <div className='library-header'>
                    <LibraryLogo />
                    Your Library
                </div>
                <button className='create-btn'>
                    <CreateLogo />
                    Create
                </button>
            </header>
            <main className='library-container'>
                {playlists.map(playlist => {
                    return (
                        <SidebarCard key={playlist.id} playlist={playlist}/>
                    )
                })}

            </main>
        </>
    )
}