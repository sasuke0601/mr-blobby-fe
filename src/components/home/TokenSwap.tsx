import { Link } from "react-router-dom";
import PancakeswapImg from "../../assets/image/pancakeswap.svg";
import BnbImg from "../../assets/image/bnb.png";

export default function TokenSwap() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "linear-gradient(180deg, #2B2B2B 0%, #000000 100%)",
      }}
    >
      <div className="mx-auto max-w-[720px] pt-40 pb-[200px]">
        <h1 className="uppercase text-primary font-primary font-extrabold text-[56px] text-center">
          $Blobby token
        </h1>
        <p className="text-primary font-primary font-semibold text-[18px] mt-6 ">
          You can BUY BLOBBY on dextools or pancakeswap, we are nearly ready for
          full launch, website nearly built then we go!! Get some $BLOBBY today
          guys dont miss the pump!{" "}
          <span className="text-[24px]">2-5x expected!!!</span>
          <span>
            <Link
              to="https://www.dextools.io/app/en/bnb/pair-explorer/0xf457d9253b700ca42c697f191012af7b152e100e"
              target="_blank"
              className="ml-2 text-[#9C1EFF] text-[24px] font-bold underline"
            >
              Learn More...
            </Link>
          </span>
        </p>
        <div className="grid w-full mt-10 place-content-center">
          <button className="flex items-center py-4 swap-shadow rounded-xl bg-primary px-9">
            <img src={PancakeswapImg} className="w-12 h-12" alt="" />
            <span className="ml-4 text-dark text-[28px] font-extrabold uppercase">
              pancakeswap
            </span>
          </button>
        </div>
      </div>
      <img
        src={BnbImg}
        className="absolute -rotate-[30deg] bottom-5 right-20 z-20"
      />
      <img
        src={BnbImg}
        className="absolute rotate-[30deg] bottom-7 right-5 z-10 w-[90px] h-[90px] blur-sm"
      />
    </div>
  );
}
