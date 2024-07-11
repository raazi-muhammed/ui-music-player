import {
    ButtonHTMLAttributes,
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
    className,
    ...prop
}: {
    icon: ReactNode;
    className?: string;
    size?: "sm" | "md";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...prop}
            className={`${className} hover:bg-secondary  grid place-items-center rounded my-auto ${
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
        <aside className="fixed bottom-20 z-10 flex h-fit w-svw flex-shrink-0 flex-col gap-8 bg-transparent px-6 py-2 lg:bottom-6 xl:sticky xl:top-0 xl:h-svh xl:w-72 xl:bg-secondary xl:py-6">
            <ReactHowler
                html5={true}
                src="music/Billie.mp3"
                playing={playing}
                onPlay={(e) => console.log(e)}
                ref={player as any}
                onSeek={(e) => console.log(e)}
            />

            <section className="ms-auto flex h-fit w-full max-w-[30rem] justify-between gap-6 space-y-4 rounded bg-accent p-4 align-middle xl:mt-auto xl:flex-col xl:gap-1">
                <div className="my-auto flex gap-4 align-middle xl:flex-col">
                    <section className="space-y-2 text-center">
                        <p className="hidden text-sm xl:block">Now Playing</p>
                        <img
                            src={song.cover}
                            alt=""
                            className="gl:w-20 aspect-square w-14 rounded xl:w-full"
                        />
                    </section>
                    <div className="my-auto h-fit xl:text-center">
                        <p>{song.title}</p>
                        <small className="text-muted">{song.artist}</small>
                    </div>
                </div>
                <div style={{ marginBlock: "auto" }} className="h-full">
                    <section className="my-auto mb-4 hidden gap-2 text-xs xl:flex">
                        <p>{formatTimeInSeconds(0)}</p>
                        <input
                            type="range"
                            className="w-full"
                            min={0}
                            max={player.current?.duration()}
                        />
                        <p>
                            {formatTimeInSeconds(
                                player.current?.duration() || 0
                            )}
                        </p>
                    </section>
                    <section className="flex h-fit justify-center gap-2 align-middle">
                        <ControlButtons
                            className="hidden sm:block"
                            size="sm"
                            icon={Icons.LoopIcon()}
                        />
                        <div className="flex justify-center gap-0 align-middle">
                            <ControlButtons
                                size="sm"
                                className="hidden sm:block"
                                icon={Icons.PreviousIcon()}
                            />
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
                            <ControlButtons
                                className="hidden sm:block"
                                size="sm"
                                icon={Icons.NextIcon()}
                            />
                        </div>
                        <ControlButtons
                            className="hidden sm:block"
                            size="sm"
                            icon={Icons.ShuffleIcon()}
                        />
                    </section>
                </div>
            </section>
        </aside>
    );
}
