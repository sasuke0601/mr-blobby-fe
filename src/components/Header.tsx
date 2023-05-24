import { Link, useLocation } from "react-router-dom";
import { CloseIcon, HambugerIcon } from "./SvgIcons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FacebookIcon from "../assets/image/icons/facebook.png";
import DiscordIcon from "../assets/image/icons/discord.png";
import TwitterIcon from "../assets/image/icons/twitter.png";
import YoutubeIcon from "../assets/image/icons/youtube.png";
import MailIcon from "../assets/image/icons/mail.png";

export default function Header(props: { className?: string }) {
  const { className } = props;
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`py-3 lg:py-4 z-50 w-full bg-dark fixed lg:block text-shadow ${
        className ? className : ""
      }`}
    >
      <div
        className="container px-6 xl:px-0 xl:mx-auto"
        style={{ maxWidth: 1180 }}
      >
        <div className="flex justify-between">
          <div className="">
            <NavLink
              to="/"
              title="Home page"
              className={`font-secondary relative z-20 text-${
                !isOpen ? "primary" : "dark"
              } text-[32px]`}
            >
              MrBlobby
            </NavLink>
          </div>
          <div className="flex items-center">
            <button
              className="block w-6 h-6 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon /> : <HambugerIcon />}
            </button>
            <div className="items-center hidden lg:flex">
              <NavLink
                to="/"
                title="Home page"
                className={`font-secondary text-primary px-2 text-[18px] mr-6 ${
                  pathname === "/" ? " border-b-2 border-primary -mb-0.5" : ""
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/whitepaper"
                title="Whitepaper"
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
                title="Bubble Shooter Game"
                className={`font-secondary text-primary px-2 text-[18px] mr-6 ${
                  pathname === "/bubble-shooter"
                    ? " border-b-2 border-primary -mb-0.5"
                    : ""
                }`}
              >
                Bubble Shooter
              </NavLink>
            </div>
            <div className="items-center hidden gap-4 lg:flex">
              <Link
                title="Facebook"
                to="https://www.facebook.com/BritainsGotTalent"
                target="_blank"
              >
                <img src={FacebookIcon} className="w-6 h-6" alt="" />
              </Link>
              <Link
                title="Discord"
                to="https://discord.gg/mef8XVjm"
                target="_blank"
              >
                <img src={DiscordIcon} className="w-6 h-6" alt="" />
              </Link>
              <Link
                to="https://twitter.com/TokenBlobby"
                title="Twitter"
                target="_blank"
              >
                <img src={TwitterIcon} className="w-6 h-6" alt="" />
              </Link>
              <Link
                to="https://www.youtube.com/@BGT"
                title="Youtube"
                target="_blank"
              >
                <img src={YoutubeIcon} className="w-6 h-6" alt="" />
              </Link>
              <Link
                to="mailto:kraftwork75@gmail.com"
                title="Mail"
                target="_blank"
              >
                <img src={MailIcon} className="w-6 h-6" alt="" />
              </Link>
            </div>
          </div>
          <div
            className={`fixed left-0 overflow-hidden w-full bg-primary lg:hidden duration-200 -mt-6 ${
              isOpen ? "h-[calc(100vh+24px)]" : "h-0"
            }`}
          >
            <button
              className="absolute z-20 w-6 h-6 right-6 top-10"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center">
                <NavLink
                  to="/"
                  title="Home page"
                  className={`font-secondary text-dark px-2 text-[24px] mb-6 ${
                    pathname === "/" ? " border-b-2 border-dark -mb-0.5" : ""
                  }`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/whitepaper"
                  title="Whitepaper page"
                  className={`font-secondary text-dark px-2 text-[24px] mb-6  ${
                    pathname === "/whitepaper"
                      ? " border-b-2 border-dark -mb-0.5"
                      : ""
                  }`}
                >
                  Whitepaper
                </NavLink>
                <NavLink
                  to="/bubble-shooter"
                  title="Bubble Shooter Game"
                  className={`font-secondary text-dark px-2 text-[24px] mb-6  ${
                    pathname === "/bubble-shooter"
                      ? " border-b-2 border-dark -mb-0.5"
                      : ""
                  }`}
                >
                  Bubble Shooter
                </NavLink>
              </div>
              <div className="absolute flex gap-6 bottom-10">
                <Link
                  title="Facebook"
                  to="https://www.facebook.com/BritainsGotTalent"
                  target="_blank"
                >
                  <img
                    src={FacebookIcon}
                    className="w-6 h-6 brightness-[0.2]"
                    alt=""
                  />
                </Link>
                <Link
                  title="Discord"
                  to="https://discord.gg/mef8XVjm"
                  target="_blank"
                >
                  <img
                    src={DiscordIcon}
                    className="w-6 h-6  brightness-[0.2]"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://twitter.com/TokenBlobby"
                  title="Twitter"
                  target="_blank"
                >
                  <img
                    src={TwitterIcon}
                    className="w-6 h-6  brightness-[0.2]"
                    alt=""
                  />
                </Link>
                <Link
                  to="https://www.youtube.com/@BGT"
                  title="Youtube"
                  target="_blank"
                >
                  <img
                    src={YoutubeIcon}
                    className="w-6 h-6  brightness-[0.2]"
                    alt=""
                  />
                </Link>
                <Link
                  to="mailto:kraftwork75@gmail.com"
                  title="Mail"
                  target="_blank"
                >
                  <img
                    src={MailIcon}
                    className="w-6 h-6  brightness-[0.2]"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
