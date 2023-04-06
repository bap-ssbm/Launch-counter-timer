import { Footer } from "./Footer";
import { CalanderSection } from "./CalanderSection";

function App() {
  return (
    <main className="flex flex-col justify-center items-center bg-blue-1300 h-screen">
      <div id="main-wrapper" className="bg-blue-1200 text-white w-full  px-5 md:max-w-[1440px] min-h-[667px] md:min-h-[800px] flex flex-col items-center font-bold justify-between">
        <h1 className="font-bold text-center text-[18px] tracking-[6.3px] mt-[38.5%] md:text-[20px] md:tracking-[8.75px] md:mt-[9.3%]">WE'RE LAUNCHING SOON</h1>
        <CalanderSection/>
        <Footer/>
      </div>

      <div className="attribution text-white">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Kentaro</a>.
      </div>
    </main>
  );
}

export default App;
