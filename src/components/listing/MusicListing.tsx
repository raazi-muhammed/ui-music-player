import { DragEvent, useState } from "react";
import { formatNumber, formatTimeInSeconds } from "../../utils/utils";
import { Song, songs as rawSongs } from "./data";

function Droppable({
    insertSongAfter,
    currentSongId,
}: {
    currentSongId: number;
    insertSongAfter: (addAfter: number, toAdd: number) => void;
}) {
    const [active, setActive] = useState(false);
    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
        console.log("hiiii");

        const data = e.dataTransfer.getData("musicId");
        console.log(data);
        insertSongAfter(currentSongId, Number(data));
        setActive(false);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={() => setActive(false)}
            onDrop={handleDragEnd}
            role="drappable"
            className={`m-1 h-3 container mx-auto ${
                active ? "bg-primary" : "bg-transparent"
            }`}></div>
    );
}

export default function MusicListing() {
    const [songs, setSongs] = useState<Song[]>(rawSongs);

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

    function handleDragStart(e: DragEvent<HTMLDivElement>, musicId: number) {
        e.dataTransfer.setData("musicId", String(musicId));
    }

    return (
        <section className="w-full">
            <section className="container mx-auto mb-8 flex justify-between px-8">
                <p className="text-xl font-semibold">Popular</p>
                <button className="mt-auto text-sm font-normal text-muted decoration-2 underline-offset-2 hover:underline">
                    See All
                </button>
            </section>
            <section>
                <section className="container mx-auto grid w-full grid-cols-footer-sm gap-4 px-8 lg:grid-cols-footer">
                    <p className="hidden lg:block">#</p>
                    <p></p>
                    <p>Title</p>
                    <p className="hidden lg:block">Playing</p>
                    <p>Time</p>
                    <p className="text-end">Album</p>
                </section>
                <section>
                    {songs.map((song, index) => (
                        <>
                            <div className="w-full hover:bg-accent">
                                <div
                                    draggable
                                    onDragStart={(e) =>
                                        handleDragStart(e, song.id)
                                    }
                                    key={song.id}
                                    className="container mx-auto grid grid-cols-footer-sm items-center gap-4 px-8 lg:grid-cols-footer">
                                    <p className="hidden lg:block">
                                        {index + 1}
                                    </p>
                                    <img
                                        src={song.cover}
                                        alt="cover"
                                        className="size-12 w-fit"
                                    />
                                    <p>{song.title}</p>
                                    <p className="hidden lg:block">
                                        {formatNumber(song.playing)}
                                    </p>
                                    <p>
                                        {formatTimeInSeconds(
                                            song.lengthInSeconds
                                        )}
                                    </p>
                                    <p className="truncate text-end">
                                        {song.album}
                                    </p>
                                </div>
                            </div>
                            <Droppable
                                currentSongId={song.id}
                                insertSongAfter={insertSongAfter}
                            />
                        </>
                    ))}
                </section>
            </section>
        </section>
    );
}
