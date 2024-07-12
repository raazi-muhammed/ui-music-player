import { FaCompass } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiTrendingUp } from "react-icons/hi";
import { BiSolidMusic } from "react-icons/bi";
import { IoMusicalNotes, IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
    MdLoop,
    MdShuffle,
    MdSkipNext,
    MdSkipPrevious,
    MdPlayArrow,
    MdPause,
} from "react-icons/md";

export const Logo = () => (
    <IoMusicalNotes className="text-primary" size="2.5em" />
);
export const MusicIcon = () => (
    <IoMusicalNotes className="-ms-4 text-primary" size="2em" />
);

export const VerifiedBadge = () => (
    <VscVerifiedFilled size="1.5em" className="my-auto text-blue-400" />
);

export const HomeIcon = () => <GoHomeFill size="1.1em" />;
export const TrendingIcon = () => <HiTrendingUp size="1.1em" />;
export const LibraryIcon = () => <BiSolidMusic size="1.1em" />;
export const DiscoverIcon = () => <FaCompass size="1em" />;
export const SettingsIcon = () => <IoSettingsSharp size="1em" />;
export const LogoutIcon = () => <TbLogout size="1em" />;

export const LoopIcon = () => <MdLoop size="1em" className="m-auto" />;
export const ShuffleIcon = () => <MdShuffle size="1em" className="m-auto" />;
export const NextIcon = () => <MdSkipNext size="1.6em" className="m-auto" />;
export const PreviousIcon = () => (
    <MdSkipPrevious size="1.6em" className="m-auto" />
);
export const PlayIcon = () => <MdPlayArrow size="2.25em" className="my-auto" />;
export const PauseIcon = () => <MdPause size="2.25em" className="m-auto" />;
