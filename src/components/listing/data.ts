export type Song = {
    id: number;
    title: string;
    lengthInSeconds: number;
    playing: number;
    time: string;
    album: string;
    artist: string;
    cover: string;
    song: string;
};
export const songs: Song[] = [
    {
        id: 1,
        title: "Billie Jean",
        lengthInSeconds: 294,
        playing: 1357890,
        time: "04:54",
        album: "Thriller",
        artist: "Michael Jackson",
        cover: "https://i1.sndcdn.com/artworks-000078507256-het7tk-original.jpg",
        song: "/music/billie-jean.mov",
    },
    {
        id: 2,
        title: "Thriller",
        lengthInSeconds: 357,
        playing: 1543201,
        time: "05:57",
        album: "Thriller",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/thriller.mov",
    },
    {
        id: 5,
        title: "Bad",
        lengthInSeconds: 248,
        playing: 1012345,
        time: "04:08",
        album: "Bad",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/bad.mov",
    },
    {
        id: 6,
        title: "Black or White",
        lengthInSeconds: 273,
        playing: 987654,
        time: "04:33",
        album: "Dangerous",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/black-or-white.mov",
    },
    {
        id: 7,
        title: "Man in the Mirror",
        lengthInSeconds: 319,
        playing: 856789,
        time: "05:19",
        album: "Bad",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/bad.mov",
    },
    {
        id: 8,
        title: "Remember the Time",
        lengthInSeconds: 239,
        playing: 935421,
        time: "03:59",
        album: "Dangerous",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/remember-the-time.mov",
    },
    {
        id: 9,
        title: "Earth Song",
        lengthInSeconds: 366,
        playing: 965432,
        time: "06:06",
        album: "HIStory",
        artist: "Michael Jackson",
        cover: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
        song: "/music/earth.mov",
    },
];
