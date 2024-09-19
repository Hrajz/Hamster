import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import image from "../11.png"
import image2 from "../13.png"

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center items-center py-4 px-8 bg-[#13111c] w-full max-[800px]:px-1 max-[800px]:py-1ax-[800px]:px-1 max-[800px]:py-1">
        <div className="px-[60px] pb-3 flex items-center space-x-4 rounded-b-[90px] border-b-8 border-x-8 border-[#2a2832] max-[800px]:border-b-[4px] max-[800px]:border-x-[4px] max-[800px]:px-[15px] max-[800px]:py-1 max-[800px]:rounded-b-[60px]">
          <img
            src={image}
            alt="Hamster Kombat Logo"
            className="w-[120px] h-[120px] max-[800px]:w-[66px] max-[800px]:h-[66px]"
          />
          <span className="text-[32px] font-bold max-[800px]:text-[26px]">
            Hamster Kombat
          </span>
        </div>
      </nav>
      <div className="absolute top-[50px] left-[20px] flex justify-center rounded-full border border-gray-800 w-fit py-2 mb-6 items-center max-[900px]:top-[95px] max-[900px]:py-0 max-[900px]:pl-1">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaSquareXTwitter className="size-[45px] max-[800px]:size-[30px]" />
        </a>

        <a href="#" className="text-gray-400 hover:text-white">
          <FaTelegram className="size-[45px] max-[800px]:size-[30px]" />
        </a>

        <p className=" text-2xl font-bold text-gray-500 py-2 px-4 rounded-md w-fit max-[800px]:text-[16px]">
          Join us!
        </p>
      </div>
      <img
        src={image2}
        alt=""
        className="w-[15.5%] mb-6 absolute top-[50px] right-[20px] max-[900px]:w-[150px]  max-[900px]:top-[100px]"
      />
    </>
  );
};

export default Navbar;
