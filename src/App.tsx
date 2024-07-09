import NavBar from "./components/NavBar";
import Artist from "./components/listing/Artist";
import MusicListing from "./components/listing/MusicListing";
import Player from "./components/player/Player";
import SideBar from "./components/sidebar/SideBar";

export default function App() {
    return (
        <section className="flex h-full text-white">
            <SideBar />
            <main className="w-full bg-gradient-to-t to-[#4A0101]  from-[#0B0A0A]">
                <div className="container mx-auto max-w-[70rem]">
                    <NavBar />
                    <Artist />
                    <MusicListing />
                </div>
            </main>
            <Player />
        </section>
    );
}
