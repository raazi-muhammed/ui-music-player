import {
    ButtonHTMLAttributes,
    LegacyRef,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import * as Icons from "../../icons";
import { songs } from "../listing/data";
import ReactHowler from "react-howler";
import { formatTimeInSeconds } from "../../utils/utils";

function ControlButtons({
    icon,
    size = "sm",
    ...prop
}: {
    icon: ReactNode;
    size?: "sm" | "md";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...prop}
            className={`hover:bg-secondary grid place-items-center rounded my-auto ${
                size === "sm" ? "size-8" : "size-10"
            }`}>
            {icon}
        </button>
    );
}

export default function Player() {
    const [playing, setPlaying] = useState(false);
    const player = useRef<ReactHowler>();

    useEffect(() => {
        if (player.current) {
            player.current.seek(0);
            console.log(player.current);
        }
    }, []);
    const song = songs[0];

    return (
        <aside className="sticky top-0 flex h-svh w-80 flex-shrink-0 flex-col justify-end bg-[#230909] p-8">
            <ReactHowler
                html5={true}
                src="music/Billie.mp3"
                playing={playing}
                onPlay={(e) => console.log(e)}
                ref={player as any}
                onSeek={(e) => console.log(e)}
            />

            <section className="h-fit space-y-4 rounded bg-accent p-4">
                <section className="space-y-2 text-center">
                    <p className="text-sm">Now Playing</p>
                    <img src={song.cover} alt="" className="w-full rounded" />
                    <div>
                        <p>{song.title}</p>
                        <small className="text-muted">{song.artist}</small>
                    </div>
                </section>
                <section className="flex gap-2 text-xs">
                    <p>{formatTimeInSeconds(0)}</p>
                    <input
                        type="range"
                        className="w-full"
                        min={0}
                        max={player.current?.duration()}
                    />
                    <p>
                        {formatTimeInSeconds(player.current?.duration() || 0)}
                    </p>
                </section>
                <section className="flex justify-center gap-2 align-middle">
                    <ControlButtons size="sm" icon={Icons.LoopIcon()} />
                    <div className="flex justify-center gap-0 align-middle">
                        <ControlButtons size="sm" icon={Icons.PreviousIcon()} />
                        {playing ? (
                            <ControlButtons
                                onClick={() => setPlaying(false)}
                                size="md"
                                icon={Icons.PauseIcon()}
                            />
                        ) : (
                            <ControlButtons
                                onClick={() => setPlaying(true)}
                                size="md"
                                icon={Icons.PlayIcon()}
                            />
                        )}
                        <ControlButtons size="sm" icon={Icons.NextIcon()} />
                    </div>
                    <ControlButtons size="sm" icon={Icons.ShuffleIcon()} />
                </section>
            </section>
        </aside>
    );
}
