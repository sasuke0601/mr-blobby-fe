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
            className="absolute top-20 left-[150px]"
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
    </main>
  );
}

export default Home;
