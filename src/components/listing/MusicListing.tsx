import { Fragment, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import Track from "./Track";
import { Droppable } from "./Droppable";

export default function MusicListing() {
    const {
        songs,
        insertSongAfter,
        song: currentSong,
    } = useContext(PlayerContext);

    return (
        <section className="w-full">
            <section className="container mx-auto mb-8 flex justify-between px-6 lg:px-12">
                <p className="text-xl font-semibold">Popular</p>
                <button className="mt-auto text-sm font-normal text-muted decoration-2 underline-offset-2 hover:underline">
                    See All
                </button>
            </section>
            <section className="mb-60 lg:mb-40 xl:mb-12">
                <section className="container mx-auto grid w-full grid-cols-footer-sm gap-4 px-8 lg:grid-cols-footer lg:px-12">
                    <p className="hidden lg:block">#</p>
                    <p></p>
                    <p>Title</p>
                    <p className="hidden lg:block">Playing</p>
                    <p>Time</p>
                    <p className="text-end">Album</p>
                </section>
                <section>
                    {songs.map((song, index) => (
                        <Fragment key={song.id}>
                            <Track
                                song={song}
                                active={song.id === currentSong.id}
                                number={index + 1}
                            />
                            <Droppable
                                currentSongId={song.id}
                                insertSongAfter={insertSongAfter}
                            />
                        </Fragment>
                    ))}
                </section>
            </section>
        </section>
    );
}
