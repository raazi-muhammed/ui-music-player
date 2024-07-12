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
        <section className="container relative mx-auto w-full p-6 lg:px-12">
            <img
                src="/cover.png"
                alt="cover"
                className="min-h-[15rem] w-full rounded-2xl object-cover"
            />
            <section className="absolute inset-12 -m-6 flex">
                <section className="my-auto flex-[1] space-y-2 p-8 lg:ms-4">
                    {artist.isVerified && <VerifiedBadge />}
                    <p className="text-4xl">{artist.name}</p>
                    <small className="block pt-4 text-muted">
                        {formatNumber(artist.listeners.monthly)} monthly
                        listeners
                    </small>
                </section>
                <div className="relative flex-[1]">
                    <img
                        src="/artist.png"
                        className="absolute bottom-0 right-8 w-full origin-bottom-right scale-110"
                        alt="artist"
                    />
                </div>
            </section>
        </section>
    );
}
