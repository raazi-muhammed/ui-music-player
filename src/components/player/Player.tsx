import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import * as Icons from "../../icons";
import { songs } from "../listing/data";

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
    const song = songs[0];

    return (
        <aside className="sticky top-0 flex-shrink-0 w-80 h-svh bg-[#230909] p-8 flex flex-col justify-end">
            <section className="bg-accent rounded p-4 space-y-4 h-fit">
                <section className="text-center space-y-2">
                    <p className="text-sm">Now Playing</p>
                    <img src={song.cover} alt="" className="w-full rounded" />
                    <div>
                        <p>{song.title}</p>
                        <small className="text-muted">{song.artist}</small>
                    </div>
                </section>
                <section className="flex align-middle justify-center gap-2">
                    <ControlButtons size="sm" icon={Icons.LoopIcon()} />
                    <div className="flex align-middle justify-center gap-0">
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
