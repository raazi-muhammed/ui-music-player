import { ReactNode } from "react";
import * as Icons from "../../icons";

function Label({ children }: { children: ReactNode }) {
    return (
        <small className="hidden px-2 text-xs uppercase text-muted lg:block">
            {children}
        </small>
    );
}

function NavButton({ children, icon }: { children: string; icon: ReactNode }) {
    return (
        <button className="flex w-fit flex-col gap-2 rounded p-2 text-start align-middle hover:bg-primary lg:flex-row">
            <div className="mx-auto my-auto text-primary">{icon}</div>
            <p className="mx-auto text-xs lg:text-base">{children}</p>
        </button>
    );
}

export default function SideBar() {
    return (
        <aside className="fixed bottom-0 z-10 flex h-fit w-svw flex-shrink-0 flex-col gap-8 bg-[#0E0E0E] px-6 py-2 lg:sticky lg:top-0 lg:h-svh lg:w-72 lg:py-6">
            <header className="hidden gap-2 align-middle lg:flex">
                <Icons.Logo />
                <p className="text-3xl font-semibold">
                    <span className="text-primary">Dream</span>Music
                </p>
            </header>
            <section className="flex h-full justify-between lg:flex-col">
                <section className="flex w-full justify-around gap-1 lg:flex-col">
                    <Label>Menu</Label>
                    <NavButton icon={Icons.HomeIcon()}>Home</NavButton>
                    <NavButton icon={Icons.TrendingIcon()}>Trends</NavButton>
                    <NavButton icon={Icons.LibraryIcon()}>Library</NavButton>
                    <NavButton icon={Icons.DiscoverIcon()}>Discover</NavButton>
                </section>
                <section className="hidden gap-1 lg:grid">
                    <Label>General</Label>
                    <NavButton icon={Icons.SettingsIcon()}>Settings</NavButton>
                    <NavButton icon={Icons.LogoutIcon()}>Log out</NavButton>
                </section>
            </section>
        </aside>
    );
}
