import { FaDiscord, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-center flex item-center justify-center">
      <div className="flex justify-center space-x-4 rounded-full border border-gray-200 w-fit py-2 px-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaDiscord size={30} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaTelegram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
