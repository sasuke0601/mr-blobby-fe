import Header from "../components/Header";
import BubblesImg from "../assets/image/bubbles-sm.webp";
import MrBlobbyHead from "../assets/image/mrblobby-head.webp";
import CoinOne from "../assets/image/bitcoin-1.webp";
import CoinTwo from "../assets/image/bitcoin-2.png";
import CoinThree from "../assets/image/bnb.webp";
import Footer from "../components/home/Footer";
import { Helmet } from "react-helmet-async";

function Whitepaper() {
  return (
    <>
      <Helmet>
        <title>MrBlobby | Whitepaper</title>
        <meta name="description" content="Official Mr Blobby Meme Coin Page" />
      </Helmet>

      <main>
        <Header />
        <div className="min-h-full bg-[#202020] w-full pb-10 md:pt-20">
          <div
            className="relative w-full overflow-hidden "
            style={{
              background:
                "radial-gradient(100% 100% at 50% 0%, #670577 0%, #3A0343 100%)",
            }}
          >
            <div
              className="h-[180px] -mt-[20px] lg:-mt-[90px]"
              style={{ background: `url(${BubblesImg})` }}
            ></div>
            <div className="max-w-[760px] mx-auto mt-5 relative pb-[60px] z-20">
              <h1 className="font-extrabold text-shadow font-primary text-white text-[36px] sm:text-[48px] ml-[0] text-center md:text-left md:ml-[200px] mt-10">
                Blobby Token
                <br />
                WhitePaper
              </h1>
            </div>
            <img
              src={CoinOne}
              className="absolute bottom-10 right-[12%] blur-sm"
              alt="coin pattern"
            />
            <img
              src={CoinTwo}
              className="absolute bottom-5 left-[10%]  hidden md:block"
              alt="coin pattern"
            />
            <img
              src={CoinThree}
              className="absolute bottom-3 right-0 md:right-[30%] -rotate-12 w-20 h-20"
              alt="coin pattern"
            />
          </div>
          <div className="relative w-full pt-20 bg-dark">
            <div className=" md:max-w-[760px] mx-6 lg:mx-auto mt-5 pb-[60px] relative">
              <img
                src={MrBlobbyHead}
                className="absolute -top-[260px] md:-left-10 w-[140px] lg:w-[190px] lg:h-[248px]"
                alt=""
              />
              <p className="text-primary font-semibold text-[16px] sm:text-[18px]">
                <span className="font-bold text-[20px]">Introduction</span>
                <br />
                Blobby is a decentralized ecosystem built on the Binance Smart
                Chain (BSC) that offers a safe and engaging experience for
                everyone, featuring two games, Blobby.IO and Blobby World, that
                are built on the Binance blockchain and offer a Play-to-Earn
                model. The native token of the project is called BLOBBY, a BSC
                token that serves as the base currency.
                <br />
                <br />
                <span className="font-bold text-[20px]">
                  Mission and Vision
                </span>
                <br />
                The project's primary goal is to create a community of
                like-minded individuals who are excited about the BSC network
                and enjoy using it in a fun and engaging way. Our mission is to
                offer a safe and rewarding BSC experience by building various
                utilities on the BSC network, such as Blobbyscan, Blobby
                Token-2023 Standard decentralized exchange, and the Blobby
                Blobby game. Our vision is to make Blobby the go-to project for
                the BSC community and beyond by creating an ecosystem that
                rewards early investors and loyal community members.
                <br />
                <br />
                <span className="font-bold text-[20px]">Tokenomics</span>
                The total supply of BLOBBY is 14,000,000 with 5% reserved for
                the development team, 5% for the marketing team, and 90% for the
                community. The team is committed to transparency and will
                provide regular updates on the use of the reserved tokens.
                <br />
                <br />
                <span className="font-bold text-[20px]">Games</span>
                <br />
                Blobby.IO and Blobby World are two games that will be built on
                the Binance blockchain. Both games will be Play-to-Earn, meaning
                that players will be able to connect their wallets and earn
                BLOBBY tokens as they play. The games will be launched on the
                Appstore and Desktop.
                <br />
                <br />
                <span className="font-bold text-[20px]">Team</span>
                <br />
                The team behind Blobby is focused on building various utilities
                on the BSC network, such as Blobbyscan, Blobby Token-2023
                Standard decentralized exchange as well as games like "Blobby
                Blobby". The team is composed of six early investors who will be
                the backbone of the project. The team is committed to building
                the project from the ground up together and is focused on
                creating a community of like-minded individuals who are excited
                about the BSC network.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Whitepaper;
