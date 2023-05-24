import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/home/Footer";

function BubbleShooter() {
  return (
    <>
      <Helmet>
        <title>MrBlobby | Bubble Shooter</title>
        <meta name="description" content="Official Mr Blobby Meme Coin Page" />
      </Helmet>
      <main>
        <Header className="fixed top-0 left-0 w-full" />
        <div className="bg-[#202020] w-full pb-10">
          <div className="max-w-[720px] mx-auto pt-[120px] relative">
            <iframe
              src="https://www.bubbleshooter.net/games/tropical-bubble-shooter/"
              width="100%"
              height="600"
            ></iframe>
          </div>
        </div>
        <Footer className="" />
      </main>
    </>
  );
}

export default BubbleShooter;
