import { ActionBar } from '@/features/playlist/components/ActionBar';
import { SongsTable } from '@/features/playlist/components/SongsTable';
import { PlaylistInfo } from '@/features/playlist/components/PlaylistInfo'
import { useCustomNav } from '@/features/navigation/hooks/useCustomNav'
import { useSearchParams } from 'react-router-dom'
import { playlists} from '@/lib/data'

export function Playlist() {
    const { goBack } = useCustomNav()
    const [params] = useSearchParams()
    const id = params.get("id")

    const playlist = playlists.find(playlist => playlist.id === id)

    if (!playlist) return
    return (
        <>
            <PlaylistInfo playlist={playlist} onClick={goBack} />
            <ActionBar playlist={playlist}/>
            <SongsTable playlist={playlist}/>
        </>
    )
}