import { useSearchParams } from 'react-router-dom'
import { playlists} from '../../lib/data'
import { PlayBtnLogo } from '../../icons/PlayBtnIco'
import { AddToFav } from '../../icons/AddToFav'
import { TimeLogo } from '../../icons/TimeLogo'
import { SongCard } from '../../components/SongCard/SongCard'
import { HeaderInfo } from '../../components/HeaderInfo/HeaderInfo'
import { motion } from 'framer-motion'
import './Playlist.css'

export function Playlist() {
    const [params] = useSearchParams()
    const id = params.get("id")

    const playlist = playlists.find(playlist => playlist.id === id)

    return (
        <section className='playlist-section'>
            <HeaderInfo playlist={playlist} id={id} />
            <div style={{background: `linear-gradient(to bottom, ${playlist?.color.transparent}, #12121200)`}} className='playlist-controller'>
                <motion.button 
                className='playlist-controller-playbtn'
                whileHover={{scale: 1.08}}>
                    <PlayBtnLogo />
                </motion.button>
                <motion.button 
                className='playlist-controller-addfav'
                whileHover={{scale: 1.08}}>
                    <AddToFav />
                </motion.button>
            </div>
            <div className='songs-table'>
                <header className='songs-table-header'>
                    <span>#</span>
                    <span>Title</span>
                    <span>Album</span>
                    <span className='time-span'><TimeLogo /></span>
                </header>
                {playlist?.songs.map((song) => {
                    return (
                        <SongCard key={song.id} song={song}/>
                    )
                })}
            </div>
        </section>
    )
}