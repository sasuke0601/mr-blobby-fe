import Ribbon from "../../assets/image/ribbon.svg";

export default function Roadmap() {
  return (
    <div className="relative w-full bg-dark">
      <div className="h-[60px] w-full bg-white"></div>
      <img
        src={Ribbon}
        className="absolute -translate-x-1/2 left-1/2 -top-[60px]"
        alt=""
      />
      <div className="bg-dark">
        <div className="container mx-auto max-w-[760px] pt-[320px]">
          <h1 className="font-primary font-extrabold text-[60px] text-center uppercase text-primary">
            roadmap
          </h1>
          <div className="mr-6"></div>
          <div className="ml-6"></div>
        </div>
      </div>
    </div>
  );
}
