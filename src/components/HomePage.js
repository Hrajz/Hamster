import Navbar from "./Navbar";
import RoadmapCard from "./RoadmapCard";
import "../App.css"; 
import Footer from "./Footer";
import image from "../12.png";
import image2 from "../14.png";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/airdrop"); // Navigate to the AirdropPage
  };


  return (
    <div className="bg-[#13111c] text-white min-h-screen">
      <Navbar />
      <section className="text-center py-2 px-4 flex flex-col items-center">
        <h1 className="text-[80px] font-bold mb-4 max-[800px]:text-[48px] max-[800px]:mt-[115px] max-[900px]:leading-tight">
          Unleash your inner CEO
        </h1>
        <img src={image} alt="image" />
        <p className="text-[#fffc] max-[800px]:text-[18px] mb-2 text-[24px] ">
          Make your way from the shaved hamster to the grandmaster CEO of the
          tier-1 crypto exchange
        </p>
        <p className="text-[#fffc] max-[800px]:text-[18px] mb-2 text-[24px] max-[800px]:hidden">
          Buy upgrades, complete quests, invite friends and become the best
        </p>
        <button id="btn" className="" onClick={handlePlayClick}>
          <img
            src={image2}
            alt=""
            className="w-[620px] hover:brightness-110 max-[800px]:w-[150vw] overflowx-x-hidden"
          />
        </button>
      </section>

      <section className="py-16 px-4">
        <h2 className="font-bold text-center mb-8 text-[80px] max-[800px]:text-[40px]">
          Roadmap
        </h2>
        <div className="flex flex-col w-full mx-auto">
          <RoadmapCard
            title="March 2024"
            items={["Basic game", "Mining updates", "Earn tasks"]}
          />
          <RoadmapCard
            title="April 2024"
            items={["Referral system", "LVL ratings", "Daily rewards"]}
          />
          <RoadmapCard
            title="May 2024"
            items={["Special cards", "Daily Combo", "Blockchain announcement"]}
          />
          <RoadmapCard
            title="June 2024"
            items={[
              "On-chain infrastructure development",
              "Wallet in-game implementation",
              "Web 3 pre-listing Quest",
            ]}
          />
          <RoadmapCard
            title="July 2024"
            items={[
              "Characters and skins",
              "Third-party game integration MVP",
              "Tech solution for the largest-ever AirDrop",
            ]}
          />
          <RoadmapCard
            title="Upcoming"
            items={[
              "Achievements",
              "Implementing tech for the largest AirDrop",
              "AirDrop tasks",
              "Gaming platform launch",
              "TGE and AirDrop distribution",
              "AppStore, Google Play Store apps",
              "Live events",
              "Time-limited events",
              "Squads",
              "And much more",
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
