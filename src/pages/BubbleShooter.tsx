import Header from "../components/Header";
import Footer from "../components/home/Footer";

function BubbleShooter() {
  return (
    <main>
      <Header className="fixed top-0 left-0 w-full" />
      <div className="bg-[#202020] w-full pb-10 h-[100vh] min-h-[800px]">
        <div className="max-w-[720px] mx-auto pt-[120px]">
          <iframe
            src="https://www.bubbleshooter.net/games/tropical-bubble-shooter/"
            width="800"
            height="600"
          ></iframe>
        </div>
      </div>
      <Footer className="fixed bottom-0 left-0 w-full" />
    </main>
  );
}

export default BubbleShooter;
