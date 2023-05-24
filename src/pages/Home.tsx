import Header from "../components/Header";
import HeroCover from "../components/home/HeroCover";
import Footer from "../components/home/Footer";
import GameCta from "../components/home/GameCta";
import Roadmap from "../components/home/Roadmap";
import TokenSwap from "../components/home/TokenSwap";
import WhyInvest from "../components/home/WhyInvest";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>MrBlobby | Home</title>
        <meta name="description" content="Official Mr Blobby Meme Coin Page" />
      </Helmet>
      <main>
        <Header />
        <HeroCover />
        <WhyInvest />
        <GameCta />
        <TokenSwap />
        <Roadmap />
        <Footer />
      </main>
    </>
  );
}

export default Home;
