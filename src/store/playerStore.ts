import { create } from 'zustand';
import { type Playlist } from '../lib/data';

export interface PlayerStore {
    isPlaying: boolean;
    currentPlaylist: Playlist | null;
    currentSongIndex: number;
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentPlaylist: (playlist: Playlist) => void;
    setCurrentSongIndex: (index: number) => void
}

export const usePlayerStore = create<PlayerStore>((set) => ({
    isPlaying: false,
    currentPlaylist: null,
    currentSongIndex: 0,
    setIsPlaying: (isPlaying: boolean) => set({ isPlaying }),
    setCurrentPlaylist: (playlist: Playlist) => set({currentPlaylist: playlist}),
    setCurrentSongIndex: (index: number) => set({ currentSongIndex: index})
}))
