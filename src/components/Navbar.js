import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import image from "../11.png"
import image2 from "../13.png"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center py-4 px-8 bg-[#13111c] w-full max-[800px]:px-1 max-[800px]:py-1ax-[800px]:px-1 max-[800px]:py-1">
        <div className="px-[60px] pb-3 flex flex-col items-center space-x-4 rounded-b-[90px] border-b-8 border-x-8 border-[#2a2832] max-[800px]:border-b-[4px] max-[800px]:border-x-[4px] max-[800px]:px-[20px] max-[800px]:py-1 max-[800px]:rounded-b-[50px]">
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt="Hamster Kombat Logo"
              className="w-[120px] h-[120px] max-[800px]:w-[66px] max-[800px]:h-[66px] rounded-full"
            />
            <span className="text-[32px] font-bold max-[800px]:text-[26px]">
              Hamster Kombat
            </span>
          </div>
          <div className="w-full px-8 py-1 rounded-full full bg-[#FFFFFF1F] mt-3 mb-3 max-[600px]:rounded-3xl max-[600px]:px-5">
            <p className="text-[14px] text-[#FFFFFF80] max-[600px]:text-[12px]">
              {" "}
              contact Address
            </p>
            <p className="text-[16px] max-[600px]:text-[12px]">
              {" "}
              EQAJ8uWd7EBqsmpSWaRdf_I-8R8-XHwh3gsNKhy-UrdrPcUo
            </p>
          </div>
        </div>
      </nav>
      <div className="absolute top-[50px] left-[20px] flex justify-center rounded-full border border-gray-800 w-fit py-2 mb-6 items-center max-[900px]:top-[194px] max-[900px]:py-0 max-[900px]:pl-4">
        <a
          href="https://twitter.com/hamster_kombat"
          className="text-gray-400 hover:text-white"
        >
          <FaSquareXTwitter className="size-[45px] max-[800px]:size-[27px]" />
        </a>

        <a
          href="https://t.me/hamster_kombat"
          className="text-gray-400 hover:text-white"
        >
          <FaTelegram className="size-[45px] max-[800px]:size-[27px]" />
        </a>

        <p className=" text-2xl font-bold text-gray-500 py-2 px-4 rounded-md w-fit max-[800px]:text-[16px] max-[800px]:py-[3px]">
          Join us!
        </p>
      </div>
      <a href="https://hamsterkombatgame.io/docs/HK_WP_03.pdf">
        <img
          src={image2}
          alt=""
          className="w-[15.5%] mb-6 absolute top-[50px] right-[20px] max-[900px]:w-[160px]  max-[900px]:top-[190px]"
        />
      </a>
    </>
  );
};

export default Navbar;
