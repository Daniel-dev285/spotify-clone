import { type Playlist } from '@/lib/types'
import { Button } from '@/components/ui/atoms/Button'
import { useCardPlayButton } from '../hooks/useCardPlayButton'
import { VolumeIcoFilled } from '@/components/ui/atoms/Icons/VolumeIco'
import { PauseIco } from '@/components/ui/atoms/Icons/PauseIco'
import { PlayBtnLogo } from '@/components/ui/atoms/Icons/PlayBtnIco'

interface Props {
    playlist: Playlist
    onClick: (playlistId: string) => void
}

export function SidebarCard({ playlist, onClick }: Props) {

    const { isPlayingPlaylist: isPlaying, handlePlayPause } = useCardPlayButton(playlist?.id)

    return (
        <div
            onClick={() => onClick(playlist.id)}
            className='cursor-pointer p-2 flex items-center justify-between rounded-sm group hover:bg-primary'>
            <div className='flex items-center gap-2.5 justify-start'>
                <figure className='flex items-center relative'>
                    <Button
                        onClick={handlePlayPause}
                        className={`overflow-hidden absolute rounded-sm top-0 right-0 bottom-0 left-0 p-2 bg-[#00000067] fill-icon-1 group-hover:opacity-100
                        ${isPlaying ? 'active:opacity-100' : ' opacity-0'}`}
                        size='lg'
                        icon={isPlaying ? <PauseIco /> : <PlayBtnLogo />}
                    />
                    <img className='object-cover rounded-sm size-13' src={playlist?.cover} alt={playlist?.title} />
                </figure>

                <div className='flex flex-col'>
                    <span className={`${isPlaying ? "text-green-400" : ""} text-sm line-clamp-1 `}>{playlist?.title}</span>
                    <span className='line-clamp-1 overflow-hidden text-ellipsis text-[.8rem] opacity-60 max-w-70'>{playlist?.artists.join(", ")}</span>
                </div>
            </div>
            <div className='flex justify-end'>
                <VolumeIcoFilled className={`size-4.5 fill-green-400 ${isPlaying ? "opacity-100" : "opacity-0"}`} />
            </div>
        </div>
    )
}