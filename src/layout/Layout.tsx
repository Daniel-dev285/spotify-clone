import { Navbar } from '../components/Navbar/Navbar'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Home } from '../pages/Home/Home'
import { Playlist } from '../pages/Playlist/Playlist'
import { Player } from '../components/Player/Player'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './Layout.css'

export function Layout() {
    return (
        <>
            <div className='grid-container px-2 w-screen gap-2 '>
                <header className='[grid-area:header] h-14'>
                    <Navbar/>
                </header>
                

                <aside className='[grid-area:aside] bg-[#121212] rounded-sm h-[75vh] overflow-scroll'>
                    <Sidebar />
                </aside>

                <main className='[grid-area:main] bg-[#121212] rounded-sm h-[75vh] overflow-y-scroll'>
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/playlist' element={<Playlist />}/>
                        </Routes>
                    </AnimatePresence>
                    
                </main>
                
                <footer className='[grid-area:player]   '>
                    <Player />
                </footer>
            </div>
        </>
    )
}