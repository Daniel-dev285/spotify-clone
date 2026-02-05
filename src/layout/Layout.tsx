import { Navbar } from '../components/layout/navbar/Navbar'
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
            <div className='grid-container'>
                <header className='header'>
                    <Navbar/>
                </header>
                

                <aside className='aside '>
                    <Sidebar />
                </aside>

                <main className='main'>
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/playlist' element={<Playlist />}/>
                        </Routes>
                    </AnimatePresence>
                    
                </main>
                
                <footer className='player'>
                    <Player />
                </footer>
            </div>
        </>
    )
}