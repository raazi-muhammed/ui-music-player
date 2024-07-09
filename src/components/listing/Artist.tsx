import * as Icons from "../../icons";
import { formatNumber } from "../../utils/utils";

function VerifiedBadge() {
    return (
        <div className="flex align-middle gap-1">
            <Icons.VerifiedBadge />
            <small className="text-muted my-auto">Verified Artist</small>
        </div>
    );
}

export default function Artist() {
    const artist = {
        name: "Micchael Jackson",
        isVerified: true,
        listeners: {
            monthly: 12121908,
        },
    };
    return (
        <section className="relative p-12 w-full mt-28">
            <img src="/cover.png" alt="cover" className="w-full" />
            <section className="absolute inset-12 grid grid-cols-2">
                <section className="p-8 my-auto space-y-2">
                    {artist.isVerified && <VerifiedBadge />}
                    <p className="text-4xl">{artist.name}</p>
                    <small className="text-muted block pt-4">
                        {formatNumber(artist.listeners.monthly)} monthly
                        listeners
                    </small>
                </section>
                <div className="relative">
                    <img
                        src="/artist.png"
                        className="bottom-0 right-8 scale-125 origin-bottom-right absolute"
                        alt="artist"
                    />
                </div>
            </section>
        </section>
    );
}
