import Cover from "../../assets/image/hero-cover.jpg";
import MrBlobbyImg from "../../assets/image/mrblobby.png";

export default function HeroCover() {
  return (
    <div className="h-[480px] w-full relative">
      <img
        src={Cover}
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt=""
      />
      <div className="container relative z-10 w-full pt-[120px] mx-auto">
        <img
          src={MrBlobbyImg}
          className="absolute top-10 left-[100px] blobby-animation"
          alt=""
        />
        <h1 className="font-primary text-primary text-[100px] font-extrabold ml-[50%] ">
          MrBlobby
        </h1>
        <p className="font-primary text-white text-[24px] font-extrabold ml-[50%] ">
          Official Mr Blobby <br /> Meme Coin Page
        </p>
      </div>
    </div>
  );
}
