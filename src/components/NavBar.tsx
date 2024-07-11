import { ReactNode } from "react";

function Link({ children }: { children: ReactNode }) {
    return (
        <a
            href="#"
            className="decoration-2 underline-offset-2 hover:text-primary hover:underline">
            {children}
        </a>
    );
}

export default function NavBar() {
    return (
        <nav className="container flex max-w-full justify-between gap-28 py-8 align-middle lg:px-24">
            <ul className="mx-8 my-auto flex w-full justify-around gap-8 lg:w-fit">
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
                className="hidden w-full max-w-96 rounded-full border-none bg-secondary px-4 py-2 focus:outline-none focus:outline-primary lg:block"
                placeholder="Search"
            />
        </nav>
    );
}
