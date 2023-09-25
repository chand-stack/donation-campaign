import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { AiOutlineLine } from "react-icons/ai";

const Statistics = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardsFromLs = JSON?.parse(localStorage?.getItem("cards"));
    setCards(cardsFromLs);
  }, []);

  const data = [
    { title: "Your Donation", value: cards?.length || 0, color: "#00C49F" },
    {
      title: "Total Donation",
      value: 12 - cards?.length || 12,
      color: "#FF444A",
    },
  ];

  return (
    <div className="h-52 md:h-auto md:w-1/2 my-10 md:my-16 lg:my-24 container mx-auto">
      <PieChart
        data={data}
        label={({ dataEntry }) => `${Math?.round(dataEntry.percentage)}%`}
        labelPosition={45}
        animate
        paddingAngle={1}
      />
      <div className="flex items-center gap-3 justify-center">
        <div>
          <p className="text-lg flex items-center">
            Your Donation{" "}
            <AiOutlineLine className="text-[#00C49F] text-9xl font-black"></AiOutlineLine>
          </p>
        </div>
        <div>
          <p className="text-lg flex items-center">
            Total Donation{" "}
            <AiOutlineLine className="text-[#FF444A] text-9xl font-black"></AiOutlineLine>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
