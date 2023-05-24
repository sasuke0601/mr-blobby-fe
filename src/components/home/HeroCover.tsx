import Cover from "../../assets/image/hero-cover.webp";
import MrBlobbyImg from "../../assets/image/mrblobby.webp";

export default function HeroCover() {
  return (
    <div className="h-[280px] sm:h-[360px] lg:h-[560px] w-full relative pt-20">
      <img
        src={Cover}
        className="absolute top-0 left-0 object-cover w-full h-full mt-[60px] lg:mt-20"
        alt="MrBlobby Main page hero cover"
      />
      <div className="container relative z-10 w-full pt-[60px] sm:pt-20 lg:pt-[120px] mx-auto">
        <img
          src={MrBlobbyImg}
          className="pointer-events-none absolute -top-10 lg:top-10 -left-[80px] sm:-left-20 lg:left-0 2xl:left-[100px] blobby-animation mt-20 lg:w-[602px] lg:h-[602px] sm:w-[400px] sm:h-[400px] w-[260px] h-[260px]"
          alt="simple MrBlobby"
        />
        <h1 className="font-primary text-primary text-[48px] sm:text-[64px] lg:text-[100px] font-extrabold sm:ml-[50%] ml-[130px]">
          MrBlobby
        </h1>
        <p className="font-primary text-white text-[18px] lg:text-[24px] font-extrabold sm:ml-[50%] ml-[130px]">
          Official Mr Blobby <br /> Meme Coin Page
        </p>
      </div>
    </div>
  );
}
