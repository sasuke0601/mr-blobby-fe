import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/image/icons/facebook.png";
import DiscordIcon from "../../assets/image/icons/discord.png";
import TwitterIcon from "../../assets/image/icons/twitter.png";
import YoutubeIcon from "../../assets/image/icons/youtube.png";
import MailIcon from "../../assets/image/icons/mail.png";

export default function Footer(props: { className?: string }) {
  const { className } = props;
  return (
    <footer className={`py-20 bg-dark ${className ? className : ""}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4">
          <Link
            to="https://www.facebook.com/BritainsGotTalent"
            title="Facebook"
            target="_blank"
          >
            <img src={FacebookIcon} className="w-6 h-6" alt="FacebookIcon" />
          </Link>
          <Link
            to="https://discord.gg/mef8XVjm"
            title="Discord"
            target="_blank"
          >
            <img src={DiscordIcon} className="w-6 h-6" alt="DiscordIcon" />
          </Link>
          <Link
            to="https://twitter.com/TokenBlobby"
            title="Twitter"
            target="_blank"
          >
            <img src={TwitterIcon} className="w-6 h-6" alt="TwitterIcon" />
          </Link>
          <Link
            to="https://www.youtube.com/@BGT"
            title="Youtube"
            target="_blank"
          >
            <img src={YoutubeIcon} className="w-6 h-6" alt="YoutubeIcon" />
          </Link>
          <Link to="mailto:kraftwork75@gmail.com" title="Mail" target="_blank">
            <img src={MailIcon} className="w-6 h-6" alt="MailIcon" />
          </Link>
        </div>
        <p className="font-secondary sm:text-[18px] text-primary mt-3">
          © Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
