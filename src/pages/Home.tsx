import Header from "../components/Header";
import HeroCover from "../assets/image/hero-cover.jpg";
import MrBlobbyImg from "../assets/image/mrblobby.png";

function Home() {
  return (
    <main>
      <Header />
      {/* Hero Cover Beginning */}
      <div className="h-[480px] w-full relative">
        <img
          src={HeroCover}
          className="absolute top-0 left-0 object-cover w-full h-full"
          alt=""
        />
        <div className="container relative z-10 w-full pt-20 mx-auto">
          <img
            src={MrBlobbyImg}
            className="absolute top-10 left-[100px]"
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
      {/* Hero Cover End */}
      {/* Invest Beginning */}
      <div className="w-full py-40 bg-dark">
        <div
          className="container mx-auto text-primary"
          style={{ maxWidth: 760 }}
        >
          <h1 className="text-center font-secondary text-[56px] font-extrabold">
            Why Invest In Blobby?
          </h1>
          <p className="font-primary text-[20px] font-semibold  mt-[60px]">
            <span className="font-bold uppercase">About Mr blobby token</span>
            <br />
            Mr Blobby is a character originally featured on the British Saturday
            night Variety show Noel's House Party, broadcast on BBC One. Created
            by Charlie Adams, a writer for the show, Mr Blobby is a bulbous pink
            figure covered in yellow spots, with a permanent toothy grin and
            green jiggling eyes. Mr Blobby communicates only by saying the word
            "blobby" in an electronically altered voice, expressing his moods
            through tone of voice and repetition. He topped the UK Singles Chart
            with the 1993 Christmas release "Mr Blobby".
            <br />
            <br />
            <span className="font-bold uppercase">Our mission</span>
            <br />
            Our mission is focused on building various utilities on the BSC
            network, such as games like "Blobby Blobby". The native token of the
            project is called BLOBBY, a BSC token that serves as the base
            currency.
            <br />
            <br />
            <span className="font-bold uppercase">WHY MR BLOBBY TOKEN?</span>
            <br />
            The project's primary goal is to create a FUN MEME and community of
            like-minded individuals who are excited about the BSC network and
            enjoy using it in a fun and engaging way. This Coin today is a meme
            coin, always do your own research before purchasing. <br />
          </p>
        </div>
      </div>
      {/* Invest End */}
    </main>
  );
}

export default Home;
