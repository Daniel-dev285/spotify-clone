import { usePlayerStore, type PlayerStore } from "../store/playerStore"

export function PlayerSongCard() {
    const {currentPlaylist, currentSongIndex} = usePlayerStore(state => state) as PlayerStore

    return (
        <div className='w-full gap-3 flex items-center justify-start '>
            <picture className='flex w-14 h-50px'>
                <img 
                className='object-cover w-full rounded-sm' 
                src={currentPlaylist?.songs[currentSongIndex].image} />
            </picture>
            <div className='flex flex-col justify-center'>
                <span className='text-sm mb-0.5 '>{currentPlaylist?.songs[currentSongIndex].title}</span>
                <span className='text-xs opacity-60'>{currentPlaylist?.songs[currentSongIndex].artists.join(', ')}</span>
            </div>
        </div>
    )
}