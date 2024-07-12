import { DragEvent, useContext } from "react";
import { Song } from "./data";
import { PlayerContext } from "../../context/PlayerContext";
import { MusicIcon } from "../../icons";
import { formatNumber, formatTimeInSeconds } from "../../utils/utils";

export default function Track({
    song,
    active,
    number,
}: {
    song: Song;
    active: boolean;
    number: number;
}) {
    const { changeSong } = useContext(PlayerContext);

    function handleDragStart(e: DragEvent<HTMLDivElement>, musicId: number) {
        e.dataTransfer.setData("musicId", String(musicId));
    }

    return (
        <div
            className={`w-full p-1 side-highlight hover:bg-accent/50 ${
                active && "bg-accent border-l-4 border-primary"
            }`}
            onClick={() => changeSong(song.id)}>
            <div
                draggable
                onDragStart={(e) => handleDragStart(e, song.id)}
                key={song.id}
                className="container mx-auto grid grid-cols-footer-sm items-center gap-4 px-8 lg:grid-cols-footer lg:px-12">
                <p className="hidden lg:block">
                    {active ? <MusicIcon /> : number}
                </p>
                <img
                    src={song.cover}
                    alt="cover"
                    className="size-12 w-fit shadow-sm shadow-accent"
                />
                <p>{song.title}</p>
                <p className="hidden lg:block">{formatNumber(song.playing)}</p>
                <p>{formatTimeInSeconds(song.lengthInSeconds)}</p>
                <p className="truncate text-end">{song.album}</p>
            </div>
        </div>
    );
}
