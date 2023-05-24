import { Link } from "react-router-dom";
import PancakeswapImg from "../../assets/image/pancakeswap.svg";
import BnbImg from "../../assets/image/bnb.webp";

export default function TokenSwap() {
  return (
    <div
      className="relative w-full"
      style={{
        background: "linear-gradient(180deg, #2B2B2B 0%, #000000 100%)",
      }}
    >
      <div className="mx-6 lg:mx-auto max-w-[720px] pt-20 pb-[100px] lg:pt-40 lg:pb-[200px] ">
        <h1 className="uppercase text-primary font-primary font-extrabold text-[36px] lg:text-[56px] text-center">
          $Blobby token
        </h1>
        <p className="text-primary font-primary font-semibold text-[16px] lg:text-[18px] mt-6 ">
          You can BUY BLOBBY on dextools or pancakeswap, we are nearly ready for
          full launch, website nearly built then we go!! Get some $BLOBBY today
          guys dont miss the pump!{" "}
          <span className="text-[24px]">2-5x expected!!!</span>
          <span>
            <Link
              to="https://www.dextools.io/app/en/bnb/pair-explorer/0xf457d9253b700ca42c697f191012af7b152e100e"
              title="View Dextools State"
              target="_blank"
              className="ml-2 text-[#9C1EFF] text-[20px] lg:text-[24px] font-bold underline"
            >
              Learn More...
            </Link>
          </span>
        </p>
        <div className="grid w-full mt-10 place-content-center">
          <Link
            to="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x3EFf429BfCA605E310afb7F444B4cfa8D7D1d112"
            title="Swap on Pancakeswap"
          >
            <div className="inline-flex items-center py-4 rounded-lg swap-shadow lg:rounded-xl bg-primary px-9 play-hover">
              <img
                src={PancakeswapImg}
                className="w-8 h-8 lg:w-12 lg:h-12"
                alt="pancake logo"
              />
              <span className="ml-4 text-dark text-[24px] lg:text-[28px] font-extrabold uppercase">
                pancakeswap
              </span>
            </div>
          </Link>
        </div>
      </div>
      <img
        src={BnbImg}
        className="absolute -rotate-[30deg] bottom-5 right-20 z-20 hidden lg:block"
        alt="bnb image"
      />
      <img
        src={BnbImg}
        className="absolute rotate-[30deg] bottom-7 right-5 z-10 w-[90px] h-[90px] blur-sm hidden lg:block"
        alt="bnb image blue effect"
      />
    </div>
  );
}
