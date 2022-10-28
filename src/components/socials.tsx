import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaTelegram,
  FaGithubAlt,
  FaLastfm,
  FaSteam,
} from "react-icons/fa";
import { SiTrakt } from "react-icons/si";

interface Link {
  title: string;
  url: string;
  icon: JSX.Element;
  gradient: Gradients;
}

type Gradients =
  | "bg-insta"
  | "bg-twitter"
  | "bg-tel"
  | "bg-git"
  | "bg-last"
  | "bg-steam"
  | "bg-trakt";

const links: Link[] = [
  {
    title: "insta",
    url: "/insta",
    icon: <FaInstagram />,
    gradient: "bg-insta",
  },
  {
    title: "twitter",
    url: "/twitter",
    icon: <FaTwitter />,
    gradient: "bg-twitter",
  },
  {
    title: "git",
    url: "/git",
    icon: <FaGithubAlt />,
    gradient: "bg-git",
  },
  {
    title: "last",
    url: "/last",
    icon: <FaLastfm />,
    gradient: "bg-last",
  },
  {
    title: "steam",
    url: "/steam",
    icon: <FaSteam />,
    gradient: "bg-steam",
  },
  {
    title: "trakt",
    url: "/trakt",
    icon: <SiTrakt />,
    gradient: "bg-trakt",
  },
];

export function SocialList() {
  return (
    <>
      {links.map((link, index) => (
        <Socials key={index} link={link} index={index} />
      ))}
    </>
  );
}

const Socials = ({ link, index }: { link: Link; index: number }) => {
  return (
    <Link key={index} href={link.url} type={link.title}>
        <div className="inline-flex items-center pr-1.5">
          <div className="pr-1 pl-2 items-baseline">{link.icon}</div>
          <p
            className={`text-xl items-center font-sans ease-in-out duration-150 infinite hover:font-bold hover:text-transparent bg-clip-text ${link.gradient}`}
          >
            {link.title}
          </p>
        </div>
    </Link>
  );
};
