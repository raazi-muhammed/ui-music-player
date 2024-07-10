import * as Icons from "../../icons";
import { formatNumber } from "../../utils/utils";

function VerifiedBadge() {
    return (
        <div className="flex gap-1 align-middle">
            <Icons.VerifiedBadge />
            <small className="my-auto text-muted">Verified Artist</small>
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
        <section className="container relative mx-auto w-full p-24">
            <img src="/cover.png" alt="cover" className="w-full" />
            <section className="absolute inset-12 grid grid-cols-2">
                <section className="my-auto space-y-2 p-8">
                    {artist.isVerified && <VerifiedBadge />}
                    <p className="text-4xl">{artist.name}</p>
                    <small className="block pt-4 text-muted">
                        {formatNumber(artist.listeners.monthly)} monthly
                        listeners
                    </small>
                </section>
                <div className="relative">
                    <img
                        src="/artist.png"
                        className="absolute bottom-0 right-8 origin-bottom-right scale-125"
                        alt="artist"
                    />
                </div>
            </section>
        </section>
    );
}
