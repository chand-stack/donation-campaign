import { useLoaderData } from "react-router-dom";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCard from "../HomeCard/HomeCard";


const Home = () => {
    const cards = useLoaderData()
    // console.log(cards);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3 lg:px-16 my-24">
                {
                    cards.map(card => <HomeCard key={card.id} card={card}/>)
                }
            </div>
        </div>
    );
};

export default Home;