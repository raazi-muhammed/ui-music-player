import { ReactNode } from "react";

function Link({ children }: { children: ReactNode }) {
    return (
        <a
            href="#"
            className="hover:underline underline-offset-2 decoration-2 hover:text-primary">
            {children}
        </a>
    );
}

export default function NavBar() {
    return (
        <nav className="p-8 flex justify-between align-middle gap-28">
            <ul className="flex gap-8 my-auto flex-shrink-0 ms-4">
                <li>
                    <Link>Music</Link>
                </li>
                <li>
                    <Link>Podcast</Link>
                </li>
                <li>
                    <Link>Live</Link>
                </li>
                <li>
                    <Link>Podcast</Link>
                </li>
            </ul>
            <input
                type="text"
                className="bg-secondary border-none max-w-96 py-2 px-4 rounded-full focus:outline-none focus:outline-primary w-full"
                placeholder="Search"
            />
        </nav>
    );
}
