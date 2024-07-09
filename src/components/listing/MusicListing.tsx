import { formatNumber, formatTimeInSeconds } from "../../utils/utils";
import { songs } from "./data";

export default function MusicListing() {
    return (
        <section>
            <section className="flex justify-between mb-8">
                <p>Popular</p>
                <button>See All</button>
            </section>
            <section className="mb-24">
                <table className="w-full text-muted">
                    <thead className="text-sm uppercase text-start">
                        <tr>
                            <th className="w-4 text-start">#</th>
                            <th className="w-20"></th>
                            <th className="text-start">Title</th>
                            <th className="text-start">Playing</th>
                            <th className="text-start">Time</th>
                            <th className="text-end">Album</th>
                        </tr>
                    </thead>

                    <tbody>
                        {songs.map((song, index) => (
                            <tr key={song.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={song.cover}
                                        alt="cover"
                                        className="size-12 mx-auto"
                                    />
                                </td>
                                <td>{song.title}</td>
                                <td>{formatNumber(song.playing)}</td>
                                <td>
                                    {formatTimeInSeconds(song.lengthInSeconds)}
                                </td>
                                <td className="text-end">{song.album}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
}
