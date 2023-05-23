import Header from "../components/Header";
import HeroCover from "../components/home/Banner";
import GameCta from "../components/home/GameCta";
import TokenSwap from "../components/home/TokenSwap";
import WhyInvest from "../components/home/WhyInvest";

function Home() {
  return (
    <main>
      <Header />
      <HeroCover />
      <WhyInvest />
      <GameCta />
      <TokenSwap />
    </main>
  );
}

export default Home;
