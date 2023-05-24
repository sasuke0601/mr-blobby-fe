import BubblesImg from "../../assets/image/bubbles-lg.webp";
import BubblesImgSm from "../../assets/image/bubbles-sm.webp";
import ArrowBall from "../../assets/image/arrow-ball.webp";
import { Link } from "react-router-dom";

export default function GameCta() {
  return (
    <div
      className="relative w-full overflow-hidden "
      style={{
        background:
          "radial-gradient(100% 100% at 50% 0%, #670577 0%, #3A0343 100%)",
      }}
    >
      <div
        className="h-[290px] -mt-[60px] hidden lg:block"
        style={{ background: `url(${BubblesImg})` }}
      ></div>
      <div
        className="h-[180px] -mt-[40px] lg:hidden block"
        style={{ background: `url(${BubblesImgSm})` }}
      ></div>
      <div className="max-w-[760px] mx-6 sm:mx-auto mt-5 relative pb-[120px]">
        <h1 className="text-white font-extrabold text-[64px] lg:text-[96px] uppercase leading-[100%] text-shadow">
          bubble
        </h1>
        <h1 className="text-white font-extrabold text-[32px] lg:text-[72px] uppercase leading-[100%] text-shadow mb-9">
          shooter
        </h1>
        <Link to="/bubble-shooter">
          <div className="button-shadow px-6 lg:px-8 py-2 lg:py-3 uppercase text-[#4B0557] font-extrabold text-[18px] lg:text-[24px] bg-white rounded-xl leading-[120%] play-hover inline-block">
            play now!
          </div>
        </Link>
        <img
          src={ArrowBall}
          className="absolute -bottom-[50px] lg:-right-20 sm:right-[20%] -right-[10%] w-[320px] h-[320px] lg:w-[460px] lg:h-[460px] pointer-events-none"
          alt=""
        />
      </div>
    </div>
  );
}
