import Ribbon from "../../assets/image/ribbon.svg";
import PhaseItem from "./PhaseItem";
import BallGreen from "../../assets/image/bubble/green.png";
import BallBlue from "../../assets/image/bubble/blue.png";
import BallRed from "../../assets/image/bubble/red.png";
import BallYellow from "../../assets/image/bubble/yellow.png";

export default function Roadmap() {
  return (
    <div className="relative w-full bg-dark">
      <div className="h-[30px] sm:h-10 xl:h-[60px] w-full bg-white"></div>
      <img
        src={Ribbon}
        className="absolute -translate-x-1/2 left-1/2 xl:-top-[60px] -top-[36px] sm:-top-[50px] h-[120px] sm:h-[160px] xl:h-[234px]"
        alt="MrBlobby bow ribbon"
      />
      <div className="overflow-hidden bg-dark">
        <div className="container mx-auto lg:max-w-[760px] pt-[180px] lg:pt-[240px]">
          <h1 className="font-primary font-extrabold text-[36px] lg:text-[56px] text-center uppercase text-primary">
            roadmap
          </h1>
          <div className="mt-[72px] hidden sm:flex">
            <div className="mr-6 w-[358px] ">
              <PhaseItem
                phase={2}
                className="mt-12"
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    1K Followers
                    <br />
                    on twitter
                  </p>
                }
                pattern={
                  <img
                    src={BallGreen}
                    className="absolute w-20 h-20 -left-[200px] -top-[180px] blur-sm"
                    alt=""
                  />
                }
                isPassed
              />
              <PhaseItem
                phase={4}
                content={
                  <>
                    <p className="font-semibold text-primary text-[18px]">
                      Launch on Pancake Swap (14.5.23). $BLOBBY Token now
                      tradeable
                      <br />
                      WEBSITE UPGRADE WITH PLAYABLE BLOBBY GAME
                    </p>
                    <p className="font-semibold text-primary text-[24px]">
                      10,000 BLOBBIES Giveaway competition twitter competion
                    </p>
                  </>
                }
                pattern={
                  <img
                    src={BallYellow}
                    className="absolute w-20 h-20 -left-[320px] -top-[0px]"
                    alt=""
                  />
                }
                isNow
              />
              <PhaseItem
                phase={6}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Building a Team together with early investors and Tech DEVS
                    + game designers.
                  </p>
                }
              />
              <PhaseItem
                phase={8}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    FULL LAUNCH and token AIRDROP release / Burn excess tokens +
                    MEXC KUCOIN BITGET BYBIT Exclusive Listings 2023
                  </p>
                }
              />
              <PhaseItem
                phase={10}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Full Viral Marketing Campaign ready for bull market 4 years
                    cycle top. Take Profits when we do all alts 90% draw down
                    after bull market cycle.. Can we 25000 X BUY HODL and you
                    will be rewarded. 2025-26 BTC $124,000 our Cycle top
                    prediction going off previous cycle data. we use the CBBI
                    chart also to predict top and bottom of market.
                  </p>
                }
                pattern={
                  <img
                    src={BallRed}
                    className="absolute w-[120px] h-[120px] -left-[200px] -top-[140px] blur-md"
                    alt=""
                  />
                }
              />
            </div>
            <div className="ml-6 w-[358px] ">
              <PhaseItem
                phase={1}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Ready to <br />
                    Launch / Pre Sales
                  </p>
                }
                isPassed
              />
              <PhaseItem
                phase={3}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Sale Completed.
                    <br />
                    Ready for DEX
                  </p>
                }
                isPassed
              />
              <PhaseItem
                phase={5}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Mr Blobby returns on Britains Got Talent for Round 2 What
                    will he do next? ( BGT = UK TV primetime ITV Entertainment
                    show with Simon Cowell )
                  </p>
                }
                pattern={
                  <img
                    src={BallBlue}
                    className="absolute w-20 h-20 -right-[200px] -top-[140px] "
                    alt=""
                  />
                }
              />
              <PhaseItem
                phase={7}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    BGT Final plus Mass Marketing campaign. Twitter influencers
                    and Youtube influencers. ITV interview. We are working hard
                    to get support from BGT and ITV
                  </p>
                }
              />
              <PhaseItem
                phase={9}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    BLOBBY.IO Game Beta Stage- Play to Earn io game connect your
                    wallet collect $BLOBBY as rewards. also BLOBBYS WORLD Fun
                    platform game to be built on BSC. Q.1 2024
                  </p>
                }
                pattern={
                  <img
                    src={BallGreen}
                    className="absolute w-20 h-20 -right-[280px] -top-[140px] blur-sm"
                    alt=""
                  />
                }
              />
              <PhaseItem
                phase={11}
                content={
                  <p className="font-semibold text-primary text-[18px]">
                    Blobby Blobby Play to Earn Game {"("} This is exciting guys
                    we are working with gaming devlopers and making a play to
                    earn game old school stye platformer Like Sonic & Mario for
                    your phone via app and online.io where you will be rewarded
                    in BLOBBY as you play.
                  </p>
                }
              />
            </div>
          </div>

          <div className="mt-[72px] sm:hidden block pb-10 overflow-hidden">
            <PhaseItem
              phase={1}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Ready to <br />
                  Launch / Pre Sales
                </p>
              }
              isPassed
            />
            <PhaseItem
              phase={2}
              className="mt-12"
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  1K Followers
                  <br />
                  on twitter
                </p>
              }
              isPassed
            />
            <PhaseItem
              phase={3}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Sale Completed.
                  <br />
                  Ready for DEX
                </p>
              }
              isPassed
            />
            <PhaseItem
              phase={4}
              content={
                <>
                  <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                    Launch on Pancake Swap (14.5.23). $BLOBBY Token now
                    tradeable
                    <br />
                    WEBSITE UPGRADE WITH PLAYABLE BLOBBY GAME
                  </p>
                  <p className="font-semibold text-primary text-[24px]">
                    10,000 BLOBBIES Giveaway competition twitter competion
                  </p>
                </>
              }
              isNow
            />
            <PhaseItem
              phase={5}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Mr Blobby returns on Britains Got Talent for Round 2 What will
                  he do next? ( BGT = UK TV primetime ITV Entertainment show
                  with Simon Cowell )
                </p>
              }
            />
            <PhaseItem
              phase={6}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Building a Team together with early investors and Tech DEVS +
                  game designers.
                </p>
              }
            />
            <PhaseItem
              phase={7}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  BGT Final plus Mass Marketing campaign. Twitter influencers
                  and Youtube influencers. ITV interview. We are working hard to
                  get support from BGT and ITV
                </p>
              }
            />
            <PhaseItem
              phase={8}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  FULL LAUNCH and token AIRDROP release / Burn excess tokens +
                  MEXC KUCOIN BITGET BYBIT Exclusive Listings 2023
                </p>
              }
            />
            <PhaseItem
              phase={9}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  BLOBBY.IO Game Beta Stage- Play to Earn io game connect your
                  wallet collect $BLOBBY as rewards. also BLOBBYS WORLD Fun
                  platform game to be built on BSC. Q.1 2024
                </p>
              }
            />
            <PhaseItem
              phase={10}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Full Viral Marketing Campaign ready for bull market 4 years
                  cycle top. Take Profits when we do all alts 90% draw down
                  after bull market cycle.. Can we 25000 X BUY HODL and you will
                  be rewarded. 2025-26 BTC $124,000 our Cycle top prediction
                  going off previous cycle data. we use the CBBI chart also to
                  predict top and bottom of market.
                </p>
              }
            />
            <PhaseItem
              phase={11}
              content={
                <p className="font-semibold text-primary text-[16px] sm:text-[18px]">
                  Blobby Blobby Play to Earn Game {"("} This is exciting guys we
                  are working with gaming devlopers and making a play to earn
                  game old school stye platformer Like Sonic & Mario for your
                  phone via app and online.io where you will be rewarded in
                  BLOBBY as you play.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
