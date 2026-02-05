export interface Playlist {
  id: string,
  albumId: number,
  title: string,
  cover: string,
  artists: string[],
  color: Color
  playlistDuration: string
  songs: Song[]
}

export interface Song {
  id: string;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export interface Color {
  accent: string,
  dark: string,
  transparent: string
}

export const playlists: Playlist[] = [
  {
    id: '1',
    albumId: 1,
    title: "Attack on Titan openings",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84227e151ee64cca493ad0f68e",
    artists: ["Linked Horizon", "SiM", "YOSHIKI", "HYDE"],
    color: 
    {
      accent: "#283038",
      dark: "#283038d3",
      transparent: "#283038aa"
    },
    playlistDuration: "12 min 8 sec",
    songs: [
      {
        "id": '1',
        "albumId": 1,
        "title": "Guren no Yumiya",
        "image": `https://i.scdn.co/image/ab67616d00001e02def688aa9f13e456064cf848`,
        "artists": ["Linked Horizon"],
        "album": "Guren no Yumiya Tv Size Ver",
        "duration": "1:34"
      },
      {
        "id": '2',
        "albumId": 2,
        "title": "Jiyuu no Tsubasa",
        "image": `https://i.scdn.co/image/ab67616d0000485174164dc6fb6a320abf6a34fd`,
        "artists": ["Linked Horizon"],
        "album": "Shingeki no Kiseki",
        "duration": "5:31"
      },
      {
        "id": '3',
        "albumId": 3,
        "title": "Shinzo no Sasageyo",
        "image": `https://i.scdn.co/image/ab67616d00001e02a6ba4e11adddb086d73d4474`,
        "artists": ["Linked Horizon"],
        "album": "Shingeki no Kiseki",
        "duration": "1:30"
      },
      {
        "id": '4',
        "albumId": 4,
        "title": "The Rumbling",
        "image": `https://i.scdn.co/image/ab67616d000048515d2f378be5d973ad504456d7`,
        "artists": ["SiM"],
        "album": "The Rumbling",
        "duration": "1:30"
      },
      {
        "id": '5',
        "albumId": 5,
        "title": "Under the Tree",
        "image": `https://i.scdn.co/image/ab67616d000048519f5ec7f7bba1f7a3179c4aa0`,
        "artists": ["SiM"],
        "album": "Under the Tree",
        "duration": "2:01"
      }
    ]
  },
  {
    id: '2',
    albumId: 2,
    title: "Shoegaze",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da843b1c439d7c76af0bce46cc82",
    artists: ["Loathe", "Deftones", "Slowdive", "Alcest", "My Bloody Valentine"],
    color: 
    {
      accent: "#29ab7a",
      dark: "#034421c1",
      transparent: "#034421a0"
    },
    playlistDuration: "32 min 32 sec",
    songs: [
      {
        "id": '1',
        "albumId": 1,
        "title": "Is It Really You",
        "image": `https://i.scdn.co/image/ab67616d00004851101232ffd5af0e3c37e2c528`,
        "artists": ["Loathe"],
        "album": "I Let It in and It Took Everthing",
        "duration": "4:47"
      },
      {
        "id": '2',
        "albumId": 2,
        "title": "Sextape",
        "image": `https://i.scdn.co/image/ab67616d0000485172c2145d48f68917a7361b15`,
        "artists": ["Deftones"],
        "album": "Diamond Eyes",
        "duration": "4:01"
      },
      {
        "id": '3',
        "albumId": 3,
        "title": "Two-Way Mirror",
        "image": `https://i.scdn.co/image/ab67616d00004851101232ffd5af0e3c37e2c528`,
        "artists": ["Loathe"],
        "album": "I Let It in and It Took Everthing",
        "duration": "1:30"
      },
      {
        "id": '4',
        "albumId": 4,
        "title": "Be Quiet and Drive",
        "image": `https://i.scdn.co/image/ab67616d000048510b1129853982ea17845d4eb6`,
        "artists": ["Deftones"],
        "album": "Around the Fur",
        "duration": "4:59"
      },
      {
        "id": '5',
        "albumId": 5,
        "title": "When the Sun Hits",
        "image": `https://i.scdn.co/image/ab67616d00001e02f6e31941d10e4819d290af41`,
        "artists": ["Slowdive"],
        "album": "Souvlaki",
        "duration": "4:45"
      },
      {
        "id": '6',
        "albumId": 6,
        "title": "when you sleep",
        "image": `https://i.scdn.co/image/ab67616d00004851db8e38addb58131f77b48377`,
        "artists": ["My Bloody Valentine"],
        "album": "loveless",
        "duration": "4:11"
      },
      {
        "id": '7',
        "albumId": 7,
        "title": "Sapphire",
        "image": `https://i.scdn.co/image/ab67616d0000485112775bb3da15efa0c7019c82`,
        "artists": ["Alcest"],
        "album": "Spiritual Instinct",
        "duration": "5:00"
      }
    ]
  },
  
];



