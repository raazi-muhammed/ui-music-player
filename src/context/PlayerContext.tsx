import { ReactNode, createContext, useState } from "react";
import { Song, songs as rawSongs } from "../components/listing/data";

const defaultValue = {
    playing: false,
    songs: rawSongs,
    song: rawSongs[0],
    changeSong: (_: number) => {},
    togglePlaying: (_: boolean) => {},
    insertSongAfter: (_: number, __: number) => {},
    nextSong: () => {},
    prevSong: () => {},
    randomSong: () => {},
};

export const PlayerContext = createContext(defaultValue);

export function PlayerContextProvider({ children }: { children: ReactNode }) {
    const [playing, setPlaying] = useState(false);
    const [songs, setSongs] = useState(rawSongs);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const togglePlaying = (val: boolean) => {
        if (val) setPlaying(val);
        else setPlaying((t) => !t);
    };
    const changeSong = (id: number) => {
        let i;
        for (i = 0; i < songs.length; i++) {
            if (songs[i].id === id) break;
        }
        setCurrentSongIndex(i);
        setPlaying(true);
    };

    function insertSongAfter(addAfter: number, toAdd: number) {
        setSongs((songs) => {
            const newSongs: Song[] = [];
            const songToAdd = songs.find((s) => s.id === toAdd);
            songs.map((song) => {
                if (song.id === toAdd) return;
                newSongs.push(song);
                if (song.id === addAfter && songToAdd) newSongs.push(songToAdd);
            });
            return newSongs;
        });
    }

    const nextSong = () => {
        setCurrentSongIndex((a) => (a < songs.length - 1 ? a + 1 : a));
    };
    const prevSong = () => {
        setCurrentSongIndex((a) => (a > 0 ? a - 1 : a));
    };
    const randomSong = () => {
        const randomIdx = Math.floor(Math.random() * songs.length - 1);
        setCurrentSongIndex(randomIdx);
    };

    return (
        <PlayerContext.Provider
            value={{
                playing,
                song: songs[currentSongIndex],
                changeSong,
                togglePlaying,
                songs,
                insertSongAfter,
                nextSong,
                prevSong,
                randomSong,
            }}>
            {children}
        </PlayerContext.Provider>
    );
}
