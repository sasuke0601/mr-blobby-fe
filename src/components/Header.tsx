import { Link, useLocation } from "react-router-dom";
import {
  DiscordIcon,
  FacebookIcon,
  MailIcon,
  TwitterIcon,
  YoutubuIcon,
} from "./SvgIcons";
import { NavLink } from "react-router-dom";

export default function Header(props: { className?: string }) {
  const { className } = props;
  const { pathname } = useLocation();
  return (
    <header className={`py-4 bg-dark ${className ? className : ""}`}>
      <div className="container mx-auto" style={{ maxWidth: 1180 }}>
        <div className="flex justify-between">
          <div className="">
            <NavLink to="/" className="font-secondary text-primary text-[32px]">
              MrBlobby
            </NavLink>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              <NavLink
                to="/"
                className={`font-secondary text-primary px-2 text-[18px] mr-6 ${
                  pathname === "/" ? " border-b-2 border-primary -mb-0.5" : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/whitepaper"
                className={`font-secondary text-primary px-2 text-[18px] mr-6 ${
                  pathname === "/whitepaper"
                    ? " border-b-2 border-primary -mb-0.5"
                    : ""
                }`}
              >
                Whitepaper
              </NavLink>
              <NavLink
                to="/bubble-shooter"
                className={`font-secondary text-primary px-2 text-[18px] mr-6 ${
                  pathname === "/bubble-shooter"
                    ? " border-b-2 border-primary -mb-0.5"
                    : ""
                }`}
              >
                Bubble Shooter
              </NavLink>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="https://www.facebook.com/BritainsGotTalent"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
              <Link
                to="https://www.facebook.com/BritainsGotTalent"
                target="_blank"
              >
                <DiscordIcon />
              </Link>
              <Link to="https://twitter.com/TokenBlobby" target="_blank">
                <TwitterIcon />
              </Link>
              <Link to="https://www.youtube.com/@BGT" target="_blank">
                <YoutubuIcon />
              </Link>
              <Link to="mailto:kraftwork75@gmail.com" target="_blank">
                <MailIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
