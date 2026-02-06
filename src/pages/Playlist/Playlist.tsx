import { ActionBar } from '@/components/ActionBar/ActionBar';
import { PlaylistTable } from '@/components/PlaylistTable/PlaylistTable';
import { HeaderInfo } from '../../components/HeaderInfo/HeaderInfo'
import { useSearchParams } from 'react-router-dom'
import { playlists} from '../../lib/data'
import './Playlist.css'
export function Playlist() {
    const [params] = useSearchParams()
    const id = params.get("id")

    const playlist = playlists.find(playlist => playlist.id === id)

    return (
        <>
            <HeaderInfo playlist={playlist} id={id} />
            <ActionBar playlist={playlist}/>
            <PlaylistTable playlist={playlist}/>
        </>
    )
}