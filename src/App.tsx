import NavBar from "./components/NavBar";
import Artist from "./components/listing/Artist";
import MusicListing from "./components/listing/MusicListing";
import Player from "./components/player/Player";
import SideBar from "./components/sidebar/SideBar";
import { PlayerContextProvider } from "./context/PlayerContext";

export default function App() {
    return (
        <PlayerContextProvider>
            <section className="relative flex h-full text-white">
                <SideBar />
                <main className="w-full bg-gradient-to-t from-[#0B0A0A] to-[#4A0101]">
                    <NavBar />
                    <article className="space-y-12 lg:px-12">
                        <Artist />
                        <MusicListing />
                    </article>
                </main>
                <Player />
            </section>
        </PlayerContextProvider>
    );
}
