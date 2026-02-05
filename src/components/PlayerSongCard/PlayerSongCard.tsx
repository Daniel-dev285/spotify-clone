import { usePlayerStore, type PlayerStore } from "../../store/playerStore"

export function PlayerSongCard() {
    const {currentPlaylist, currentSongIndex} = usePlayerStore(state => state) as PlayerStore

    return (
        <div className='flex gap-3'>
            <picture className='flex w-14 h-50px'>
                <img 
                className='object-cover w-full rounded-sm' 
                src={currentPlaylist?.songs[currentSongIndex].image} />
            </picture>
            <div className='flex flex-col justify-center'>
                <span className='text-sm '>{currentPlaylist?.songs[currentSongIndex].title}</span>
                <span style={{color: "#a0a0a0"}} className='text-[11px]'>{currentPlaylist?.songs[currentSongIndex].artists.join(', ')}</span>
            </div>
        </div>
    )
}