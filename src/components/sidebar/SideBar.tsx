import { ReactNode } from "react";
import * as Icons from "../../icons";

function Label({ children }: { children: ReactNode }) {
    return (
        <small className="px-2 text-muted uppercase text-xs">{children}</small>
    );
}

function NavButton({ children, icon }: { children: string; icon: ReactNode }) {
    return (
        <button className="w-full text-start flex gap-2 align-middle p-2 hover:bg-primary rounded">
            <div className="text-primary my-auto">{icon}</div>
            <p className="my-auto">{children}</p>
        </button>
    );
}

export default function SideBar() {
    return (
        <aside className="sticky top-0 flex-shrink-0 w-72 h-svh bg-[#0E0E0E] p-6 flex flex-col gap-8">
            <header className="flex gap-2 align-middle">
                <Icons.Logo />
                <p className="font-semibold text-3xl ">
                    <span className="text-primary">Dream</span>Music
                </p>
            </header>
            <section className="h-full flex flex-col justify-between">
                <section className="grid gap-1">
                    <Label>Menu</Label>
                    <NavButton icon={Icons.HomeIcon()}>Home</NavButton>
                    <NavButton icon={Icons.TrendingIcon()}>Trends</NavButton>
                    <NavButton icon={Icons.LibraryIcon()}>Library</NavButton>
                    <NavButton icon={Icons.DiscoverIcon()}>Discover</NavButton>
                </section>
                <section className="grid gap-1">
                    <Label>General</Label>
                    <NavButton icon={Icons.SettingsIcon()}>Settings</NavButton>
                    <NavButton icon={Icons.LogoutIcon()}>Log out</NavButton>
                </section>
            </section>
        </aside>
    );
}
