import { Link } from "react-router-dom";
import {
  DiscordIcon,
  FacebookIcon,
  MailIcon,
  TwitterIcon,
  YoutubuIcon,
} from "../SvgIcons";

export default function Footer(props: { className?: string }) {
  const { className } = props;
  return (
    <footer className={`py-20 bg-dark ${className ? className : ""}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <Link to="https://www.facebook.com/BritainsGotTalent" target="_blank">
            <FacebookIcon />
          </Link>
          <Link to="https://www.facebook.com/BritainsGotTalent" target="_blank">
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
        <p className="font-secondary text-[18px] text-primary mt-3">
          © Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
