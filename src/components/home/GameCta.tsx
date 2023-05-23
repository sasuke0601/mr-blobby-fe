import BubblesImg from "../../assets/image/bubbles-lg.png";
import ArrowBall from "../../assets/image/arrow-ball.png";
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
        className="h-[290px] -mt-[60px]"
        style={{ background: `url(${BubblesImg})` }}
      ></div>
      <div className="max-w-[760px] mx-auto mt-5 relative pb-[120px]">
        <h1 className="text-white font-extrabold text-[96px] uppercase leading-[100%] text-shadow">
          bubble
        </h1>
        <h1 className="text-white font-extrabold text-[72px] uppercase leading-[100%] text-shadow mb-9">
          shooter
        </h1>
        <Link
          to="/bubble-shooter"
          className="button-shadow px-8 py-3 uppercase text-[#4B0557] font-extrabold text-[24px] bg-white rounded-xl leading-[120%]"
        >
          play now!
        </Link>
        <img
          src={ArrowBall}
          className="absolute -bottom-[120px] -right-20"
          alt=""
        />
      </div>
    </div>
  );
}
