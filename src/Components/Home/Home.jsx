import { useLoaderData } from "react-router-dom";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCard from "../HomeCard/HomeCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [card, setcard] = useState([]);

  const cards = useLoaderData();

  const searchHandler = (text) => {
    if (text === "Education" || text === "education") {
      const newCards = cards?.filter((card) => card.tag === "Education");
      setcard(newCards);
    } else if (text === "Health" || text === "health") {
      const newCards = cards?.filter((card) => card.tag === "Health");
      setcard(newCards);
    } else if (text === "Clothing" || text === "clothing") {
      const newCards = cards?.filter((card) => card.tag === "Clothing");
      setcard(newCards);
    } else if (text === "Food" || text === "food") {
      const newCards = cards?.filter((card) => card.tag === "Food");
      setcard(newCards);
    }
  };

  useEffect(() => {
    setcard(cards);
  }, [cards]);

  // console.log(Array.isArray(card));

  return (
    <div>
      <HomeBanner searchHandler={searchHandler}></HomeBanner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3 lg:px-16 my-24">
        {card?.map((card) => (
          <HomeCard key={card?.id} card={card} log/>
        ))}
      </div>
    </div>
  );
};

export default Home;
