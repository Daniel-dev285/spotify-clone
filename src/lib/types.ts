export type Playlist = {
  id: string,
  albumId: number,
  title: string,
  cover: string,
  artists: string[],
  color: Color
  playlistDuration: string
  songs: Song[]
}

export type Song = {
  id: string;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export type Color = {
  accent: string,
  dark: string,
  transparent: string
}

export type PlaylistProps = {
    playlist: Playlist
    id?: string | null | undefined
}