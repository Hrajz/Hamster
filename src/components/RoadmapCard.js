const RoadmapCard = ({ title, items }) => {
  return (
    <div className="bg-gray-800 p-2 shadow-lg my-2 rounded-[50px] flex items-center border-l-[12px] border-[#19de8b] max-[800px]:flex-col max-[800px]:justify-start max-[800px]:border-l-[6px]">
      <h3 className="text-[80px] font-bold mb-4 ml-12 text-[#ffffff80] w-[50%] max-[800px]:text-[36px] max-[800px]:w-full">
        {title}
      </h3>
      <ul className="list-disc list-inside text-[22px] text-[#FFFFFF] py-2 max-[800px]:text-[18px] max-[800px]:px-1 ">
        {items.map((item, index) => (
          <li className="text-start" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapCard;
